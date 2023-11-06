import { Link, useLocation } from 'react-router-dom';

function navbar() {
  const currentPage = useLocation().pathname;

  const normalLinkClass = 'text-blue-500';
  const hoverLinkClass = 'hover: underline hover: text-red-500';

  return (
    <ul className="flex flex-wrap gap-6 flex-row justify-self-end text-2xl md:text-4xl mb-1 md:mb-3 font-light">
      <li className="nav-item">
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
