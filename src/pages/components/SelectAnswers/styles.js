import styled from "styled-components";

export const Container = styled.div `
    background-color: ${({ selected, isCorrect }) => 
        selected 
            ? isCorrect 
                ? "#45d02f"
                : "red"
            : "#fff"};
    box-shadow: 2px 3px 4px #0000007a;

    padding: 6px 8px;
    width: 15rem;
    border-radius: 50px;

    display: flex;
    gap: 15px;
    cursor: pointer;

    input {
        display: none;
    }

    .circle {
        display: flex;
        align-items: center;
        background-color: ${({ selected }) => selected ? "#fff" : "#ebecff"};
        width: 30px;
        height: 30px;
        justify-content: center;
        border-radius: 100%;
    }

    .circle svg path {
        fill: #45d02f;
    }

    label {
        font-weight: 600;
        font-size: 20px;
        color: ${({ selected }) => selected ? "#fff" : "#6e6d6d"};
        cursor: pointer;
    }
`;