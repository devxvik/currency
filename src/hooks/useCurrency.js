import { useState, useEffect } from "react";

function useCurrency(currecy){
    const [data , setData] = useState({});

    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        .then((res)=> res.json)
        .then((res)=> setData(res[currecy]))
    },[currecy])
    return data
}

export default useCurrency;