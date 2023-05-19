import React, { useEffect } from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { fetchAllCategories } from "../../Features/Category/CategorySlice";
import { FaShoppingCart, FaUser } from "react-icons/fa";
import { totalCartItem } from "../../Features/Cart/CartSelector";

function TopNavbar() {
  const { categories } = useSelector((state) => state.categories);
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllCategories());
  }, [dispatch]);

  let state = useSelector((state) => state);
  let totalItems = totalCartItem(state);

  return (
    <Navbar bg="dark" expand="lg" variant="dark">
      <Container>
        <NavLink to={"/"} className={"navbar-brand"}>
          Shop Now
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavLink to={"/"} className="nav-link">
              Home
            </NavLink>
            <NavDropdown title="Categories" id="basic-nav-dropdown">
              {categories &&
                categories.map((c, index) => {
                  return (
                    <Link
                      to={`/category/${c}`}
                      className="text-capitalize dropdown-item"
                      key={index}
                    >
                      {c}
                    </Link>
                  );
                })}
            </NavDropdown>
            <NavLink to={"/products"} className="nav-link">
              Products
            </NavLink>
            <NavLink to={"/contact"} className="nav-link">
              Contact
            </NavLink>
            <NavLink to={"/Register"} className="nav-link">
              <FaUser />
            </NavLink>
            <NavLink to={"/cart"} className="nav-link">
              <div className="d-flex align-items-center">
                <FaShoppingCart size={18} />
                <span className="badge rounded-pill bg-danger ms-1">
                  {totalItems}
                </span>
              </div>
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default TopNavbar;
