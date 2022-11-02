import React from 'react'
import { useIdolsData } from '../../hooks/useIdolsData'
import { CircularProgress } from '@mui/material';
import { InfoWrapper } from '../Info/Info';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
const idolImages = require.context('../../assets', true)



const IdolInfoContainer = styled.div`
    display: flex;
    width: 60rem;
    min-height: 50rem;
    background-color: #131415;
    background: linear-gradient(180deg, rgba(35,32,32,1) 35.09%, #fd6584 100%);
    border-radius: 1rem;
    @media (min-width: 320px) and (max-width:480px){
        flex-direction: column;
        align-items: center;
        width: 80%;
        margin: 5rem 0;
        padding: 2rem 0;
      }
`
const IdolPrincipal = styled.div`
    width: 40%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    & img{
        width: 20rem;
        height: 90%;
        object-fit: cover;
        border-radius: 2rem;
        background-color: white;
    }
    & h2{
        font-size: 2rem;
        color: #fff;
        font-family: 'Koulen', cursive;

    }
    @media (min-width: 320px) and (max-width:480px){
        width: 100%;
        height: 50%;
        & img{
            order:2;
            width: 80%;
        }
      }
    
`
const IdolDescription = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    padding-top: 5rem;
    align-items: center;
    gap: 2rem;
    h2{
        font-size: 3rem;
        color: #fff;
        font-family: 'Koulen', cursive;
        align-self: flex-start;

    }
    & p {
        font-size: 1.8rem;
        color: white;
        font-family: 'Lucida Sans', sans-serif;

    }
    & button{
        background:  #fd6584;
        border: none;
        color: white;
        padding: 0.5rem 4rem;
        border-radius: 2rem;
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
        font-family: 'Koulen', cursive;
        font-size: 1.6rem;
        cursor:not-allowed;
    }
    @media (min-width: 320px) and (max-width:480px){
        width: 90%;
    }
    
`


const Idols = () => {
    const { isLoading, data, isError } = useIdolsData()
    const { idols } = useParams()
    const filterIdol = data?.data.find(idol => idol.id === Number(idols))
    const { name, group, img } = filterIdol

    return (
        <>
            <InfoWrapper>
                {isLoading && <CircularProgress sx={{ color: "pink" }} />}
                <IdolInfoContainer>
                    <IdolPrincipal>
                        <img src={idolImages(`./${filterIdol.img}`)} alt="" />
                        <div>
                            <h2>{group}</h2>
                        </div>
                    </IdolPrincipal>
                    <IdolDescription>
                        <h2>{name}</h2>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. In nemo eos tempore velit molestias nisi ea cupiditate sunt? Eos temporibus, maiores necessitatibus cumque numquam quod. Architecto eos laudantium ipsam animi.</p>
                        <button type='button'>Songs</button>
                    </IdolDescription>
                </IdolInfoContainer>
            </InfoWrapper>
        </>
    )
}

export default Idols