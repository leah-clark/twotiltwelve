import React from "react";
import { render } from "react-dom";
import Popup from "reactjs-popup";
import BurgerIcon from "./BurgerIcon";
import Menu from "./BurgerMenu";
import "./burger.css";


const contentStyle = {
    background: "rgba(255,255,255,0",
    width: "80%",
    border: "none"
};

const BurgerInteraction = () => (
        <Popup
            modal
            overlayStyle={{ background: "rgba(255,255,255,0.98" }}
            contentStyle={contentStyle}
            closeOnDocumentClick={false}
            trigger={open => <BurgerIcon open={open} />}
        >
            {close => <Menu close={close} />}
        </Popup>
);

export default BurgerInteraction;