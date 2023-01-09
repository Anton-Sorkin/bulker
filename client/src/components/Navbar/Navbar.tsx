import { NabvarContainer } from "./Navbar.styles";

const Navbar = () => {
  return (
    <NabvarContainer>
      <h1>BULKER</h1>
      <div>
        <a href="/">#</a>
        <a href="/myrecipes">$</a>
      </div>
    </NabvarContainer>
  );
};

export default Navbar;
