import { useState } from "react";
import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import { DropdownToggleCustom } from "./DropdownForm.style";

function DropdownForm() {
  return (
    <>

      <Dropdown className="d-inline mx-2" autoClose="inside">
        <DropdownToggleCustom id="dropdown-autoclose-inside">
          Please select a category for the issue you will like to be adressed
        </DropdownToggleCustom>

        <Dropdown.Menu>
          <Dropdown.Item href="#">Transport</Dropdown.Item>
          <Dropdown.Item href="#">Payment</Dropdown.Item>
          <Dropdown.Item href="#">Accomodation</Dropdown.Item>
          <Dropdown.Item href="#">Booking</Dropdown.Item>
          <Dropdown.Item href="#">Other</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>


    </>
  );
}

export default DropdownForm;