import React from 'react'
import { useParams } from 'react-router-dom'

const Idolinfo = () => {
    let {idols} = useParams()
  return (
    <div>{idols}</div>
  )
}

export default Idolinfo