import React, { useState, useRef } from 'react';
import cl from "./CategoryMenu.module.css";
import { categories } from "../../consts/categories";

const CategoryMenu = ({ menu, setMenu, catalogCoordinates }) => {
    const [isHovered, setIsHovered] = useState(false);

    function handleMouseEnter() {
        setIsHovered(true);
    }

    function handleMouseLeave() {
        setIsHovered(false);
    }

    return (
        <div
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={`${cl.menu} ${menu || isHovered ? cl.show : ''}`}
            style={{ width: catalogCoordinates.width, left: catalogCoordinates.left }}
        >
            {menu || isHovered ?
                categories.map(item => <div key={item.id} className={cl.menu_item}>{item.name}</div>)
                :
                null
            }
        </div>
    );
};

export default CategoryMenu;