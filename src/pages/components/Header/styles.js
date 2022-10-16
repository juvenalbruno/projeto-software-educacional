import styled from 'styled-components';

export const Container = styled.div `
    height: 70px;
    width: 100%;
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;

    a {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 10px;
        color: black;
        text-decoration: none;

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
    
`;