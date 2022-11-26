import styled from "styled-components";

export const Container = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;

    h1 {
        margin-bottom: 10px;
    }

    h2 {
        text-decoration: underline;
        margin-bottom: 22px;
    }

    a {
        font-size: 22px;
        text-decoration: none;
        padding: 10px 25px;
        background: #ffffff;
        color: black;
        border-radius: 55px;
        box-shadow: 1px 1px 15px black;
        display: flex;
        align-items: center;
        gap: 10px;
    }

    a:hover {
        filter: brightness(0.9);
    }

    svg {
        font-size: 25px;
    }
`;