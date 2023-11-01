import { useState } from "react";
import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';

function DropdownForm() {
  return (
    <>

      <Dropdown className="d-inline mx-2" autoClose="inside">
        <Dropdown.Toggle id="dropdown-autoclose-inside">
          Clickable Outside
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#">Menu Item</Dropdown.Item>
          <Dropdown.Item href="#">Menu Item</Dropdown.Item>
          <Dropdown.Item href="#">Menu Item</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>


    </>
  );
}

export default DropdownForm;