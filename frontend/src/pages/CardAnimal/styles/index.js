import styled from 'styled-components';

export const Fundo = styled.div`
    width: 100%;
    max-width: 1300px;
    margin: 0 auto auto auto;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #463B88;
`;

export const Content = styled.div`
    width: 70%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    
`;

export const Header = styled.div`
    width: 100%;
    max-height: 150px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    
    img{
        height: 100%;
        width: 18%;
        
    }

    .info{
        display: flex;
        align-items: center;
        width: 28%;
        height: 100%;
        
    }
    .link{
        margin-left: 5px;
        text-decoration: none;
        color: #463B88;
    }
    .menu{
        border: solid 1px;
        margin-left: 10px;
    }
    .menu:hover{
        cursor: pointer;
    }

    
`;

export const Card = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between; 
    padding-left: 10px;
    padding-right: 10px;
    margin-top: 10px;
    .titulos{
        width: 60%;
        height: 3.5%;
    }
`;

export const CardAnimale = styled.div`
    width: 100%;
    height: 400px;
    display: flex;
    justify-content: space-between;
    padding: 10px;
    margin-top: 10px;
    background-color: #EBEBEC;  
    border-radius: 8px;  
    box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.3);

    

    .media{
        width: 42%;
        height: 100%;
        display: flex;
        flex-direction: column;
        
        justify-content: center;

        .imagem{
            width: 100%;
            height: 77%;
        }
        
    }
    .descricao{
        width: 55%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;

        h3,p{
            margin-top: 30px;
        }

        .localizacao{
            display: flex;
            margin-top: 40px;
            h4{
                margin-left: 5px;
            }
        }
        button{
            width: 100%;
            height: 40px;
            margin-top: 10px;
            background: #453C8A;
            border-radius: 10px;
            color: #FFFFFF;
        }
        
    }
`;

