import "./navbar.scss";

export const Navbar = () => {
  return (
    <nav className="navbar">
      <a href="#" >
        <div className="logo">
          <img src="/enderman.png" alt="Logo" />
          <div className="name">Endernote</div>
        </div>
      </a>
      <div className="account-info">
        <div className="login">Login</div>
        <div className="signup">Sign Up</div>
      </div>
    </nav>
  );
};
