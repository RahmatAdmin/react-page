import React from "react";
import { Image } from "../components/Image";
import { About } from "../components/About";
import { Skill } from "../components/Skill";
import { Footer } from "../components/Footer";


export function Home () {
    return (
        <div>
                 <Image />
                 <About />
                 <Skill />
                 <Footer />
        </div>
    );
}