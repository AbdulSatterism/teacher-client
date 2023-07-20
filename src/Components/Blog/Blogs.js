import React from 'react';
import Blog from './Blog';

const Blogs = () => {
    const questionAnswer = [
        {
            id: 1,
            questionName: 'Difference between SQL and NoSQL?',
            answer: 'SQL: means Structure Query Language and NoSQL means Not Structure Query Language, sql have relational database system it found have table and table have multiple row and columns , and noSQL have key and value , sql use as mysql, oracle,mms and noSQL use mongodb, '
        },
        {
            id: 2,
            questionName: 'What is JWT, and how does it work?',
            answer: "JWT means Json Web Token. JWT it's work server site and client site verification method. jwt ensure secure a web site. jwt send a token in user if user have a valid jwt token then permit to access this application otherwise user can't access or login in application. "
        },
        {
            id: 3,
            questionName: 'What is the difference between javascript and NodeJS?',
            answer: "Node js is not programming language it's a runtime. A runtime is an area where a programming language runs , in case of node js ..... node js uses javascript as the programming language and it's runs on the server node js is running on server . javascript is a programming language and node js is a runtime"
        },
        {
            id: 4,
            questionName: 'How does NodeJS handle multiple requests at the same time?',
            answer: ''
        }
    ]
    return (
        <div className='grid grid-cols-1 gap-6 mt-16 lg:grid-cols-3 md:grid-cols-2'>
            {
                questionAnswer.map(blogAnswer => <Blog
                    key={blogAnswer.id}
                    blogAnswer={blogAnswer}
                ></Blog>)
            }
        </div>
    );
};

export default Blogs;