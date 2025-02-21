import { Link } from "react-router-dom";
import Users from "../../components/users";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/users">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar