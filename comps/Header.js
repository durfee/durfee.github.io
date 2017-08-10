import Link from 'next/link';
/* global React */
const linkStyle = {
  marginRight: 16,
};

const Header = () => (
  <div>
    <Link href="/">
      <a style={linkStyle}>Home</a>
    </Link>
    <Link href="/projects">
      <a style={linkStyle}>Projects</a>
    </Link>
  </div>
);

export default Header;
