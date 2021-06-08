// styles/first_style.js
import css from "styled-jsx/css";

export default css.global`
html,
body {
    padding: 0;
    margin: 0;
    background-color: #333;
}

html {
    font-size: 62.5%;
    background-color: #333;
}

*,
*::before,
*::after {
    box-sizing: border-box;
    font-family: "Ubuntu", sans-serif;
}
`;
