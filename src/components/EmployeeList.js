import React, { useEffect } from "react";
import closeButton from "./stylesandImages/icon.svg"
import { useDispatch, useSelector } from "react-redux";
import { readEmployee, removeAction } from "../redux/employee";

const EmployeeList = () => {
    const dispatch = useDispatch();
    const employees = useSelector((state) => state.employeeHandler);
    useEffect(() => {
        dispatch(readEmployee());
    }, [employees]);

    const del = (e) => {
        dispatch(removeAction(e));
    }

    return (
        <div className="employeeList display">
            <h2>Current Employees</h2>
            {employees.map((employee) => (
            <div key={employee.id} className="employeeDetails display">
                <div className="leftSideList display">
                    <ul className="leftSideListItems">
                        <li><h3>{employee.firstname} {employee.lastname}</h3></li>
                        <li>{employee.email}</li>
                        <li>{employee.phone}</li>
                    </ul>
                    
                </div>
                <div className="rightSideList">
                    <img alt="close" src={closeButton} onClick={del.bind(null, employee)} ></img>
                </div>

            </div>
            ))}
        </div>

    )
}

export default EmployeeList;