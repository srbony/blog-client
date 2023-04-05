import React from 'react';

const Blogs = ({ blogPost }) => {
    const { title, content, image, _id } = blogPost;
    console.log(blogPost);
    return (
        <div>
            <h2>{title}</h2>
            <img src={image} alt="" />
            <p>{content}</p>
        </div>
    );
};

export default Blogs;