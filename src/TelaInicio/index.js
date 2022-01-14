import { useEffect, useState } from 'react'
import axios from 'axios'
import {ContainerQuizzes} from './style'
import styled from 'styled-components';
import {Link} from 'react-router-dom'

function TelaInicio(){
    const[quizzes, setQuizzes] = useState([]);


    function getQuizzes(){
        axios.get("https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes")
        .then((response)=>setQuizzes(response.data))
    }

    useEffect((getQuizzes), [])


    console.log(quizzes)
    return(
        <Home>
            <CriarQuizz>
                <Message>Você ainda nao criou nenhum <br/> quizz ainda :(</Message>
                <Botao to="/criar">Criar Quizz</Botao>
            </CriarQuizz>
                <TitleLista>Todos os quizzes</TitleLista>
            <ContainerQuizzes>
                {quizzes.map((quizz)=>
                <Quizz>
                    <TitleQuizz>{quizz.title}</TitleQuizz>
                    <img src={quizz.image}></img>
                </Quizz>
                
                )}
            </ContainerQuizzes>
        </Home>
        



    )
}
export default TelaInicio


const CriarQuizz = styled.div`

    width: 1051px;
    height: 181px;


    background-color: white;

    border-radius: 5px;
    border: dashed #D4D4D4 2px;
    margin: 0 auto;
    margin-top: 123px;
    cursor: pointer;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    

`
const Message = styled.div`
    width: auto;
    margin: 0 auto;
    font-style: normal;
    font-weight: 400px;
    font-size: 20px;
    color:#B9B9B9;
    padding-bottom: 30px;
    text-align: center;
`

const Botao = styled(Link)`
    all: unset;
    width: 136px;
    border-radius: 50px;
    background-color: white;
    font-size: 21px;
    text-align: center;
    color: #EC362D;
    border: dashed #EC362D;
    cursor: pointer;

`

const TitleLista = styled.div`
    font-weight: 700;
    font-size: 20px;
    margin-bottom: 5px;
    margin-top: 20px;
    margin-left: 450px;

`
const Home = styled.div`
    font-family: 'Roboto', sans-serif;
`
const Quizz = styled.div`
    position: relative;
    margin-left: 5px;
    margin-right: 5px;
    margin-bottom: 14px;

    width: 341px;
    height: 181px;

    border-radius: 5px;

    display: flex;
    
    
    
    img{
        mask-image: linear-gradient(0deg, #FFF 0%, #121212 65%, #000000 100%);
        width: 100%;
        height: 100%;
        border-radius: 5px;
        position: absolute;
    }
    /* (180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.5) 64.58%, #000000 100%) */
`



const TitleQuizz = styled.div`

    position: absolute;
    bottom: 5px;
    left: 17px;

    display: flex;
    flex-wrap: wrap;
    color: white;
    font-family: 'Roboto', sans-serif;
    font-size: 19px;
    font-weight: 400;

    word-break: break-all;

    height: auto;
    width: 280px;
    color: black;
    background: gray;

    border-radius: 5px;

 

    z-index: 3;
`