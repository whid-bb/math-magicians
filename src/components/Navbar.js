import { Link } from 'react-router-dom';
import style from './Navbar.module.scss';

function Navbar() {
  return (
    <nav id={style.mainNav}>
      <div className={style.logo}>
        <Link to="/math-magicians"> Math Magicians</Link>
      </div>
      <ul>
        <li>
          <Link to="/math-magicians">Home</Link>
        </li>
        <li>
          <Link to="/math-magicians/calculator">Calculator</Link>
        </li>
        <li>
          <Link to="/math-magicians/quotes">Quotes</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
