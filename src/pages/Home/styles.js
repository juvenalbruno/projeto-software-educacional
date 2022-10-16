import styled from 'styled-components';

export const Container = styled.div`
    height: 100%;
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 40px 10%;

    h2 {
        align-items: center;
        color: #fff;
        width: 100%;
        padding: 5px 0;
        display: flex;
        justify-content: center;
    }

    .cards {
        display: flex;
        flex: 1;
        flex-direction: column;
        padding: 40px 0;
        gap: 15px;
    }
`;

export const Hr = styled.hr `
    width: 90%;
    border: none;
    height: 1px;
    background: #FFF;
`;