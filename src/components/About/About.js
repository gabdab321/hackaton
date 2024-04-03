import React from 'react';
import cl from "./About.module.css"
import {Link} from "react-router-dom";

const About = () => {
    return (
        <div className={cl.about}>
            <h1>Про нас</h1>
            <p className={cl.title}>Хто я</p>
            <p className={cl.desc}>Я - ваш провідник у світі натурального догляду та краси. Моє ім'я - Black Mamba. Я створений, щоб дарувати вам впевненість і комфорт, надаючи продукти, які дбають про вашу шкіру з любов'ю й турботою.</p>
            <p className={cl.title}>Хто ми</p>
            <p className={cl.desc}>Ми - Black Mamba. Наша команда - пристрасні творці натурального мила, натхненні природою та прагнучі дарувати вам неповторний досвід догляду за шкірою.</p>
            <Link to="/game" className={cl.game_link}>Демонстрація</Link>
        </div>
    );
};

export default About;