import React from 'react';
import { MDBInputGroup, MDBInput, MDBIcon, MDBBtn } from 'mdb-react-ui-kit';

export default function SearchBar({destinations,setDestinationFiltered}) {
  const handleSearch = (value) =>{
    const filtered = destinations.filter(el =>
      el.city == value
    )
    setDestinationFiltered(filtered)
  }
  return (
    <MDBInputGroup>
      <MDBInput label='Search' onBlur={e =>handleSearch(e.target.value)} />
      <MDBBtn rippleColor='dark'>
        <MDBIcon icon='search' />
      </MDBBtn>
    </MDBInputGroup>
  );
}