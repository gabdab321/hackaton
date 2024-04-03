import React from 'react';
import cl from "./About.module.css"

const About = () => {
    return (
        <div className={cl.about}>
            <h1>Про нас</h1>
            <p className={cl.title}>Хто я</p>
            <p className={cl.desc}>ЖАРІВаєф іважфві рпфівєрпцйупх єврмпфі лвдпофвілрдпєф цщкузепфві пф о івпявффя аіваі...</p>
            <p className={cl.title}>Хто ми</p>
            <p className={cl.desc}>ЖАРІВаєф іважфві рпфівєрпцйупх єврмпфі лвдпофвілрдпєф цщкузепфві пф о івпявффя аіваі...</p>
        </div>
    );
};

export default About;