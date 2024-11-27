import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <NavLink to={"/"}>Home</NavLink>
      <NavLink to={"history"}>History</NavLink>
    </div>
  );
}
