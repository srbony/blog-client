import React, { useEffect, useState } from 'react';
import './BlogPosts.css';
import Blogs from '../Blogs/Blogs';

const BlogPosts = () => {
    const [BlogPosts, setBlogPosts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/posts')
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setBlogPosts(data);
            })
    }, [])



    return (
        <div>
            {/* {
                BlogPosts.map(blogPost => <div blogPost={blogPost} key={blogPost._id}>

                    <h2>{blogPost.title}</h2>

                </div>)
            } */}
            <div className='Blogs-container'>
                {
                    BlogPosts.map(blogPost => <Blogs blogPost={blogPost} key={blogPost._id}></Blogs>)
                }
            </div>

        </div>
    );
};

export default BlogPosts;