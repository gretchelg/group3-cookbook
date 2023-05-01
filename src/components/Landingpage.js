import breakfast from '../images/breakfast.png';
import lunch from '../images/lunch.png'
import dinner from '../images/dinner.png'
import { NavLink } from "react-router-dom";

export default function Landingpage() {
    return (
        <div>
            <h1>This is the Landing Page</h1>
            
            <div className="navbar">
                <NavLink to="/breakfast">
                    <img src={breakfast} width="20%" height="20%" />
                </NavLink>

                <NavLink to="/lunch">
                    <img src={lunch} width="20%" height="20%" />
                </NavLink>

                <NavLink to="/dinner">
                    <img src={dinner} width="20%" height="20%" />
                </NavLink>
            </div>

        </div>

    );
}