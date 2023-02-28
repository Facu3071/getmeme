import image from "../assets/troll-face.png";
function Header() {
  return (
    <header className="header">
      <img src={image} alt="Happy face" className="header--img" />
      <h2 className="header--title">Meme Generator</h2>
    </header>
  );
}

export default Header;
