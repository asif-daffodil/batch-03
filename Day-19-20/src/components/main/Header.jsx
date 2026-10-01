import { NavLink } from "react-router";

const Header = () => {
    return (
        <div>
            <ul className="flex justify-center gap-5 py-4 *:*:[.active]:text-blue-600">
                <li>
                    <NavLink to="/" >Home</NavLink>
                </li>
                <li>
                    <NavLink to="/about" >About</NavLink>
                </li>
                <li>
                    <NavLink to="/blog" >Blog</NavLink>
                </li>
            </ul>
        </div>
    );
};

export default Header;