import React from 'react'
import Moviecard from './Moviecard'
import Wrapper from './Wrapper'
import Pagination from './Pagination'
import Loader from './Loader'
import Error from './Error'
import Slider from './Slider'
import { useFetch } from '../Hook/useFetch'
import { useState } from 'react'
function Main() {

   const [page,setPages]=useState(1)
  const [data,loading,error]=useFetch('movie/popular',{page})
  
  const {results,total_pages} =data
  return (
    <main>
      <Slider/>
      <Wrapper>
         {loading && <div><Loader/></div>}
          {error && <div><Error>{error}</Error></div>}
          {
          !error && !loading &&(
          <>
          <h2 className="sectionTitle">Popular Movies</h2>
          <div className="gallery">
          {results.map((movie) => {
            return <Moviecard key={movie.id} movie={movie} />;
          })} 
        </div>
        <Pagination page={page} setPages={setPages}  total_pages={total_pages} />
        </>
        )}
       
      </Wrapper>
    </main>
  )
}

export default Main