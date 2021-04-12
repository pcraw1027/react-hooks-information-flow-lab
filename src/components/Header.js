import React from "react";


function Header ({onDarkModeClick, onMode}) {
    console.log(onMode, onDarkModeClick)
    return (
        <header>
            <h2>Shopster</h2>
            <button 
                onClick={() => onDarkModeClick()}>
                {{onMode} ? "Dark Mode" : "Light Mode"}
            </button>
        </header>
    );
}

export default Header;