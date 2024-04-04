import React, {useEffect} from 'react';
import "./GamePage.css"

/* перенесено з чистого html, css, js */
const GamePage = () => {
    useEffect(() => {
        const handleMouseMove = (e) => {
            let body = document.querySelector("body");
            let circle = document.createElement("span");
            let x = e.pageX;
            let y = e.pageY;
            document.querySelector("#cursor").style.left = x + "px";
            document.querySelector("#cursor").style.top = y + "px";
            circle.style.left = x + "px";
            circle.style.top = y + "px";
            let size = Math.random() * Math.floor(Math.random() * (150 - 10 + 1) + 10);
            circle.style.width = 20 + size + "px";
            circle.style.height = 20 + size + "px";
            body.appendChild(circle);
            setTimeout(() => {
                circle.style.opacity = 0;
                setTimeout(() => {
                    circle.remove();
                }, 2500);
            }, 2500);
        };

        document.addEventListener("mousemove", handleMouseMove);
        document.body.style.overflow = "hidden";

        return () => {
            document.removeEventListener("mousemove", handleMouseMove);
            document.body.style.overflow = "auto";
        };
    }, []);
    return (
        <div className="game">
            <div className="container">
                <div className="bubble">
                    <div>
                        <h1>Bubbles</h1>
                        <p><q>Move mouse</q></p>
                    </div>
                </div>
            </div>
            <div id="cursor" data-after="🧼"></div>
        </div>
    );
};

export default GamePage;