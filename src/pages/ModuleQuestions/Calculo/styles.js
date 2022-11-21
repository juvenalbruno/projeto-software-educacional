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
        padding: 0px 8%;
    }

    h2 {
        width: 25rem;
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
    border: ${({ isCorrectComplete }) => isCorrectComplete };
`;