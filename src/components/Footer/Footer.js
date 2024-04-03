import React from 'react';
import cl from "./Footer.module.css"
import LogoPNG from "../../assets/logo.png"
import {Link} from "react-router-dom";

const Footer = () => {
    return (
        <div className={cl.footer}>
            <p className={cl.company_name}>Black Mamba</p>
            <div className={cl.socials}>
                <a href="https://www.instagram.com/">Inst</a>
                <a href="https://www.facebook.com">Facebook</a>
                <a href="https://www.youtube.com">YouTube</a>
            </div>
            <Link to="/" className={cl.logo}><img src={LogoPNG}/></Link>
        </div>
    );
};

export default Footer;