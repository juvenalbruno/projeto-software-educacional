import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;

    img {
        width: 100%;
        height: 100%;
        
        max-width: 210px;
        max-height: 210px;

        padding: 10px;
        background-color: #fff;
        border-radius: 8px;

        margin-bottom: 32px;
        box-shadow: 2px 3px 4px #0000007a;
    }

    .inputs-complete {
        display: flex;
        gap: 15px;
        flex-wrap: wrap;
        justify-content: center;
    }

    
    
    `;

export const Input = styled.input `
    width: 35px;
    height: 40px;
    text-align: center;
    font-size: 28px;
    border: ${({ isCorrectComplete }) => isCorrectComplete };
`;