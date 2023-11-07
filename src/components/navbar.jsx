import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const currentPage = useLocation().pathname;

  const normalLinkClass = 'text-blue-500';
  const hoverLinkClass = 'hover:underline hover:text-red';

  return (
    <ul className="flex flex-wrap items-center ml-auto gap-10 text-2xl md:text-4xl mb-1 md:mb-3 font-light">
      <li className="nav-item flex items-center">
        <Link
          to="/"
          className={currentPage === '/' ? `nav-link ${normalLinkClass} ${hoverLinkClass}` : `nav-link ${normalLinkClass} ${hoverLinkClass}`}
        >
          About Me
        </Link>
      </li>
      <li className="nav-item flex items-center">
        <Link
          to="/Portfolio"
          className={currentPage === '/Portfolio' ? `nav-link ${normalLinkClass} ${hoverLinkClass}` : `nav-link ${normalLinkClass} ${hoverLinkClass}`}
        >
          Portfolio
        </Link>
      </li>
      <li className="nav-item flex items-center">
        <Link
          to="/Contact"
          className={currentPage === '/Contact' ? `nav-link ${normalLinkClass} ${hoverLinkClass}` : `nav-link ${normalLinkClass} ${hoverLinkClass}`}
        >
          Contact
        </Link>
      </li>
      <li className="nav-item flex items-center">
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

export default Navbar;
