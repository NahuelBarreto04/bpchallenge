import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

const idolImages = require.context('../../assets', true)

const WrapperIdolCard = styled.div`
    height: 50rem;
    width: 25rem;
    border-radius: 2rem;
    background-color: red;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    overflow: hidden;
    background: rgb(35,32,32);
    background: linear-gradient(180deg, rgba(35,32,32,1) 35.09%, #fd6584 100%);
    
    cursor: pointer;
    & img{
        width: 80%;
        height: 80%;
        object-fit: cover;
        border-radius: 2rem;
        background-color: white;
    }
    & h2{
        font-size: 2rem;
        color: #fff;
        font-family: 'Koulen', cursive;

    }
   

`

const IdolCard = ({ id, name, img }) => {


  const navigate = useNavigate()
  return (
    <WrapperIdolCard onClick={() => navigate(`/idols/${id}`)}>
      <img src={idolImages(`./${img}`)} alt="" />
      <h2 >{name}</h2>
    </WrapperIdolCard>
  )
}

export default IdolCard