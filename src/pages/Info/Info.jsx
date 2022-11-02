import React from 'react'
import styled from 'styled-components'
// import AnimatedPage from '../../components/animation/AnimatedPage'
import IdolCard from '../../components/IdolCard/IdolCard'
import { CircularProgress } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import 'swiper/css/pagination';
import { useIdolsData } from '../../hooks/useIdolsData';

export const InfoWrapper = styled.div`
  min-height: calc(100vh - 6rem);
  background-color: #000;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

`
const IdolsWrapper = styled.div`
  height: 100%;
  width: 60%;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  @media (min-width: 320px) and (max-width:480px){
    width: 80%;
  }
  
`
const SwiperCustom = styled(Swiper)`

  & .swiper-button-next, & .swiper-button-prev  {
    color:#fd6584;
  }
  & .swiper-button-next{
    position: absolute;
  }
  & .swiper-button-disabled{
    display: none;
  }
  & .swiper-pagination-bullet-active{
    background-color: #e22172;
    
  }


`

const Info = () => {

  // // custom hook
  const { isLoading, data, isError } = useIdolsData()
  return (
    <>

      <InfoWrapper>
        {isLoading && <CircularProgress sx={{ color: "pink" }} />}
        {isError && <h2 style={{ color: "white", fontSize: "2rem" }}>Ha ocurrido un error en el servidor</h2>}
        {data &&
          <IdolsWrapper>
            <SwiperCustom
              modules={[Navigation, Pagination]}
              pagination={{ clickable: true }}
              navigation={{ clickable: true }}
              spaceBetween={100}
              slidesPerView={2.5}
              onSlideChange={() => console.log("slide change")}
              onSwiper={swiper => console.log(swiper)}
              breakpoints={{
                320: {
                  width: 320,
                  slidesPerView: 1,
                }
              }}
            >
              {data?.data.map(idol =>
                <SwiperSlide key={idol.id}>
                  <IdolCard  {...idol} />
                </SwiperSlide>
              )}

            </SwiperCustom>
          </IdolsWrapper>}

      </InfoWrapper>
    </>
  )
}



export default Info