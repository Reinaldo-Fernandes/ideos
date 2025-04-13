import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <nav>
        <ul>
          <li><Link to="/">Dashboard</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/register">Registrar</Link></li>
        </ul>
      </nav>
    </header>
  );
}
