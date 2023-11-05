import { useState } from "react";
import React from 'react';
import Form from 'react-bootstrap/Form';
import DropdownForm from "../DropdownForm/DropdownFom";
import { FormControlCustom, FormCustom, FormLabelCustom } from "./FormFirst.style";
import ButtonForm from "../FormButton/FormButton";


function FormFirst(){
    return (

    <FormCustom>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <FormLabelCustom>Email address</FormLabelCustom>
        <FormControlCustom type="email" placeholder="name@example.com" />
      </Form.Group>
      <Form.Group className="mb-3">
        <DropdownForm></DropdownForm>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <FormLabelCustom>Please write in the box bellow your message</FormLabelCustom>
        <FormControlCustom as="textarea" rows={3} />
      </Form.Group>
      <Form.Group className="mb-3">
         <ButtonForm></ButtonForm>
      </Form.Group>
      
    </FormCustom>

    );
}

export default FormFirst;