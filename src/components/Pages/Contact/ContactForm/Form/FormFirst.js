import { useState } from "react";
import React from 'react';
import Form from 'react-bootstrap/Form';
import DropdownForm from "../DropdownForm/DropdownFom";


function FormFirst(){
    return (

    <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>
      <Form.Group className="mb-3">
        <DropdownForm></DropdownForm>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Example textarea</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
    </Form>

    );
}

export default FormFirst;