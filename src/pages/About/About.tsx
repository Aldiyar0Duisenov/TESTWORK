import { Link } from "react-router-dom";

export const About = () => {
  console.log("about ");
  return (
    <div>
      About
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/phone">Phone</Link>
    </div>
  );
};
