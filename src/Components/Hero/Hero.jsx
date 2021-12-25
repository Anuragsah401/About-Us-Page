import React from "react";

import KeyCard from "./keyCard/KeyCard";
import classes from './Hero.module.css';

const Hero = () => {
    const keys = [
        {
            keyImage: "https://preview.ait-themes.club/citadela/fooddelivery/wp-content/uploads/sites/1" +
                    "7/2020/11/icon-bowl.png",
            keyTitle: "Local and organic ingredients only",
            keyDescription: "Donec eros odio, sagittis a mi non, accumsan feugiat ex integer sit tempor. Orci nibh, in vestibulum sem."
        }, {
            keyImage: "https://preview.ait-themes.club/citadela/fooddelivery/wp-content/uploads/sites/1" +
                    "7/2020/11/icon-coffee.png",
            keyTitle: "Zero waste and environment-friendly",
            keyDescription: "Vestibulum lobortis diam diam, rutrum ultricies ligula tempor nec ipsum. Pellentesque pharetra libero."
        }
    ];

    return (
        <div className={classes.container}>
            <div className={classes.heroMain}>
                <h1>
                    <strong>Five star bistro with minimal</strong>
                    <br/>
                    <strong>environmental impact</strong>
                </h1>
                <div className={classes.subtitle}>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
                        <br/>
                        sed quam lacinia, porta odio eget, dictum erat.</p>
                </div>

                <div className={classes.innerHolder}></div>

                <div className={classes.keyValues}>
                    <h2>
                        <strong>OUR KEY VALUES</strong>
                    </h2>
                    <div className={classes.keys}>
                        <KeyCard keys={keys}/>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Hero;
