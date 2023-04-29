import { NavLink } from "react-router-dom";

export default function Navigation() {
    return (
    <div className="navbar">
            <NavLink to="/">  - HOME - | </NavLink>
            <NavLink to="/breakfast">  - ALL BREAKFAST -  | </NavLink>
            <NavLink to="/lunch">  - ALL LUNCH - | </NavLink>
            <NavLink to="/dinner">  - ALL DINNER -  </NavLink>
            <NavLink to="/recipe"> | - ALL RECIPES - </NavLink>
    </div>

    );
}