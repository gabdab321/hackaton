import React from 'react';
import cl from "./Error.module.css"

const Error = ({text}) => {
    return (
        <div className={cl.error}>
            {text}
        </div>
    );
};

export default Error;