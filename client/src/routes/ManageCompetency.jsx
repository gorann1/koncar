import React from 'react';

const classes = {
  wrapper: 'border-2 m-16 p-16',
  title: 'text-gray-800 text-xl text-center font-bold',
};

const ManageCompetency = () => {
  return (
    <div className={classes.wrapper}>
     <h1 className={classes.title}>Manage Kompetencija</h1>
     <div className="rola">
        <label className="block">
          <span className="text-gray-700">Ime</span>
          {/* Prikaz svih zaposlenika na listi  */}
          <input type="name" class="form-input mt-1 block w-full" placeholder="Ime" />
        </label>
        <label className="block">
          <span className="text-gray-700">Prezime</span>
          {/* Prikaz svih zaposlenika na listi  */}
          <input type="name" class="form-input mt-1 block w-full" placeholder="Prezime" />
        </label>
        <label className="block">
          <span className="text-gray-700">Select</span>
          <select className="form-select block w-full mt-1">
            <option>Option 1</option>
            <option>Option 2</option>
          </select>
        </label>
      </div>
    </div>
  )
}

export default ManageCompetency