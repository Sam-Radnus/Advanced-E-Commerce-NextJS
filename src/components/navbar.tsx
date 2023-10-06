"use client"
import React,{useState,useEffect} from 'react';
import {  json } from 'react-router-dom';
import Link from 'next/link';
import "./styles/Navbar.scss"
import { RiMenuLine } from 'react-icons/ri';
import { CgSearch } from 'react-icons/cg';
import Sidebar from './Sidebar';
import { useSelector } from 'react-redux';
import { GoogleLoginProps, GoogleOAuthProvider } from '@react-oauth/google';
import { GoogleLogin } from '@react-oauth/google';
import jwt_decode from "jwt-decode";

interface User{
    _id:String;
    _type:String;
    userName:String;
    picture:string;
}
const Navbar = () => {
  
  const [hasScrolled, setHasScrolled] = React.useState<boolean>(false);
  const [showCart,setShowCart]=React.useState<boolean>(false);
  const [user,setUser]=useState<User|null>(null);
  const [id,setId]=useState<number>(0);
  const cartItems="cartItems";
   
  const resizeHeaderOnScroll = () => {
    setHasScrolled((prevHasScrolled) => {
      if (
        !prevHasScrolled &&
        (document.body.scrollTop > 20 ||
          document.documentElement.scrollTop > 20)
      ) {
        return true;
      }

      if (
        prevHasScrolled &&
        document.body.scrollTop < 4 &&
        document.documentElement.scrollTop < 4
      ) {
        return false;
      }

      return prevHasScrolled;
    });
  };
  const responseGoogle = (response: any) => {
    const { profileObj } = response;
  
    if (profileObj) {
      const { googleId, name, imageUrl } = profileObj;
  
      setId(googleId);
  
      const userObject = {
        _id: googleId,
        _type: 'user',
        userName: name,
        image: imageUrl,
      };
  
      localStorage.setItem('user', JSON.stringify(userObject));
      console.log(userObject);
    }
  };
  
  
  
  
  React.useEffect(() => {
    window.addEventListener('scroll', resizeHeaderOnScroll);

    return () => window.removeEventListener('scroll', resizeHeaderOnScroll);
  }, []);
  useEffect(()=>{
     let data=localStorage.getItem("user");
     let parsedData=data?JSON.parse(data):null;
     console.log(parsedData);
     setUser(parsedData);
  },[id])
  const closeSidebar=()=>{
    setShowCart(false);
  }
  const navStyles = hasScrolled
    ? `nav hasScrolled`
    : "nav";
    
  return (
    <>
    {/* {
      showCart &&   <Sidebar  closeCart={closeSidebar} />
      } */}
    <nav className={navStyles}>
      
      <div className="container_top">
        <Link href="/" className='info_link'>
     Info
             
        </Link>
       &nbsp;
        <Link href="/" className="login_link">
          Login
        </Link>
        <Link href="/" className='info_link'>
          { user && 
        <div style={{marginTop:"5px"}} onClick={()=>{
              setUser(null);
              setId(0);
                localStorage.removeItem("user");
             }}>Logout</div>
            }
        
             </Link>
      </div>
      <div className={"container_bottom"}>
      <Link href="/" id="logo" style={{textDecoration:"none"}}>
           <span style={{fontSize:"20px !important",fontWeight:"800 !important"}}>ASOS</span>
        </Link>
        <ul style={{marginTop:"25px "}} className={"links"}>
          
         
          <li >
            <Link className={"link"} href="/collections/t-shirts">
              T-shirts
            </Link>
          </li>
          <li>
            <Link
              className={"link"}
              href="/collections/hoodies-sweatshirts"
            >
              Hoodies
            </Link>
          </li>
          <li>
            <Link className={"link"} href="/collections/accessories">
              Accessories
            </Link>
          </li>
        </ul>
        <ul style={{lineHeight:"none"}} className="icons_menu" >
        <li className="search_icon disabled-link" >
            <CgSearch size="2em" />
          </li>
          {/* <li>
          { user?
             <div style={{display:"flex"}}>
              <div>
             <img src={user.picture} height="30" width="30" style={{borderRadius:"50%"}} /></div>
            
            </div>
          :
        <GoogleOAuthProvider 
                clientId={`${process.env.REACT_APP_GOOGLE_API_TOKEN}`}
                >
<GoogleLogin
  onSuccess={credentialResponse => {
    responseGoogle(credentialResponse);
  }}
  onError={() => {
    console.log('Login Failed');
  }}
/>
            </GoogleOAuthProvider>
          }
            </li> */}
          <li className={"cart_icon"}  style={{position:"relative"}} onClick={()=>{
            if(!cartItems || cartItems.length===0){
              alert("Please first add some items to the Cart");
              return;
            }
            if(!user){
              alert("Please Login to Continue");
              return;
            }
          setShowCart(true);
        }} >
          { cartItems.length>0?<span id="item_length">{cartItems.length}</span>:<></>}
           <svg style={{lineHeight:"none"}} stroke="currentColor" fill="none" stroke-width="0" viewBox="0 0 24 24" height="2em" width="2em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M5 4H19C19.5523 4 20 4.44771 20 5V19C20 19.5523 19.5523 20 19 20H5C4.44772 20 4 19.5523 4 19V5C4 4.44772 4.44771 4 5 4ZM2 5C2 3.34315 3.34315 2 5 2H19C20.6569 2 22 3.34315 22 5V19C22 20.6569 20.6569 22 19 22H5C3.34315 22 2 20.6569 2 19V5ZM12 12C9.23858 12 7 9.31371 7 6H9C9 8.56606 10.6691 10 12 10C13.3309 10 15 8.56606 15 6H17C17 9.31371 14.7614 12 12 12Z" fill="currentColor"></path></svg>
          </li>
          <li className="mobile_icon">
            <RiMenuLine onClick={()=>{

            }} />
          </li>

            
        </ul>
      </div>
    </nav>
    </>
  );
};

export default Navbar;