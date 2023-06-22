import React from "react";
import closeButton from "./stylesandImages/icon.svg"

const EmployeeList = () => {
    return (
        <div className="employeeList display">
            <h2>Current Employees</h2>
            <div className="employeeDetails display">
                <div className="leftSideList display">
                    <ul className="leftSideListItems">
                        <li><h3>Muhammad Umer</h3></li>
                        <li>umer@sparkleo.io</li>
                        <li>+9234033261516</li>
                    </ul>
                </div>
                <div className="rightSideList">
                    <img alt="close" src={closeButton} ></img>
                </div>

            </div>
        </div>

    )
}

export default EmployeeList;