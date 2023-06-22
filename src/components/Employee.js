import React from "react";
import './stylesandImages/Navbar.css';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from "react-redux";
import { addAction } from "../redux/employee";

let fname, lname, email, phone;

const handleChange = (event) => {
    if (event.target.className === 'firstname') {
        fname = event.target.value;
    }
    if (event.target.className === 'lastname') {
        lname = event.target.value;
    }
    if (event.target.className === 'email') {
        email = event.target.value;
    }
    if (event.target.className === 'phone') {
        phone = event.target.value;
    }
};

const reset = () => {
    fname = '';
    lname = '';
    email = '';
    phone = '';
}

const Addemployee = () => {
    const dispatch = useDispatch();
    return(
        <form className="form display">
            <div className="formHeadingContainer">
                <h5 className="formHeading">New Employee</h5>
            </div>

            <div className="formInputContainer grid">
                <label> First Name <span class="red-star">*</span> </label>
                <input className="firstname" type="text" placeholder="First Name"  value={fname} onChange={handleChange} required/>
                <label> Last Name <span class="red-star">*</span> </label>
                <input className="lastname" type="text" placeholder="Last Name" value={lname} onChange={handleChange} required/>
                <label>Email <span class="red-star">*</span> </label>
                <input className="email" type="text" placeholder="Email" value={email} onChange={handleChange} required/>
                <label> Phone <span class="red-star">*</span> </label>
                <input className="phone" type="number" placeholder="Phone Number" value={phone} onChange={handleChange} required/>
            </div>

            <div className="formButtons display">
                <button className="clearButton" onClick={() => {
                    reset();
                }}>CLEAR ALL</button>
                <button className="addButton" onClick={() => {
                    let obj = {
                        id: uuidv4(),
                        firstname: fname,
                        lastname: lname,
                        email: email,
                        phone: phone,
                        };
                        reset();
                        dispatch(addAction(obj));
                    }}>
                    ADD
                </button>
            </div>
        </form>
    )
}

export default Addemployee;