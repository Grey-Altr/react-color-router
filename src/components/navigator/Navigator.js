import { NavLink } from 'react-router-dom';

export default function Navigator() {
  return (
    <>
      <NavLink className="red" to="/rgb/255/0/0">
        Red
      </NavLink>
      <NavLink className="green" to="/rgb/0/255/0">
        Green
      </NavLink>
      <NavLink className="blue" to="/rgb/0/0/255">
        Blue
      </NavLink>
    </>
  );
}
