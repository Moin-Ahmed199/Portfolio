import React, { useEffect, useState } from "react";
import "./Gallery.css"


const Gallery = () =>{

    // Fetch images from an API or local storage
    const [imgData, setImages] = useState([])

useEffect(() =>{
    fetch('images.json')
   .then(response => response.json())
   .then(data => setImages(data))
   .catch(error => console.error('Error fetching data:', error))  // Error handling for fetch request
}, [])

    return(
       




        

<div className="img-container">


{imgData.map((Images, index) => (

<div className="imgCard" key={index}>

<div className="imgURL">

<img className="imgg" src={Images.img} alt={Images.title} />

</div>



<button className="img-btn">
<a href={Images.url} target="_blank" rel="noopener noreferrer" >
View full Page
</a>
</button>

</div>


))}


</div>






    )
}



export default Gallery;