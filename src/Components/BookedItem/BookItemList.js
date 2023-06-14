import React from 'react';

const BookItemList = ({ book, handleDelete }) => {
    const { name, serviceName, phone, price, _id } = book;
    // console.log(name)
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
            <td>{phone}</td>
            <td>{price}</td>
            <th>
                <button onClick={() => handleDelete(_id)} className="btn btn-ghost">Delete</button>
            </th>
        </tr>
    );
};

export default BookItemList;