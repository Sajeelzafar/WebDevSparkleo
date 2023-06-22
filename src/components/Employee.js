import React from "react";
import './stylesandImages/Navbar.css';

const Addemployee = () => {
    return(
        <form className="form display">
            <div className="formHeadingContainer">
                <h5 className="formHeading">New Employee</h5>
            </div>

            <div className="formInputContainer grid">
                <label> First Name <span class="red-star">*</span> </label>
                <input className="firstname" type="text" placeholder="First Name" required/>
                <label> Last Name <span class="red-star">*</span> </label>
                <input className="lastname" type="text" placeholder="Last Name" required/>
                <label>Email <span class="red-star">*</span> </label>
                <input className="email" type="email" placeholder="Email" required/>
                <label> Phone <span class="red-star">*</span> </label>
                <input className="phone" type="number" placeholder="Phone Number" required/>
            </div>

            <div className="formButtons display">
                <button className="clearButton">CLEAR ALL</button>
                <button className="addButton">ADD</button>
            </div>
        </form>
    )
}

export default Addemployee;