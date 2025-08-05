// const Navbar = () => {
//   return (
//     <header>
//       <div className="container">
//         <div className="logo-brand">
//           <a href="/">HelloBuddy</a>
//         </div>
//         <nav>
//           <ul className="nav-links">
//             <li><a href="/">Home</a></li>
//             <li><a href="/about">About</a></li>
//             <li><a href="/contact">Contact</a></li>
//             <li><a href="/service">Service</a></li>
//             <li><a href="/register">Register</a></li>
//             <li><a href="/login">Login</a></li>
//           </ul>
//         </nav>
//       </div>
//     </header>
//   );
// };

// export default Navbar;
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header>
      <div className="nav-container">
        <div className="logo-brand">
          <NavLink to="/">HelloBuddy</NavLink>
        </div>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <NavLink to="/service">Service</NavLink>
          <NavLink to="/register">Register</NavLink>
          <NavLink to="/login">Login</NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
