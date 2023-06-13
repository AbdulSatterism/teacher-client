import React from 'react';

const ReviewList = ({ rev }) => {
    const { name, serviceName, comment } = rev;
    return (
        <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Service Name</th>
                        <th>Reviews</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="hover">
                        <th></th>
                        <td>{name}</td>
                        <td>{serviceName}</td>
                        <td>{comment}</td>
                    </tr>

                </tbody>
            </table>
        </div>
    );
};

export default ReviewList;