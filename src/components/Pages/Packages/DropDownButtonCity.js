import Dropdown from 'react-bootstrap/Dropdown';

function DropDownButtonCity() {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        City
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Viena</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Poros</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Cairo</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Barcelona</Dropdown.Item>
        <Dropdown.Item href="#/action-3">London</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Monterrey</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Bogota</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Paris</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Dubai</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Baros</Dropdown.Item>
        <Dropdown.Item href="#/action-3"></Dropdown.Item>
        <Dropdown.Item href="#/action-3">Baros</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Baros</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default DropDownButtonCity;