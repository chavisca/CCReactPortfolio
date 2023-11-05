import { Link, useLocation } from 'react-router-dom';

function navbar() {
  const currentPage = useLocation().pathname;

  const normalLinkClass = 'text-blue-500';
  const hoverLinkClass = 'hover: underline hover: text-red-500';

  return (
    <ul className="flex flex-wrap gap-2 flex-row items-center justify-center text-md md: text-md">
      <li className="nav-item hover:">
        <Link
          to="/"
          className={currentPage === '/' ? `nav-link ${normalLinkClass} ${hoverLinkClass}` : `nav-link ${normalLinkClass} ${hoverLinkClass}`}
        >
          About Me
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/Portfolio"
          className={currentPage === '/Portfolio' ? `nav-link ${normalLinkClass} ${hoverLinkClass}` : `nav-link ${normalLinkClass} ${hoverLinkClass}`}
        >
          Portfolio
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/Contact"
          className={currentPage === '/Contact' ? `nav-link ${normalLinkClass} ${hoverLinkClass}` : `nav-link ${normalLinkClass} ${hoverLinkClass}`}
        >
          Contact
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/Resume"
          className={currentPage === '/Resume' ? `nav-link ${normalLinkClass} ${hoverLinkClass}` : `nav-link ${normalLinkClass} ${hoverLinkClass}`}
        >
          Resume
        </Link>
      </li>
    </ul>
  );
}

export default navbar;
