import React from 'react';
// import './DropdownMenuButton.css';
import { CiSearch } from 'react-icons/ci';


const DropdownMenuButton = () => {
    return (
          <div className="dropdown1 d-flex align-items-center">
              <select>
                <option value="option1">All Categories</option>
                <option value="option2">Top Selling</option>
                <option value="option3">Low Price</option>
                <option value="option4">Top Featured</option>
              </select>
              <input type="text" className="form-control py-2" placeholder="Search product here..." aria-label="Search product here..." aria-describedby="basic-addon2"/>
          <span className="input-group-text p-3 padding" id="basic-addon2"><CiSearch className='fs-5 search'/></span>
         </div>
    );
};

export default DropdownMenuButton;

