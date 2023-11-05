import { Link, useLocation } from 'react-router-dom';

function navbar() {
  const currentPage = useLocation().pathname;

  const activeLinkClass = 'text-blue-500';

  return (
    <ul className="flex flex-wrap gap-2 flex-row items-center justify-center text-sm md: text-md">
      <li className="nav-item">
        <Link
          to="/"
          className={currentPage === '/' ? `nav-link ${activeLinkClass}` : 'nav-link'}
        >
          Home
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/About"
          className={currentPage === '/About' ? `nav-link ${activeLinkClass}` : 'nav-link'}
        >
          About
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/Portfolio"
          className={currentPage === '/Portfolio' ? `nav-link ${activeLinkClass}` : 'nav-link'}
        >
          Portfolio
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/Contact"
          className={currentPage === '/Contact' ? `nav-link ${activeLinkClass}` : 'nav-link'}
        >
          Contact
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/Resume"
          className={currentPage === '/Resume' ? `nav-link ${activeLinkClass}` : 'nav-link'}
        >
          Resume
        </Link>
      </li>
    </ul>
  );
}

export default navbar;
