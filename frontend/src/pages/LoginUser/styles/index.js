import styled from 'styled-components';

export const Fundo = styled.div`
    width: 100%;
    max-width: 1300px;
    margin: 0 auto auto auto;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    color: #463B88;
`;

export const Content = styled.div`
    width: 70%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    
    form{
        display: flex;
        flex-direction: column;
        margin-top: -40px;
        width: 40%;
    }
    input{
        width: 100%;
        height: 50px;
        margin-top: 10px;
    }
    button{
        width: 100%;
        height: 50px;
        margin-top: 10px;
        background: #453C8A;
        border-radius: 10px;
        color: #FFFFFF;
    }
    .cadastro{
        margin-top: 10px;
        
    }
    .btn{
        display: flex;
        align-items: center;
        margin-top: 10px;
        color: #453C8A;
        font-size: 18px;
        text-decoration: none;
        font-weight: 500;
        transition: opacity 0.2s;
    }
`;