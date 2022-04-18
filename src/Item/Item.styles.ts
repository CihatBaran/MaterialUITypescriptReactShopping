import styled from "styled-components";

export const Wrapper = styled.div`
    display:flex;
    justify-content: space-between;
    flex-direction: column;
    width: 100%;
    border: 1px solid lightblue;
    border-radius: 20px;
    height: 100%;
    margin-top: 2rem;
    position: relative;
    
    button {
        border-radius: 0 0 20px 20px;
    }
    .image-conatiner {
        text-align: center;
    }
    
    img {
        max-height: 250px;
        align-items: center;
    }
    
    div {
        font-family: Arial;
        padding: 1rem;
        height:100%;
    }
    
    .amount {
        position: absolute;
        right:1.5rem;
        top:1rem;
        background: red;
        color: white;
        padding:1rem;
    }
`;