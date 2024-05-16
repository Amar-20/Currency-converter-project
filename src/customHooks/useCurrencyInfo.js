// We can also use inbuilt hooks while creating custom hooks.
import { useEffect,useState } from "react";

function useCurrencyInfo(currency){
    const [data,setData] = useState({})
    //I used useEffect hook becaz i wanted the Api to be called when and only this custom hook is called.
    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        //'String to json conversion.Beaz we mostly get string as the response in api calling.'
        .then((res)=>res.json())
        //saving the data in useState so we get change in the UI. 
        .then((res)=>setData((res[currency])))
        console.log(data)
    },[currency])

    console.log(data) 

    return data
}
export default useCurrencyInfo;

