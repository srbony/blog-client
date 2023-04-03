import React from 'react';
import './CreatePost.css'

const CreatePost = () => {

    const handleForm = event => {
        event.preventDefault();
        const form = event.target;
        const title = form.title.value;
        const image = form.image.files[0];
        const content = form.content.value;
        console.log(content);
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