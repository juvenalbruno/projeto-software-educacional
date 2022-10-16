import styled from "styled-components";

export const CardLink = styled.div `
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
`;