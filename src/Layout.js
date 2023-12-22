import { Link, Outlet } from "react-router-dom";
const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
            <ul>
              <li>
                <Link to="/about/AboutHistory">About History</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/hooks">Hooks</Link>
          </li>
          <li>
            <Link to="/graphql">GraphQl</Link>
          </li>
          <li>
            <Link to="/renderItems">RenderItems</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
};

export default Layout;
