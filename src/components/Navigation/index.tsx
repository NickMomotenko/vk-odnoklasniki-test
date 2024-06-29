import { Link } from "react-router-dom";

export const Navigation = () => {
  return (
    <nav className="menu">
      <ul className="menu__list">
        <li className="menu__item">
          <Link to="/">Counters</Link>
        </li>
        <li className="menu__item">
          <Link to="/buttons">Buttons</Link>
        </li>
      </ul>
    </nav>
  );
};
