import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;

    }
    :root{
        --pink_color: #DB7092;;
    }
    html,body{
        font-size: 62.5%;
    }
`;
