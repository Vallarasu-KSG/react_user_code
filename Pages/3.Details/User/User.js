import React from 'react';
// import './User.css'
import { Link } from 'react-router-dom';

const User = ({ id, firstName, lastName, gender, age, dateOfBirth, mobile, email, course, batch, fees,}) => {
    return (
        <div className='User-container'>
            <table className='table' border={1}>
                <thead>
                    <tr>
                        <th className='t1' >Register ID</th>
                        <th className='t2' >First Name</th>
                        <th className='t3' >Last Name</th>
                        <th className='t4' >Gender</th>
                        <th className='t5' >Age</th>
                        <th className='t6' >Data of Birth</th>
                        <th className='t7' >Mobile</th>
                        <th className='t8' >Email</th>
                        <th className='t9' >Course</th>
                        <th className='t10'>Batch</th>
                        <th className='t11'>Fees</th>
                        
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{id}</td>
                        <td>{firstName}</td>
                        <td>{lastName}</td>
                        <td>{gender}</td>
                        <td>{age}</td>
                        <td>{dateOfBirth}</td>
                        <td>{mobile}</td>
                        <td>{email}</td>
                        <td>{course}</td>
                        <td>{batch}</td>
                        <td>{fees}</td>
                        <td className='Actions'>
                        {/* DeleteDetail */}
                            <Link onClick={''} title='Delete'>
                                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px">
                                    <path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/>
                                </svg>
                            </Link>
                            <Link title='View'>View</Link>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default User;
