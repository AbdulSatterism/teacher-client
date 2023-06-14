import React from 'react';

const ReviewList = ({ rev, handleDelete }) => {
    const { name, serviceName, comment, _id } = rev;
    return (

        <tr>

            <td>
                <div className="flex items-center space-x-3">
                    <div>
                        <div className="font-bold">{name}</div>
                    </div>
                </div>
            </td>
            <td>
                {serviceName}
                <br />

            </td>
            <td>{comment}</td>
            <th>
                <button onClick={() => handleDelete(_id)} className="btn btn-ghost">Delete</button>
                <button className="btn btn-ghost">Update</button>
            </th>
        </tr>
    );
};

export default ReviewList;