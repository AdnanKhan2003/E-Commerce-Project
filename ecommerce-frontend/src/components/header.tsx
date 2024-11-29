import { useState } from "react";
import {
  FaSearch,
  FaShoppingBag,
  FaSignInAlt,
  FaSignOutAlt,
  FaUser,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  // const user = { id: "why", role: "admin" };
  const user = { id: "sdf", role: "" };
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const logoutHandler = () => {
    setIsOpen(false);
  };

  return (
    <nav className="header">
      <Link onClick={() => setIsOpen(false)} to="/">HOME</Link>
      <Link onClick={() => setIsOpen(false)} to="/search">
        <FaSearch />
      </Link>
      <Link onClick={() => setIsOpen(false)} to="/cart">
        <FaShoppingBag />
      </Link>

      {user?.id ? (
        <>
          <button onClick={() => setIsOpen(prevState => !prevState)}>
            <FaUser />
          </button>
          <dialog open={isOpen}>
            <div>
              {user.role === "admin" && (
                <Link onClick={() => setIsOpen(false)} to="/admin/dashboard">Admin</Link>
              )}

              <Link onClick={() => setIsOpen(false)} to="orders">Orders</Link>
              {/* Delete below link once logbook is ready */}
              {/* <Link onClick={() => setIsOpen(false)} to="/admin/dashboard">Admin Orders</Link> */}
              <button onClick={logoutHandler}>
                <FaSignOutAlt />
              </button>
            </div>
          </dialog>
        </>
      ) : (
        <Link to="/login">
          <FaSignInAlt />
        </Link>
      )}
    </nav>
  );
};

export default Header;
