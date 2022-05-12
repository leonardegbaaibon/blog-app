import { useState, useEffect } from 'react';




const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isLoading, setisLoading] = useState(true)
    const [isError, setisError] = useState(null)


    useEffect(() => {
        setTimeout(() => {
            fetch(url)
            .then(res => {
                console.log(res)
                if(!res.ok){
                   throw Error('Could not find the source boss');
                }
                return res.json()
            })
            .then(data => {
                setData(data);
                setisLoading(false);
                setisError(null);
            })
            .catch(err => {
                // console.log(err.message)
                setisLoading(false);
                setisError(err.message)
            })
        }, 1000);
    //   console.log('use effect ran');
  },[url])
  return{data, isLoading, isError}
}
 
 
export default useFetch;