import styled from 'styled-components'
import React from 'react'
import AnimatedPage from '../../components/animation/AnimatedPage'
import pink from "../../assets/bornpink.mp4"
import lis from "../../assets/home.png"
import { Link } from 'react-router-dom'


const WrapperHome = styled.div`
    width: 100%;
    height: calc(100vh - 6rem);
    display: flex;
    justify-content: center;
    background: url(${lis}) no-repeat;
    background-size: contain;
    background-position: center;
    background-color: #000;
    & a{
        position: absolute;
        color: white;
        font-family: 'Italiana', serif;
        font-size: 2rem;
        bottom: 5rem;
        font-weight: bold;
    }
`
const LisaCard = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    & video{
        height: 100%;
        width: 100%;
    }
`
const LisaImgContainer = styled.div`
    width: 40rem;
    object-fit: cover;
    height: 40rem;

    & img{
        width: 100%;
        height: 100%;
    }
`

const Home = () => {
    return (
        <WrapperHome>

            <Link to={"idols"}>VIEW IDOLS</Link>
        </WrapperHome>
    )
}

export default Home