import React, {useEffect, useRef, useState} from 'react';
import cl from "./Search.module.css";
import {products} from "../../consts/products";
import Dropdown from "../Dropdown/Dropdown";

const Search = () => {
    const [query, setQuery] = useState("")
    const [result, setResult] = useState([])

    function handleChange(e) {
        setQuery(e.target.value)
    }

    /* the most simple search logic */
    useEffect(() => {
        setResult(products.filter(obj => obj.name.toLowerCase().includes(query.toLowerCase())) )
    }, [query])

    console.log(result)

    return (
        <div style={{position: "relative"}}>
            <input value={query} onChange={handleChange} placeholder="Пошук товарів" className={cl.navInput}/>
            <Dropdown query={query} setQuery={setQuery} result={result}/>
        </div>
    );
};

export default Search;