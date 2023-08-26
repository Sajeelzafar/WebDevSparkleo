import React, { useState } from "react";
import './stylesandImages/Navbar.css';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from "react-redux";
import { addAction } from "../redux/employee";

const Addemployee = () => {
    const dispatch = useDispatch();
    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const handleChange = (event) => {
        if (event.target.className === 'firstname') {
            setFname(event.target.value);
        }
        if (event.target.className === 'lastname') {
            setLname(event.target.value);
        }
        if (event.target.className === 'email') {
            setEmail(event.target.value);
        }
        if (event.target.className === 'phone') {
            setPhone(event.target.value);
        }
    };

    const reset = () => {
        setFname('');
        setLname('');
        setEmail('');
        setPhone('');
    }
    
    return(
        <form className="form display">
            <div className="formHeadingContainer">
                <h5 className="formHeading">New Employee</h5>
            </div>

            <div className="formInputContainer grid">
                <label> First Name <span className="red-star">*</span> </label>
                <input className="firstname" type="text" placeholder="First Name"  value={fname} onChange={handleChange} />
                <label> Last Name <span className="red-star">*</span> </label>
                <input className="lastname" type="text" placeholder="Last Name" value={lname} onChange={handleChange} />
                <label>Email <span className="red-star">*</span> </label>
                <input className="email" type="email" placeholder="Email" value={email} onChange={handleChange} />
                <label> Phone <span className="red-star">*</span> </label>
                <input className="phone" type="text" placeholder="Phone Number" value={phone} onChange={handleChange} />
            </div>

            <div className="formButtons display">
                <button className="clearButton" onClick={() => {
                    reset();
                }}>CLEAR ALL</button>
                <button className="addButton" onClick={(event) => {
                    event.preventDefault();
                    let obj = {
                        id: uuidv4(),
                        firstname: fname,
                        lastname: lname,
                        email: email,
                        phone: phone,
                        };
                        dispatch(addAction(obj));
                    }}>
                    ADD
                </button>
            </div>
        </form>
    )
}

export default Addemployee;