import React, { useEffect } from "react";
import './stylesandImages/Navbar.css';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch, useSelector } from "react-redux";
import { addAction, readEmployee } from "../redux/employee";

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
    const employee = useSelector((state) => state.employeeHandler);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(readEmployee());
        console.log(employee);
    }, []);
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
                <button className="addButton" onClick={() => {
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