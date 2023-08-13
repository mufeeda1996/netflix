import React from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { useFetch } from '../Hook/useFetch';
function Slider() {
  const[data]=useFetch("movie/now_playing")
  const {results}=data
  

    let splideOptions = {
        heightRatio: 0.5,
        pagination: false,
        speed: 500,
        cover: true,
        padding: "15vw",
        breakpoints: {
          640: {
            heightRatio: 0.54,
            arrows: false,
            pagination: true,
            padding: "0",
          },
        },
      };
  return (
    <div className="movieSlider">
            <Splide options={splideOptions} >
                {
                results ?.map((item)=>{
                    console.log("items",item);
                return(
                <SplideSlide>
                    <img src={`https://image.tmdb.org/t/p/w1280${item.backdrop_path}`} alt=""/>
                    <div className='slideCaption'>
                        <h2>{item.title}</h2>
                    </div>
                </SplideSlide>
                )})
}
            </Splide> 
    </div>
  )
}

export default Slider