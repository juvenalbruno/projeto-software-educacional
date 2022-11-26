import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;

    h2 {
        max-width: 25rem;
        font-size: 20px;
        margin-bottom: 45px;
        background: #fff;
        padding: 15px;
        line-height: 1.8;
        font-weight: 300;
    }

    .select {
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
`;