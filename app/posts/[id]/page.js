import Image from 'next/image';
import Link from 'next/link';

async function fetchBlogById(id) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, { next: { revalidate: 10 } }).then((res) => res.json());
  return response;
}

async function getBlogCover(id) {
    const response = await fetch(`https://api.slingacademy.com/v1/sample-data/photos/${id}`, { next: { revalidate: 10 } }).then((res) => res.json()).then(res=>res["photo"]["url"]);
    return response;
}

export async function generateMetadata({ params: { id } }) {
  const blog = await fetchBlogById(id);
  if(!blog){
    return {
      title: "Not Found",
      description: "Not Found"
    }
  }
  return {
    title: blog.title,
    description: blog.body,
    alternates: {
      canonical: `/posts/${id}`,
      languages: {
        'en-US': `en-US/posts/${id}`,
        'en-GB': `en-GB/posts/${id}`,
      }
    }
  };
}


async function Blog({ params: { id } }) {
  const blog = await fetchBlogById(id);
  const coverImage = await getBlogCover(id);

  return (
    <div className="container flex flex-col mt-24 p-4 m-4 h-full md:w-4/6 mx-auto">
      <div className="flex">
        <Link href="/">
          <p className="text-blue-400 hover:text-blue-600 font-bold cursor-pointer">← Home</p>
        </Link>
      </div>
      <h1 className="text-4xl font-semibold my-4 text-gray-800">{blog.title}</h1>
      <div className="flex items-center my-2">
        <h3 className="text-lg font-semibold">{`${blog.authorName || 'Editorial Team'}, `}</h3>
        <h3 className="text-base mx-2">{new Date().toDateString()}</h3>
      </div>
      <div className="bg-blue-50 my-4 p-4 rounded-xl">
        <p className="text-lg font-semibold">{blog.body}</p>
      </div>
      <div className="flex items-center justify-center w-full h-96 overflow-hidden rounded">
        <Image className="w-full h-full object-cover" src={coverImage} alt={blog.title} width={900} height={900} />
      </div>
      <div className="my-4">
        {/* added multiple time for better display since dummy blog body is very small */}
        {blog.body} 
        {blog.body}
        {blog.body}
        {blog.body}
      </div>
    </div>
  );
}

export default Blog;
