import { createGlobalStyle } from 'styled-components';


export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');


    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    body {
        font: 400 14px Roboto, sans-serif;
        background: #E2E3E4;
        -webkit-font-smoothing: antialiased;
    }

    input,
    button,
    textarea {
        font: 400 18px Roboto, sans-serif;
    }

    button {
        cursor: pointer;
    }

    form input {
        width: 100%;
        height: 60px;
        color: #333333;
        border: 1px solid #dcdce6;
        border-radius: 8px;
        padding: 0 24px;
    }
`;

