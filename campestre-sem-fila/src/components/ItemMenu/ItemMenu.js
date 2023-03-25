import React from "react";
import Item from "./index";

function ItemMenu({ icone, texto, src, selecionado }) {

    const handleClick = () => {
        window.location.href = `http://localhost:3000/${src}`;
    };

    return (
        <Item selecionado={selecionado}>
            <a onClick={handleClick}>
                <img src={icone} alt={texto} />
                {texto}
            </a>
        </Item>
    );
}

export default ItemMenu;
