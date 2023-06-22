import React from "react";
import './stylesandImages/Navbar.css';

const Addemployee = () => {
    return(
        <form className="form display">
            <div className="formHeadingContainer">
                <h3 className="formHeading">New Employee</h3>
            </div>

            <div className="formInputContainer display">
                <label> First Name
                    <input className="firstname" type="text" placeholder="First Name"/>
                </label>
                <label> Last Name
                    <input className="lastname" type="text" placeholder="Last Name"/>
                </label>
                <label>Email
                    <input className="email" type="email" placeholder="Email"/>
                </label>
                <label> Phone
                    <input className="phone" type="number" placeholder="Phone Number"/>
                </label>
            </div>

            <div className="formButtons display">
                <button>CLEAR ALL</button>
                <button>ADD</button>
            </div>
        </form>
    )
}

export default Addemployee;