import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    
    h3 {
        width:100%;
    }
    
    div {
        display: inline-block;
    }
    img {
        width: 100px;
        height: 100px;
    }
    .price-arrangement {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    
    .buttons {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    
    .buttons button {
        max-height:30px;
    }
    .buttons p {
        margin:1rem;
    }
`;