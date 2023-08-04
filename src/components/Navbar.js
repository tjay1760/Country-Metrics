import { Nav, Navbar } from 'react-bootstrap';
import { IoIosArrowBack, IoIosMic, IoIosSettings } from 'react-icons/io';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navigation = () => {
  const location = useLocation();
  let text = 'Country';
  let showBackButton = false;

  if (location.pathname === '/') {
    text = 'Country';
  } else if (location.pathname.startsWith('/country/')) {
    text = 'Country details';
    showBackButton = true; // Show the back button when on '/country/' pages
  }

  return (
    <Navbar bg="dark" variant="dark">
      <Nav className="mr-auto">
        {/* Conditionally render the back button */}
        {showBackButton && (
          <Nav.Link as={Link} to="/">
            <IoIosArrowBack fill="white" />
          </Nav.Link>
        )}
      </Nav>
      <Navbar.Brand className="mx-auto">
        <p className="text-center">{text}</p>
      </Navbar.Brand>
      <Nav>
        <IoIosMic fill="white" />
        <IoIosSettings fill="white" />
      </Nav>
    </Navbar>
  );
};

export default Navigation;
