import React, {useRef, useState} from 'react';
import cl from "./Navbar.module.css"
import MenuSVG from "../../assets/menu.svg"
import SearchSVG from "../../assets/search.svg"
import CategoryMenu from "../CategoryMenu/CategoryMenu";
import LogoPNG from "../../assets/logo.png"
import {Link} from "react-router-dom";
import Search from "../Search/Search";

const Navbar = () => {
    const [menu, setMenu] = useState(false)
    const catalogRef = useRef(null)
    const [catalogCoordinates, setCatalogCoordinates] = useState({width: 100, left: 60})
    const [search, setSearch] = useState(false)

    function handleMouseEnter() {
        setMenu(true)
        setCatalogCoordinates({width: catalogRef.current.offsetWidth, left: catalogRef.current.clientX})
    }

    function handleMouseLeave() {
        setMenu(false)
    }

    function handleFocus() {
        setSearch(true)
    }

    function handleBlur() {
        setSearch(false)
    }

    return (
        <div className={cl.navbar}>
            <div className={cl.navbar_container}>
                <CategoryMenu catalogCoordinates={catalogCoordinates} menu={menu} setMenu={setMenu} />
                <div
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    ref={catalogRef}
                    className={cl.navBtn}
                >
                    <img src={MenuSVG} alt=""/> <p>Категорії товарів</p>
                </div>
                <Search/>
            </div>
            <Link to="/" className={cl.logo}><img src={LogoPNG}/></Link>
        </div>
    );
};

export default Navbar;