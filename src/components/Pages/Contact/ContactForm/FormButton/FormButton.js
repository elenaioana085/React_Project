import { useState } from "react";
import React from 'react';
import Button from 'react-bootstrap/Button';


function ButtonForm() {
  return (
    <div className="d-grid gap-2">
      <Button variant="primary" size="lg">
        Submit
      </Button>
    </div>
  );
}

export default ButtonForm;