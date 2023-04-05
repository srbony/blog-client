import React from 'react';
import './CreatePost.css'
import { toast } from 'react-hot-toast';

const CreatePost = () => {

    const handleForm = event => {
        event.preventDefault();
        const form = event.target;
        const title = form.title.value;
        const image = form.image.files[0];
        const content = form.content.value;
        // console.log(content);



        //upload image into imgbb
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=87c47e4a9562b277d4d4cdd9c60b2681`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
            //87c47e4a9562b277d4d4cdd9c60b2681
            .then(res => res.json())
            .then(data => {
                console.log(data.data.display_url);
                const posts = {
                    title: title,
                    image: data.data.display_url,
                    content: content
                }
                //store data into mongodb
                fetch('http://localhost:5000/posts', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(posts)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.acknowledged) {
                            toast.success('created post successfully!');
                            form.reset('');

                        }
                    })
                    .catch(error => console.log(error));

            })
            .catch(error => console.log(error))

    }


    return (
        <div>
            {/* <h2>CREATEPOST FORM</h2> */}
            <div className='full-form'>
                {/* <p className='heading'>Creat Post</p> */}
                <form className='form'
                    onSubmit={handleForm}
                >
                    <span className='headding'>Creat Post</span>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text ">Title</span>
                        </label>
                        <input type="text" name="title" placeholder="Write Title" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text ">Image</span>
                        </label>
                        <input type="file" name="image" placeholder="Upload Image" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text ">Content</span>
                        </label>
                        {/* <input type="textarea" name="content" placeholder="Write your content" className="input input-bordered" /> */}
                        <textarea type="message " name="content" placeholder='Write content' rows="4" cols="30"></textarea>
                    </div>
                    <div>
                        <input type="submit" className='submit-button' />
                    </div>

                </form>
            </div>
        </div>
    );
};

export default CreatePost;