import React from 'react'
import { blogData } from '../data/blogData';

const BlogPage = () => {
    return (
        <div className='pt-30 pb-20 bg-gradient-to-r from-black via-gray-900 to-black px-4'>
            <h1 className="text-3xl font-semibold text-center mx-auto text-white">Our Latest Blogs</h1>
            <p className="text-sm text-slate-400 text-center mt-2 max-w-lg mx-auto">A visual collection of our most recent works -
                each piece crafted with intention, emotion, and style.</p>

            <div className="flex flex-row items-center gap-6 h-[350px] w-full max-w-5xl mt-14 mx-auto">
                {blogData.slice(0, 3).map((blog) => (
                    <div key={blog.id} className="relative group flex-grow transition-all w-80 h-96 md:w-56 md:h-[400px] duration-500 hover:w-full">
                        <img className="h-full w-full object-cover object-center"
                            src={blog.image}
                            alt={blog.title} />
                        <div
                            className="absolute inset-0 flex flex-col justify-end p-10 text-white bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-300">
                            <h1 className="text-3xl">{blog.title}</h1>
                            <p className="text-sm">{blog.content}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default BlogPage;
