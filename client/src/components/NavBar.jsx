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
                            
                            <NavLink to='/'><h1 className="site-title">TwoWeek</h1></NavLink>
                            
                        </div>
                        <div className="search-bar">
                            <SearchBar />
                        </div>
                            <div className="nav-links">
                                <NavLink className="nav-link" to='itemShop'>Item Shop</NavLink>
                                <NavLink className="nav-link" to='about'>About</NavLink>
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