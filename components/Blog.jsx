import React from 'react';
import {blogs} from "../Data";

const Blog = () => {
  return (
    <div className="section" id="blog">
     <div className="mb-8">
<h2 className="text-[1.5rem] font-bold">Latest Articles</h2>
<div className="w-14 h-[3px] rounded-sm bg-green-600 ">
</div>
     </div>
     <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
        {blogs.map((blog) => {
            return (
                <div className="shadow-md hover:shadow-none p-2" key={blog.id} >
                    <img src={blog.image} alt="" />
                    <div className="mt-3">
                    <div className="text-xl font-bold">
                         {blog.title}</div>
                         <p className="text-[0.9rem] mt-2 opacity-80">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                             Culpa sunt, eos explicabo recusandae laboriosam 
                             sint tenetur, labore vel ullam aliquam minus in 
                             expedita placeat commodi ut,
                              perferendis id? Odit, eaque?
                              </p>
                              <button className="text-[0.9rem] mt-2 text-green-600" >Read More</button>
                    </div>
                </div>
            );
        })}
     </div>
    </div>
  );
};

export default Blog;