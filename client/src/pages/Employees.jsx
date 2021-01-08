import React from 'react';
import  EmployeeDetails  from '../components/EmployeeDetails';

const classes = {
  wrapper: 'mt-12 m-auto 16 p-16',
  title: 'text-gray-800 text-xl text-center font-bold',
};

const Employees = () => {
  return (
    <div className={classes.wrapper}>
      <EmployeeDetails />
  </div>
  )
}

export default Employees
