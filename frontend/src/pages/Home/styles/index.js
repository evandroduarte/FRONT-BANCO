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
    height: 500px;
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