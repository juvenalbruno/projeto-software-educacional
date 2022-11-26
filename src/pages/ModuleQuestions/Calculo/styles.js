import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;

    .inputs-complete {
        display: flex;
        gap: 15px;
        flex-wrap: wrap;
        justify-content: center;
        padding: 0px 8%;
    }

    h2 {
        max-width: 25rem;
        font-size: 20px;
        margin-bottom: 45px;
        background: #fff;
        padding: 15px;
        line-height: 1.8;
        font-weight: 300;
    }
    
    `;

export const Input = styled.input `
    min-width: 35px;
    max-width: 85px;
    height: 40px;
    text-align: center;
    font-size: 28px;
    border: ${({ isCorrectComplete, isCorrect }) => isCorrect 
    ? '3px solid #0eff00' 
    : isCorrectComplete };
`;