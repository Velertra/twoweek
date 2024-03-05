import { Link, NavLink, Outlet } from "react-router-dom";
import SearchBar from "./SearchBar";
import PageBottom from "./SiteFooter";

const NavBar = () => {
    return ( 
        <>
            <header>
                <nav>
                    <div className="nav-div">
                        <div className="title-div">
                            <NavLink to='/'><h1 className="site-title">Two-Week</h1></NavLink>
                        </div>
                        <div className="nav-links">
                            <SearchBar />
                            <NavLink to='/'>Home</NavLink>
                            <NavLink to='itemShop'>ItemShop</NavLink>
                            <NavLink to='about'>about</NavLink>
                        </div>
                    </div>
                </nav>
            </header>
            <div className="bg-full"></div>
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