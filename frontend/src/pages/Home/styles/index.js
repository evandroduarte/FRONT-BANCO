import styled from 'styled-components';

export const Fundo = styled.div`
    width: 100%;
    
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
    align-items: center;
    justify-content: center;

    .bemVindo{
        width: 85%;
    }
    .btnBemVindo{
        display: flex;
        align-items: center;
        width: 73%;
        justify-content: space-between;
    }
    button{
        width: 40%;
        height: 50px;
        margin-top: 10px;
        background: #453C8A;
        border-radius: 10px;
        color: #FFFFFF;
    }
    
    .subTitulo{
        font-size: 18px;
    }
`;

export const Banner = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    img{
        width: 73%;
    }
    
`;

export const QmSomos = styled.div`
    width: 85%;
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    .aboutUs{
        img{
            width: 40%;
        }
    }
    

    .aboutUsContent{
        width: 100%;
        display: flex;
        justify-content: space-between;
        
        p{
            text-align: justify;
            font-weight: normal;
            font-size: 18px;
        }
        img{
            width: 50%;
        }
    }
`;

export const CausasTitulo = styled.div`
    width: 85%;
    display: flex;
    margin-top: 30px;
    
`;

export const Listagem = styled.div`
    width: 87%;
    min-height: 1300px;
    display: flex;
    justify-content: space-between; 
    padding-left: 10px;
    padding-right: 10px;
    margin-top: 30px;

    .titulos{
        width: 60%;
        height: 3.5%;
    }

    ul{
        list-style-type: none;
    }
`;

export const CasosONG = styled.div`
    width: 48%;
    height: 1300px;
    display: flex;
    flex-direction: column;
`;
export const CasosAnimal = styled.div`
    width: 48%;
    height: 1300px;
    display: flex;
    flex-direction: column;
`;

export const CardAnimal = styled.div`
    width: 100%;
    height: 250px;
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
        align-items: center;
        justify-content: center;

        .imagem{
            width: 100%;
            height: 77%;
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
    .descricao{
        width: 55%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;

        h3,p{
            margin-top: 10px;
        }

        .localizacao{
            display: flex;
            margin-top: 10px;
            h4{
                margin-left: 5px;
            }
        }
        
        
    }
`;


export const CardONG = styled.div`
    width: 100%;
    height: 250px;
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
        align-items: center;
        justify-content: center;

        .imagem{
            width: 100%;
            height: 77%;
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
    .descricao{
        width: 55%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;

        h3,p{
            margin-top: 10px;
        }

        .localizacao{
            display: flex;
            margin-top: 10px;
            h4{
                margin-left: 5px;
            }
        }
        
        
    }

`;
