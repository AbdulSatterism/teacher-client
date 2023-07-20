import React from 'react';

const Blog = ({ blogAnswer }) => {
    const { questionName, answer } = blogAnswer;
    return (
        <div className={`card p-6 text-black md:card-side shadow-xl`}>
            <div className="card-body">
                <h2 className="card-title text-sm font-bold">Q: {questionName}</h2>
                <p>{answer}</p>
            </div>
        </div>
    );
};

export default Blog;