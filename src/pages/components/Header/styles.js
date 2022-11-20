import styled from 'styled-components';

export const Container = styled.div `
    height: 70px;
    width: 100%;
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;

    div {
        display: flex; 
        width: 80%;
        justify-content: center
    }

    a {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 10px;
        color: black;
        text-decoration: none;
        left: 20px;
        position: relative;

        :hover {
            padding: 5px 20px;
            border-radius: 50px;
            background-color: #00beff;
            color: #fff;
            text-decoration: underline;
        }
    }

    h1 {
        font-size: 22px;
    }

    svg {
        height: 25px;
        width: 25px;
    }

    button {
        display: flex;
        border: none;
        background: transparent;
        gap: 7px;
        padding: 5px 18px;
        border-radius: 50px;
        cursor: pointer;
        align-items: center;

        h1 {
            font-size: 18px;
        }

        svg {
            height: 20px;
            width: 20px;
        }

        &:hover {
            box-shadow: 1px 1px 10px black;
            background: #0000000d;
            transition: .3s;
        }
    }
    
`;