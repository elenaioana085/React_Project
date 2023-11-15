import { useState } from "react";
import React from "react";
import Form from "react-bootstrap/Form";
import DropdownForm from "../DropdownForm/DropdownFom";
import {
  ButtonCustom,
  FormControlCustom,
  FormCustom,
  FormLabelCustom,
} from "./FormFirst.style";
import Button from 'react-bootstrap/Button';

function FormFirst() {
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
        <FormLabelCustom>
          Please write in the box bellow your message
        </FormLabelCustom>
        <FormControlCustom as="textarea" rows={3} />
      </Form.Group>
      <Form.Group className="mb-3">
          <div className="d-grid gap-2">
            <ButtonCustom variant="primary" size="lg">
              Submit
            </ButtonCustom>
          </div>
      </Form.Group>
    </FormCustom>
  );
}

export default FormFirst;
