import React from 'react'
import styled from "styled-components"
import Song from '../../components/Song/Song'

const WrapperSong = styled.section`
  background-color: #131415;
  height: calc(100vh - 6rem);
  display: flex;
  justify-content:center;
  align-items: center;

`
const SongsContainer = styled.article`
display:flex;
justify-content: center;
flex-wrap: wrap;
height: 60rem;
width: 80rem;
overflow-y: scroll;
padding: 4rem;
gap: 4rem;
border-radius: 2rem;

::-webkit-scrollbar{
  background-color: white;
  height: 2rem;

}
::-webkit-scrollbar-thumb{
  background-color: #fd6584;
  color: red;
  border-radius: 2rem;
  height: 2rem;
}
background: rgb(35,32,32);
background: linear-gradient(180deg, rgba(35,32,32,1) 35.09%, #fd6584 100%);  
`


const Songs = () => {
  return (
    <WrapperSong>
      <SongsContainer>
        <Song />
        <Song />
        <Song />
        <Song />
        <Song />
        <Song />
      </SongsContainer>
    </WrapperSong>


  )
}

export default Songs