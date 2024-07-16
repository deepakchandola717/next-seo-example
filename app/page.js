import Link from "next/link"

const posts = [
  {
    "userId": 1,
    "id": 1,
    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
  },
  {
    "userId": 1,
    "id": 2,
    "title": "qui est esse",
    "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
  },
  {
    "userId": 1,
    "id": 3,
    "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
    "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
  },
  {
    "userId": 1,
    "id": 4,
    "title": "eum et est occaecati",
    "body": "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
  },
  {
    "userId": 1,
    "id": 5,
    "title": "nesciunt quas odio",
    "body": "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque"
  },
]

const testimonials = [
  {
    name: 'John Doe',
    role: 'Web Developer',
    content: 'This blog has tremendously helped me in my journey to becoming a proficient web developer.',
    imageUrl: 'https://api.slingacademy.com/public/sample-photos/11.jpeg',
  },
  {
    name: 'Jane Smith',
    role: 'Frontend Engineer',
    content: 'The articles are well-written and provide deep insights into web development trends.',
    imageUrl: 'https://api.slingacademy.com/public/sample-photos/12.jpeg',
  },
]



export default function Home() {
  return (
    <div>
      <main className="bg-gray-100 min-h-screen">
        <header className="bg-white shadow sticky top-0 z-50">
          <div className="container mx-auto px-4 py-6 flex justify-between items-center">
            <h1 className="text-3xl font-bold text-gray-800">My Blog</h1>
            <nav>
              <a href="#home" className="text-gray-800 mx-2 hover:text-blue-600">Home</a>
              <a href="/about" className="text-gray-800 mx-2 hover:text-blue-600">About</a>
              <a href="#posts" className="text-gray-800 mx-2 hover:text-blue-600">Posts</a>
              <a href="/contact-us" className="text-gray-800 mx-2 hover:text-blue-600">Contact</a>
            </nav>
          </div>
        </header>

        <section id="home" className="hero bg-blue-600 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-5xl font-bold mb-4">Welcome to My Blog</h2>
            <p className="text-xl mb-8">Read our latest articles on web development, programming, and more.</p>
            <a href="#posts" className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition">Explore Posts</a>
          </div>
        </section>

        <section id="about" className="container mx-auto px-4 py-16 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">About Us</h2>
          <p className="text-gray-700 text-lg max-w-3xl mx-auto">We are passionate about web development and strive to provide high-quality content to help you in your programming journey. Our blog covers a wide range of topics, from beginner tutorials to advanced techniques.</p>
        </section>

        
        <section id="posts" className="featured-posts container mx-auto px-4 py-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">Featured Posts</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">
                    <Link href={`/posts/${post.id}`}>
                      <span className="hover:underline text-black">{post.title}</span>
                    </Link>
                  </h3>
                  <p className="text-gray-700 my-4">{post.body}</p>
                  <Link href={`/posts/${post.id}`}>
                    <span className="underline text-black">{"read full story..."}</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="cta bg-blue-600 text-white py-20 text-center">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-4">Join Our Community</h2>
            <p className="text-xl mb-8">Subscribe to our newsletter to stay updated with the latest posts.</p>
            <a href="#contact" className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition">Subscribe Now</a>
          </div>
        </section>

        <section id="testimonials" className="container mx-auto px-4 py-16 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-8">Testimonials</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-2xl font-bold mb-2">{testimonial.name}</h3>
                <p className="text-gray-700 italic">{testimonial.role}</p>
                <p className="text-gray-700 mt-4">{testimonial.content}</p>
              </div>
            ))}
          </div>
        </section>

        <footer id="contact" className="bg-gray-800 text-white py-6">
          <div className="container mx-auto px-4 text-center">
            <p>&copy; 2023 My Blog. All rights reserved.</p>
            <p>Email: info@myblog.com | Phone: (123) 456-7890</p>
          </div>
        </footer>
      </main>
    </div>
  )
}
