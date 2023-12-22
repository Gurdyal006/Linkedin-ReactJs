import { Outlet } from "react-router-dom";
const About = () => {
  return (
    <div className="App">
      <h1>About Page</h1>
      <Outlet />
    </div>
  );
};

export default About;
