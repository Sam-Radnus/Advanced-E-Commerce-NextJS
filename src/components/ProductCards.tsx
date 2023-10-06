"use client"
import React ,{useEffect, useState,useRef} from 'react'
import "./styles/ProductCard.css"
import { useSelector,useDispatch } from "react-redux";
interface ProductCardProps {
    product: {
      title: string;
      sizes_available: string[];
      discount: number;
      ImageURL: string;
      brand: string;
      gender: string;
      price: number;
    };
  }
const ProductCard : React.FC<ProductCardProps> = (props) => {
  const {product}=props;
  const [state,setState]=useState(1);

  const [isAdded,setAdded]=useState(false);
  const cartItems="";
  const ar=["S","M","L","XL"];

  useEffect(()=>{

  },[isAdded])
  const incNum=()=>{
	setState((prevState)=>{
		return prevState+1;
	})
  }
  const decNum=()=>{
	setState((prevState)=>{
		return prevState-1;
	})
  }
 
  return (
	<div>
	<li className="card">
	<div className="tool">
		<div className='tool_head_par'><span id="tool_head" style={{marginTop:"10px",textAlign:"center"}}>QUICK ADD</span>
		<span>+</span>
		</div>	
			<div id="sizes" style={{marginTop:"-5px",gap:"5px"}}>
				{
			          product.sizes_available && product?.sizes_available.map((size,index)=>{
                         return product.sizes_available.indexOf(ar[index])!==-1?<button className='size_btn'><b>{size}</b></button>:<button disabled={true}  style={{color:"grey",cursor:"default"}} className='size_btn_disabled'>{ar[index]}</button>
					})
				}
				
			</div>
			
			
		</div> 
		{/* <div className="discount">
			<span>-{product.discount}%</span>
		</div> */}
		<a className="card-image"  target="_blank" style={{backgroundImage:`url(${product.ImageURL})`}} data-image-full="https://s3-us-west-2.amazonaws.com/s.cdpn.io/310408/psychopomp-500.jpg">
			<img src={"product"} alt="Psychopomp" />
		</a>
		<div className="card-description">
		<div className="product_title">
		<h4 >{product.title.split(" ").slice(0,2).join(" ") } Dress</h4> 
		</div>
        <div className="product_characteristics">
        <span>{product.brand}</span> <span>{product.gender}</span>
        </div>
		<div style={{display:"flex",marginLeft:"-12px",justifyContent:"space-between"}}>
			<span id="price">${(product.price*state).toFixed(2)}</span>
			{/* { isAdded ?
			<button onClick={()=>{
			
			}} className='add_to_cart'>Remove</button>
		   :
		   <button onClick={()=>{
				
			}} className='add_to_cart'>Add Item</button>
		     } */}
			</div>
			{/* <p>{description.slice(0,20)}...</p> */}
		</div>
		
	</li>	
	</div>	
  )
}

export default ProductCard