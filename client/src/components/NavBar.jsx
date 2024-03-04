import { Link, NavLink, Outlet } from "react-router-dom";
import SearchBar from "./SearchBar";
import PageBottom from "./SiteFooter";

const NavBar = () => {
    return ( 
        <>
        <header>
            <nav>
                <h1>TwoWeek</h1>
                <SearchBar />
                <NavLink to='/'>Home</NavLink>
                <NavLink to='itemShop'>ItemShop</NavLink>
                <NavLink to='about'>about</NavLink>
            </nav>
        </header>
        <main>
            <Outlet />
        </main>
        <footer>
            <PageBottom />
        </footer>
        </>
     );
}
 
export default NavBar;