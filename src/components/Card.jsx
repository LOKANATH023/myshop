import React from 'react'

function Card({item,handleClick}) {
  const {title,author,price,img}=item;
  return (
    <div className="cards">
      <div className="image_box"> <img src={img} alt="p_img"></img>  </div>
      <div className="details">
        <p>{title}</p>
        <p>{author}</p>
        <p>Price - {price}Rs</p>
        <button onClick={()=>handleClick(item)}>Add to Cart</button>
      </div>
    </div>
  )
}

export default Card