import { Link, NavLink, Outlet } from "react-router-dom";
import SearchBar from "./SearchBar";

const NavBar = () => {
    return ( 
        <header>
            <nav>
                <h1>TwoWeek</h1>
                <SearchBar />
                <NavLink to='/'>Home</NavLink>
                <NavLink to='leaderboards'>Leaderboards</NavLink>
                <NavLink to='about'>about</NavLink>
            </nav>
            <Outlet />
        </header>
     );
}
 
export default NavBar;