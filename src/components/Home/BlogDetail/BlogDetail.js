import React from 'react';
import './BlogDetail.css';
const BlogDetail = ({ blog }) => {
    return (
        <div className="col-lg-4 mt-2">
            <div className="card card-body p-4">
                <div className="d-flex">
                    <div>
                        <img src={blog.img} alt="" />
                    </div>
                    <div>
                        <h3 className="mt-5 ms-5 text-info">{blog.name}</h3>
                    </div>
                </div>
                <h3 className="my-4">{blog.title}</h3>
                <p className="descrip">{blog.description}</p>
            </div>
        </div>
    );
};

export default BlogDetail;