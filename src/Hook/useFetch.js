import axios from 'axios'
import React, { useEffect, useState } from 'react'

 export const useFetch = (url,customParams = {} )=>{
   const[data,setData]=useState({})
   const[loading,setLoading]=useState(true)
   const[error,setError]=useState(null)
   const{page}=customParams

  const options= ({
    method:"get",
    baseURL:"https://api.themoviedb.org/3/",
    url,
    params :{
     api_key:"051784d10192760532650faac0b87d29",
     ...customParams,
    }
 
 })

 useEffect (()=>{

    const fetchData= async ()=>{
    try {

        let {data}= await axios (options)
        setData(data)
        setLoading(false)
    } catch (error) {
        setError(error.message)
        setLoading(false)
    }
    }
    fetchData()
    
 } ,[page])
 return [data,loading,error] 
}