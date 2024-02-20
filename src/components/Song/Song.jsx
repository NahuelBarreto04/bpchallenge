import React from 'react'
import styled from 'styled-components'

const SongWrapper = styled.div`
  width: 30%;
  height: 30rem;
  margin-top: 2rem;
  background-color: pink;
`


const Song = () => {
    return (
        <SongWrapper>
            <h1>Song</h1>
        </SongWrapper>
    )
}




export default Song