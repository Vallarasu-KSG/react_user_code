import React, { useContext, useState } from 'react';
import './Details.css';
import { Link } from 'react-router-dom';
import { GlobalContext } from '../../Context/GlobalState';

const Details = () => {
    const { CDuser, setCDuser } = useContext(GlobalContext);
    const [editID, setEditID] = useState(-1);
    const [editData, setEditData] = useState({}); // State to hold the data being edited

    const DeleteDetail = (id) => {
        setCDuser((currentsetCDuser) => currentsetCDuser.filter((user) => user.id !== id));
    };

    const handlePrintDetail = (id) => {
        const printContent = document.getElementById(`user-details-${id}`);
        const printWindow = window.open('', '', 'height=600,width=800');
        printWindow.document.write('<html><head><title>User Details</title></head><body>');
        printWindow.document.write(printContent.innerHTML);
        printWindow.document.write('</body></html>');
        printWindow.document.close();
        printWindow.print();
    };

    const handleEditDetail = (user) => {
        setEditID(user.id);
        setEditData({ ...user }); // Copy current user data for editing
    };

    const handleUpdateDetail = () => {
        setCDuser((currentsetCDuser) =>
            currentsetCDuser.map((user) => (user.id === editID ? { ...user, ...editData } : user))
        );
        setEditID(-1); // Reset edit ID after updating
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditData((prev) => ({ ...prev, [name]: value })); // Update edit data state
    };

    return (
        <div className="container">
            <div className="invoice-data-container">
                {CDuser.length === 0 ? (
                    <div>
                        <h2>
                            No Student Details. Please go to the <Link to="/Invoice">Register</Link>
                        </h2>
                    </div>
                ) : (
                    <div className="table-container">
                        <table className="table" border={1}>
                            <thead>
                                <tr>
                                    <th className="t1">Register ID</th>
                                    <th className="t2">First Name</th>
                                    <th className="t3">Last Name</th>
                                    <th className="t4">Gender</th>
                                    <th className="t5">Age</th>
                                    <th className="t6">Date of Birth</th>
                                    <th className="t7">Mobile</th>
                                    <th className="t8">Email</th>
                                    <th className="t9">Course</th>
                                    <th className="t10">Batch</th>
                                    <th className="t11">Admission Date</th>
                                    <th className="t12">Fees</th>
                                    <th className="Actions">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {CDuser.map((user) =>
                                    user.id === editID ? (
                                        <tr key={user.id}>
                                            <td className="tt1">{user.id}</td> {/* Non-editable ID */}
                                            <td className="tt1">
                                                <input
                                                    type="text"
                                                    name="firstName"
                                                    value={editData.firstName}
                                                    onChange={handleChange}
                                                />
                                            </td>
                                            <td className="tt1">
                                                <input
                                                    type="text"
                                                    name="lastName"
                                                    value={editData.lastName}
                                                    onChange={handleChange}
                                                />
                                            </td>
                                            <td className="tt1">
                                                <input
                                                    type="text"
                                                    name="gender"
                                                    value={editData.gender}
                                                    onChange={handleChange}
                                                />
                                            </td>
                                            <td className="tt1">
                                                <input
                                                    type="text"
                                                    name="age"
                                                    value={editData.age}
                                                    onChange={handleChange}
                                                />
                                            </td>
                                            <td className="tt1">
                                                <input
                                                    type="text"
                                                    name="dateOfBirth"
                                                    value={editData.dateOfBirth}
                                                    onChange={handleChange}
                                                />
                                            </td>
                                            <td className="tt1">
                                                <input
                                                    type="text"
                                                    name="mobile"
                                                    value={editData.mobile}
                                                    onChange={handleChange}
                                                />
                                            </td>
                                            <td className="tt1">
                                                <input
                                                    type="text"
                                                    name="email"
                                                    value={editData.email}
                                                    onChange={handleChange}
                                                />
                                            </td>
                                            <td className="tt1">
                                                <input
                                                    type="text"
                                                    name="course"
                                                    value={editData.course}
                                                    onChange={handleChange}
                                                />
                                            </td>
                                            <td className="tt1">
                                                <input
                                                    type="text"
                                                    name="batch"
                                                    value={editData.batch}
                                                    onChange={handleChange}
                                                />
                                            </td>
                                            <td className="tt1">
                                                <input
                                                    type="text"
                                                    name="admissionDate"
                                                    value={editData.admissionDate}
                                                    onChange={handleChange}
                                                />
                                            </td>
                                            <td className="tt1">
                                                <input
                                                    type="text"
                                                    name="fees"
                                                    value={editData.fees}
                                                    onChange={handleChange}
                                                />
                                            </td>
                                            <td className="tt1">
                                                <button onClick={handleUpdateDetail}>Update</button>
                                            </td>
                                        </tr>
                                    ) : (
                                        <tr key={user.id} id={`user-details-${user.id}`}>
                                            <td>{user.id}</td>
                                            <td>{user.firstName}</td>
                                            <td>{user.lastName}</td>
                                            <td>{user.gender}</td>
                                            <td>{user.age}</td>
                                            <td>{user.dateOfBirth}</td>
                                            <td>{user.mobile}</td>
                                            <td>{user.email}</td>
                                            <td>{user.course}</td>
                                            <td>{user.batch}</td>
                                            <td>{user.admissionDate}</td>
                                            <td>{user.fees}</td>
                                            <td className="Actions1">
                                                <button title="Delete" onClick={() => DeleteDetail(user.id)}>
                                                    Delete
                                                </button>
                                                <button title="Edit" onClick={() => handleEditDetail(user)}>
                                                    Edit
                                                </button>
                                                <button title="Print" onClick={() => handlePrintDetail(user.id)}>
                                                    Print
                                                </button>
                                            </td>
                                        </tr>
                                    )
                                )}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Details;
