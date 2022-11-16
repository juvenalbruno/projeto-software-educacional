import styled from "styled-components";

export const Container = styled.div `
    display: flex;
    justify-content: center;
    padding: 25px 0 0;
    flex-direction: column;
    align-items: center;

    h1 {
        color: #fff;
        font-size: 22px;
        margin-bottom: 20px;
    }

    .pagination {
        border-bottom: 1px solid black;
        justify-content: center;
        padding-bottom: 15px;
        margin-bottom: 15px;
        display: flex;
        gap: 15px;
        width: 40%;

        @media(max-width: 768px) {
            width: 80%;
        }
    }

    .pagination button {
        font-size: 16px;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 8px;
        padding: 5px 15px;
        border-radius: 30px;
        border: none;
        box-shadow: 1px 1px 10px black;
        cursor: pointer;


        &:hover {
            color: #007cff;
            box-shadow: 1px 1px 5px #007cff;
        }
    }

    .pagination button svg {
        font-size: 20px;
    }

    .blocked {
        cursor: not-allowed !important;
        box-shadow: none !important;

        &:hover {
            color: #3794b3 !important;
            box-shadow: none !important;
        }
    }
`;