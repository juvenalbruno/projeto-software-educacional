import styled from "styled-components";

export const CardLink = styled.div `
    display: flex;
    position: relative;

a {
    display: flex;
    align-items: center;
    background: #fff;
    border-radius: 20px;
    padding: 15px;
    min-height: 90px;
    width: 280px;
    gap: 15px;
    text-decoration: none;
    box-shadow: 2px 3px 4px #0000007a;
    
    cursor: ${({ blocked }) => !blocked ? 'not-allowed' : 'pointer'};
    filter: ${({ blocked }) => !blocked && 'blur(4px)'};

        :hover {
            filter: brightness(.9);
        }
        
        img {
            height: 85px;
            width: 85px;
        }

        span {
            font-size: 18px;
            font-weight: 800;
            color: #000;
        }
    }

    h1 {
        display: flex;
        position: absolute;
        width: 100%;
        height: 100%;
        justify-content: center;
        align-items: center;
        font-size: 38px;
    }
`;