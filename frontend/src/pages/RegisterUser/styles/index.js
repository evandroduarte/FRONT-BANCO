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
    justify-content: space-between;
`;

export const Informacoes = styled.div`
    width: 53%;
    height: 60%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    

    p{
        text-align: justify;
        font-weight: normal;
        font-size: 18px;
    }
    
    
`;

export const Formulario = styled.div`
    padding-top: 7%;
    width: 45%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

                    
    form{
        display: flex;
        flex-direction: column;
        
    }
    input{
        width: 100%;
        height: 50px;
        margin-top: 10px;
    }
       
    .input-city{
        width: 78%;
    }
    .input-uf{
        margin-left: 10px;
        width: 19%;
    }
    
    button{
        height: 50px;
        margin-top: 10px;
        background: #453C8A;
        border-radius: 10px;
        color: #FFFFFF;
    }
`;