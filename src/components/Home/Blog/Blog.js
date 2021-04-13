import React from 'react';
import BlogDetail from '../BlogDetail/BlogDetail';
import person from '../../../images/person.png';
import person2 from '../../../images/person.png';
import person3 from '../../../images/person.png';

const Blog = () => {
    const blogData = [
        {
            img: person,
            name: 'Dr.Caudi',
            title: 'Two Times of Brush in a day can keep you healthy',
            description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati ratione quis, quisquam architecto assumenda accusantium.'
        },
        {
            img: person2,
            name: 'Dr.Mitchel',
            title: 'To Tooth cancer is taking a challenge',
            description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati ratione quis, quisquam architecto assumenda accusantium.'
        },
        {
            img: person3,
            name: 'Dr.Caudi',
            title: 'Two Times of Brush in a day can keep you healthy',
            description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati ratione quis, quisquam architecto assumenda accusantium.'
        }
    ]
    return (
        <section className="clearfix">
            <div className="container">
                <div className="row">
                    <h3 className="sub-head">Blog</h3>
                    <h1 className="head-text text-center">
                        From Our Blog News
                    </h1>
                </div>
            </div>
            <div className="container">
                <div className="row mt-5">
                    {
                        blogData.map(blog => <BlogDetail blog={blog}></BlogDetail>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Blog;