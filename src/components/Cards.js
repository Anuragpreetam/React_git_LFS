
import url from "../utils/constants";
const Cards = (props)=>{
    const{cloudinaryImageId,id,name,cuisines,avgRating,locality} = props?.cardData;
    var dummyKey = Object.keys(props.cardData).length; //just to handle unique key problem in cuisines which uses li
    // console.log(typeof dummyKey)
    return(
        <div className="cards-component">
            <img style={{height:"200px",width:"200px"}} src={url+cloudinaryImageId}></img>
            <h1>{id}</h1> 
            <h1>{name}</h1>
            <h1>cuisines</h1>
            <ul>
               {cuisines.map((each_cuisine)=>{return <li key={dummyKey = dummyKey -1}>{each_cuisine}</li>})}
            </ul>
            <h1>{avgRating}</h1>
            <h1>{locality}</h1>
        </div>
    )
}
export default Cards;