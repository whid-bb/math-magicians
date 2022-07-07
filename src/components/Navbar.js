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
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/calculator">Calculator</Link>
        </li>
        <li>
          <Link to="/quotes">Quotes</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
