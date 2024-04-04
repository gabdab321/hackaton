import React from 'react';
import cl from "./Dropdown.module.css"
import {Link} from "react-router-dom";

const Dropdown = ({result, query, setQuery, dropdownRef}) => {
    function handleClick() {
        setQuery("")
    }

    return (
        result.length > 0 && query.length > 0
            ?
            <div className={cl.dropdown}>
                {result.map(product => <Link onClick={handleClick} className={cl.item} key={product.id} to={`/product/${product.id}`}>{product.name}</Link>)}
            </div>
            :
            ""

    );
};

export default Dropdown;