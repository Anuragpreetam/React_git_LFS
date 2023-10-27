import  Heading  from "./Heading";
import  Cards  from "./Cards";
import swiggyData from "../utils/mockData";
import { useState } from "react";
import { useEffect } from "react";

//whenever a state variable for a component changes, react, re-renders the component

export const Body = ()=>{

   
    var[restaurants_filter,setList] = useState(swiggyData);

     //useEffect is executed after the component is rendered
     useEffect(()=>{
        console.log("UseEffect called after component has rendered")
        fetchData();
     },[])

     //We'd like to use the actual swiggy api rather than hardcoded data, we do so by following
      var swiggyApi = "'https://dummyjson.com/products"
        const fetchData = async ()=>{
            const apiData = await fetch(swiggyApi) //since fetch is asynchronous, you can either use 'await' or 'then' to handle it
            const json = await apiData.json();
            console.log(json);
            // setList(json?.data.cards[4].card.card.info);
            setList(json?.data.cards[2]?.data?.data?.cards) //The optional chaining (?.) operator accesses an object's property or calls a function.
            // If the object accessed or function called using this operator is undefined or null, 
            //the expression short circuits and evaluates to undefined instead of throwing an error.
        }

    return(
        <div className="mainbody">
            <Heading style={{display:"block"}}/>

            {/* avgRating>4 filter */}
            
            <button onClick={()=>{
                console.log(restaurants_filter);
                setList(
                    restaurants_filter.filter((res)=>res.avgRating>4)
                )
            }}><h1>Top rated restaurants</h1></button>

            {/* Clear filter */}
             <button onClick={()=>{
                setList(
                    restaurants_filter = swiggyData
                )
            }}><h1>Clear Filter</h1></button>
            <div className="all-cards-container">
            
                {restaurants_filter.map(
                    (e)=> {
                        try{
                            if(Object.keys(e).length > 0){
                                // console.log(Object.keys(e).length)
                                return <Cards key= {e.id} cardData={e}/>
                            }
                        }
                    
                        catch(er) {
                            alert(er);
                        } 
                    }
                )}
            </div>
        </div>
     
    )
}

export default Body;