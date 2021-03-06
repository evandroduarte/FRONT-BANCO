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
        margin-top: 10px;
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
        width: 100%;
        flex-direction: column;
        
        
    }
    input{
        width: 100%;
        height: 50px;
        margin-top: 10px;
    }
       
    textarea{
        width: 100%;
        height: 200px;
        margin-top: 10px;
        color: #333333;
        border: 1px solid #dcdce6;
        border-radius: 8px;
        padding-left: 24px;
        padding-top: 10px;
        padding-right: 24px;
        resize: none;
    }
    input[type="date"] {
        color: #333333;
    }
    
    button{
        height: 50px;
        margin-top: 10px;
        background: #453C8A;
        border-radius: 10px;
        color: #FFFFFF;
    }

    label{
        font-size: 15px;
        margin-top: 10px;
        margin-left: 5px;
    }

    

    select{
        width: 98%;
        height: 50px;
        margin-top: 10px;
        margin-left: 5px;
        border-radius:8px;

    }

    option{
        font-size: 20px;
    }

    input[type="file"] {
        display: none;
    }

    .custom-file-upload{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 10px;
        h2{
            margin-left: 10px;
        }
    }
    .custom-file-upload:hover{
        cursor: pointer;
    }
`;