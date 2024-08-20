import "./navbar.scss";

export const Navbar = () => {
  return (
    <nav className="navbar">
      <a href="#">
        <div className="logo">
          <img src="/enderman.png" alt="Logo" />
          <div className="name">Endernote</div>
        </div>
      </a>
      <div className="account-info">
        <a className="login" href="#">
          Login
        </a>
        <a className="signup" href="#">
          Sign Up
        </a>
      </div>
    </nav>
  );
};
