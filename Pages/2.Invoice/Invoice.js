import React, { useContext, useEffect, useState } from 'react';
import './Invoice.css';
import { v4 as uuid } from 'uuid';
import { GlobalContext } from '../../Context/GlobalState';
// import { useNavigate } from 'react-router-dom';

const Invoice = () => {
    // const navigate = useNavigate();

    const { setCDuser } = useContext(GlobalContext);
    
    const [StudentDetail, setStudentDetail] = useState({
        id: '',
        firstName: '',
        lastName: '',
        gender: '',
        age: '',
        dateOfBirth: '',
        mobile: '',
        email: '',
        course: '',
        batch: '',
        admissionDate: '',
        fees: '',
    });

    const [errors, setErrors] = useState({}); // State for validation errors

    const handleChange = (event) => {
        const { name, value } = event.target;
        setStudentDetail((currentStudentDetails) => ({
            ...currentStudentDetails,
            [name]: value
        }));
    };

    const handleGenderChange = (event) => {
        const { value } = event.target;
        setStudentDetail((currentStudentDetails) => ({
            ...currentStudentDetails,
            gender: value
        }));
    };

    useEffect(() => {
        setStudentDetail((currentStudentDetails) => ({
            ...currentStudentDetails,
            id: uuid()
        }));
    }, []);

    const validateForm = () => {
        const newErrors = {};
        if (!StudentDetail.firstName) newErrors.firstName = true;
        if (!StudentDetail.lastName) newErrors.lastName = true;
        if (!StudentDetail.gender) newErrors.gender = true;
        if (!StudentDetail.age) newErrors.age = true;
        if (StudentDetail.age < 0) newErrors.age = true;
        if (!StudentDetail.dateOfBirth) newErrors.dateOfBirth = true;
        if (!StudentDetail.mobile) newErrors.mobile = true;
        if (!/^\d{10}$/.test(StudentDetail.mobile)) newErrors.mobile = true;
        if (!StudentDetail.email) newErrors.email = true;
        if (!/\S+@\S+\.\S+/.test(StudentDetail.email)) newErrors.email = true;
        if (!StudentDetail.course) newErrors.course = true;
        if (!StudentDetail.batch) newErrors.batch = true;
        if (!StudentDetail.admissionDate) newErrors.admissionDate = true;
        if (!StudentDetail.fees) newErrors.fees = true;
        if (StudentDetail.fees < 0) newErrors.fees = true;
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0; // Returns true if there are no errors
    };

    const ContinueBill = () => {
        if (validateForm()) {
            setCDuser((currentsetCDuser) => [...currentsetCDuser, StudentDetail]);
            alert('Student Register Form Saved');
            setStudentDetail({
                // id: '',
                id: uuid(),
                firstName: '',
                lastName: '',
                gender: '',
                age: '',
                dateOfBirth: '',
                mobile: '',
                email: '',
                course: '',
                batch: '',
                admissionDate: '',
                fees: '',
            }); // Reset form after saving
            setErrors({}); // Clear errors
        }
    };

    const getInputClassName = (field) => {
        return errors[field] ? 'input-error' : '';
    };

    return (
        <div className='invoice-display'>
            <div className="invoice-container">
                <div className="cus-detail-box">
                    <div className='form-box'>
                        <div className="form-container">
                            <form className='form-1'>
                                <div className="CD-header">
                                    <h2>Register Form</h2>
                                </div>
                                <div className="id-box box">
                                    <label>Register ID</label>
                                    <input className='id' title='ID' name="id" type="text" disabled value={StudentDetail.id} />
                                </div>
                                <div className="firstName-box box">
                                    <label>First Name</label>
                                    <input
                                        name='firstName'
                                        type="text"
                                        placeholder='Enter First Name'
                                        value={StudentDetail.firstName}
                                        onChange={handleChange}
                                        className={getInputClassName('firstName')}
                                    />
                                </div>
                                <div className="lastName-box box">
                                    <label>Last Name</label>
                                    <input
                                        name='lastName'
                                        type="text"
                                        placeholder='Enter Last Name'
                                        value={StudentDetail.lastName}
                                        onChange={handleChange}
                                        className={getInputClassName('lastName')}
                                    />
                                </div>
                                <div className="gender-box box">
                                    <label>Gender</label>
                                    <div className='gender-checkbox'>
                                        <span>
                                            <input
                                                className='gender'
                                                name='gender'
                                                type="radio"
                                                value='Male'
                                                checked={StudentDetail.gender === 'Male'}
                                                onChange={handleGenderChange}
                                            /> Male
                                        </span>
                                        <span>
                                            <input
                                                className='gender'
                                                name='gender'
                                                type="radio"
                                                value='Female'
                                                checked={StudentDetail.gender === 'Female'}
                                                onChange={handleGenderChange}
                                            /> Female
                                        </span>
                                        <span>
                                            <input
                                                className='gender'
                                                name='gender'
                                                type="radio"
                                                value='Other'
                                                checked={StudentDetail.gender === 'Other'}
                                                onChange={handleGenderChange}
                                            /> Other
                                        </span>
                                    </div>
                                </div>
                                <div className="age-box box">
                                    <label>Age</label>
                                    <input
                                        name='age'
                                        type="number"
                                        placeholder='Enter Age'
                                        value={StudentDetail.age}
                                        onChange={handleChange}
                                        className={getInputClassName('age')}
                                    />
                                </div>
                                <div className="date-box box">
                                    <label>Date of Birth</label>
                                    <input
                                        name='dateOfBirth'
                                        type="date"
                                        value={StudentDetail.dateOfBirth}
                                        onChange={handleChange}
                                        className={getInputClassName('dateOfBirth')}
                                    />
                                </div>
                                <div className="mobile-box box">
                                    <label>Mobile</label>
                                    <input
                                        name='mobile'
                                        type="tel"
                                        placeholder='Enter Mobile No'
                                        value={StudentDetail.mobile}
                                        onChange={handleChange}
                                        className={getInputClassName('mobile')}
                                    />
                                </div>
                                <div className="email-box box">
                                    <label>Email</label>
                                    <input
                                        name='email'
                                        type="email"
                                        placeholder='Enter Email id'
                                        value={StudentDetail.email}
                                        onChange={handleChange}
                                        className={getInputClassName('email')}
                                    />
                                </div>
                                <div className="batch-box box">
                                    <label>Course</label>
                                    <select
                                        name='course'
                                        value={StudentDetail.course}
                                        onChange={handleChange}
                                        className={`course ${getInputClassName('course')}`} // Use the error class
                                    >
                                        <option value=''>Select Course</option>
                                        <option value='Full-Stack Developer'>Full-Stack Developer</option>
                                        <option value='Graphic Design'>Graphic Design</option>
                                        <option value='Video Editing'>Video Editing</option>
                                        <option value='Online Marketing'>Online Marketing</option>
                                    </select>
                                </div>
                                <div className="batch-box box">
                                    <label>Batch</label>
                                    <select
                                        name='batch'
                                        value={StudentDetail.batch}
                                        onChange={handleChange}
                                        className={getInputClassName('batch')}
                                    >
                                        <option color='gray'>Select Batch</option>
                                        <option value='Batch-1 - 10 AM to 11 AM'>Batch-1 - 10 AM to 11 AM</option>
                                        <option value='Batch-2 - 11 AM to 12 PM'>Batch-2 - 11 AM to 12 PM</option>
                                        <option value='Batch-3 - 12 PM to 01 PM'>Batch-3 - 12 PM to 1 PM </option>
                                        <option value='Batch-4 - 01 PM to 02 PM'>Batch-4 - 1 PM to 2 PM  </option>
                                        <option value='Batch-5 - 02 PM to 03 PM'>Batch-5 - 2 PM to 3 PM  </option>
                                        <option value='Batch-6 - 03 PM to 04 PM'>Batch-6 - 3 PM to 4 PM  </option>
                                    </select>
                                </div>
                                <div className="Add-date-box box">
                                    <label>Admission Date</label>
                                    <input
                                        name='admissionDate'
                                        type="date"
                                        value={StudentDetail.admissionDate}
                                        onChange={handleChange}
                                        className={getInputClassName('admissionDate')}
                                    />
                                </div>
                                <div className="fees-box box">
                                    <label>Fees</label>
                                    <input
                                        name='fees'
                                        type="number"
                                        value={StudentDetail.fees}
                                        placeholder='Enter Fees'
                                        onChange={handleChange}
                                        className={getInputClassName('fees')}
                                    />
                                </div>
                            </form>
                        </div>
                        <div className="btn">
                            <button onClick={ContinueBill}>Register</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Invoice;
