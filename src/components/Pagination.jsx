import React from 'react'

function Pagination({page,setPages, total_pages}) {

    console.log("total",total_pages)

    function handleClickNext(){
        setPages(prev=>prev+1)
    }

    function handleClicPrev(){
        setPages(prev=>prev-1)
    }
    

  return (
    <div className='pagination'>
    <button disabled={page<=1} onClick={handleClicPrev}>prev</button>
    <button > {page} out of {total_pages}</button>
    <button onClick={handleClickNext}>next</button>
    </div>
  )
}
 export default Pagination