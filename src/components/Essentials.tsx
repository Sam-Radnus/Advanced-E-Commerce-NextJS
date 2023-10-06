"use client"
import "./styles/Arrivals.css";
import {useRef,useEffect} from "react";
import { data } from "./assets/Products";
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import ProductCard from "./ProductCards";

export default function Essentials(){
    const items=data.reverse();
    const slider = useRef<HTMLDivElement|null>(null);
  let isDown = useRef<boolean>(false);
  let startX = useRef<number|null>(null);
  let scrollLeft = useRef<number|null>(null);
  useEffect(() => {
    if (slider && slider.current) {
      let sliderRef = slider.current;
      sliderRef.addEventListener("mousedown", one);
      sliderRef.addEventListener("mousedown", two);
      sliderRef.addEventListener("mouseleave", three);
      sliderRef.addEventListener("mouseup", four);
      sliderRef.addEventListener("mousemove", five);

      return () => {
        sliderRef.removeEventListener("mousedown", one);
        sliderRef.removeEventListener("mousedown", two);
        sliderRef.removeEventListener("mouseleave", three);
        sliderRef.removeEventListener("mouseup", four);
        sliderRef.removeEventListener("mousemove", five);
      };
    }
  }, []);
  
  function one(e:MouseEvent) {
    console.log("hello");
    isDown.current = true;
    startX.current = e.pageX - (slider.current?.offsetLeft||0);
    scrollLeft.current = (slider.current?.scrollLeft||0);
  }

  function two(e:MouseEvent) {
    console.log("hi");
    isDown.current = true;
    startX.current = e.pageX - (slider.current?.offsetLeft||0);
    scrollLeft.current = (slider.current?.scrollLeft||0);
  }

  function three() {
    isDown.current = false;
  }

  function four() {
    isDown.current = false;
  }

  function five(e:MouseEvent) {
    console.log("hi");
    if (!isDown.current) return;
    e.preventDefault();
    const x = e.pageX - (slider.current?.offsetLeft||0);
    const walk = x - (startX?.current||0);
    if(slider.current){
       slider.current.scrollLeft = (scrollLeft?.current||0) - walk;
    }  
}

    return (
        <div>
            <span className="heading">
                ESSENTIALS
            </span>
            <div className="arrived_products" >
            {items.map((product)=>{
                return <div ref={slider}> <ProductCard product={product}/> </div> 
            })}
             
            </div>
        </div>
    )
}