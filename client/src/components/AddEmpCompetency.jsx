import React from 'react'

class AddEmpCompetency extends React.Component {
  render() {
    return (
      <div className="rola">
        <label className="block">
          <span className="text-gray-700">Input</span>
          {/* Prikaz svih zaposlenika na listi  */}
          <input type="email" class="form-input mt-1 block w-full" placeholder="Upisi radnika" />
        </label>
        <label className="block">
          <span className="text-gray-700">Select</span>
          <select className="form-select block w-full mt-1">
            <option>Option 1</option>
            <option>Option 2</option>
          </select>
        </label>
      </div>
    )
  }
}

export default AddEmpCompetency
