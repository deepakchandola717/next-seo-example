/* eslint-disable @next/next/no-img-element */ // 👈 we dont use next/image here in og component

import { ImageResponse } from 'next/og'; //👈 import from 'next/server' if using versions earlier than 14



export const size = {
  width: 900,
  height: 450,
};

export const contentType = 'img/png';

export default async function og({ params: { id } }) {
  const blog = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/blogs/${id}`, { next: { revalidate: 10 } }).then((res) => res.json()).then((res) => res.data.blogMeta);

  return new ImageResponse(
    (
      <div tw="relative flex items-center justify-center h-full w-full">
        <img tw="w-full h-full object-cover opacity-60" src={blog?.coverImage} alt={blog?.title} />
        <div tw="absolute flex inset-0 h-full w-full">
          <div tw="absolute flex flex-col p-4 bg-[#FDB813] items-start bottom-2 w-full text-black opacity-100">
            <h1 tw="text-4xl font-bold m-0">{blog.title}</h1>
            <p tw="text-lg truncate">{`${blog.description.slice(0, 180)}... read more`}</p>
          </div>
        </div>
      </div>
    ),
    size,
  );
}
