import React from 'react'

const BlogPage = () => {
    return (
        <div className='pt-10 pb-20 bg-gray-100'>
            <h1 className="text-3xl font-semibold text-center mx-auto">Our Latest Blogs</h1>
            <p className="text-sm text-slate-500 text-center mt-2 max-w-lg mx-auto">A visual collection of our most recent works -
                each piece crafted with intention, emotion, and style.</p>

            <div className="flex items-center gap-6 h-[400px] w-full max-w-5xl mt-10 mx-auto">
                <div className="relative group flex-grow transition-all w-56 h-[400px] duration-500 hover:w-full">
                    <img className="h-full w-full object-cover object-center"
                        src="https://images.unsplash.com/photo-1543269865-0a740d43b90c?q=80&w=800&h=400&auto=format&fit=crop"
                        alt="image" />
                    <div
                        className="absolute inset-0 flex flex-col justify-end p-10 text-white bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <h1 className="text-3xl">Prompt engineers</h1>
                        <p className="text-sm">Bridging the gap between human intent and machine understanding through expert prompt design.</p>

                    </div>
                </div>
                <div className="relative group flex-grow transition-all w-56 h-[400px] duration-500 hover:w-full">
                    <img className="h-full w-full object-cover object-right"
                        src="https://images.unsplash.com/photo-1714976326351-0ecf0244f0fc?q=80&w=800&h=400&auto=format&fit=crop"
                        alt="image" />
                    <div
                        className="absolute inset-0 flex flex-col justify-end p-10 text-white bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <h1 className="text-3xl">Data scientists</h1>
                        <p className="text-sm">Bridging the gap between human intent and machine understanding through expert prompt design.</p>

                    </div>
                </div>
                <div className="relative group flex-grow transition-all w-56 h-[400px] duration-500 hover:w-full">
                    <img className="h-full w-full object-cover object-center"
                        src="https://images.unsplash.com/photo-1736220690062-79e12ca75262?q=80&w=800&h=400&auto=format&fit=crop"
                        alt="image" />
                    <div
                        className="absolute inset-0 flex flex-col justify-end p-10 text-white bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <h1 className="text-3xl">Software engineers</h1>
                        <p className="text-sm">Bridging the gap between human intent and machine understanding through expert prompt design.</p>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default BlogPage;
