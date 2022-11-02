import React, { useContext } from 'react'
import { Box, CircularProgress } from '@mui/material'
import { LoadingContext } from '../../context/Loading'
const boxStyled = {
    width: "100%",
    height: "100%",
    position: "absolute",
    top: "0",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
}
const Loader = () => {
    const {isLoading, setLoading} = useContext(LoadingContext)
    setTimeout(()=>{
        setLoading(false)
    },3000)
  return (
    <Box sx={boxStyled}>
        <CircularProgress sx={{color:"#e218a5",}}></CircularProgress>
    </Box>
  )
}

export default Loader