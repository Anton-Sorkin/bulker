import { NabvarContainer } from "./Navbar.styles";

const Navbar = () => {
  return (
    <NabvarContainer>
      <a href="/">
        <h1>BULKER</h1>
      </a>
      <div>
        <a href="/">#</a>
        <a href="/myrecipes">$</a>
      </div>
    </NabvarContainer>
  );
};

export default Navbar;
