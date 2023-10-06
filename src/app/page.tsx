import Image from 'next/image'
import Link from 'next/link'
import "./globals.css";
import "./fonts.css"
import Navbar from '@/components/navbar';
import Front from '@/components/Front';
import Arrivals from '@/components/Arrivals';
import Collections from '@/components/Collections';
import Essentials from '@/components/Essentials';
import Footer from '@/components/Footer';
export default function Home() {
  return (
    <>
   <div> 
   <Navbar/>
   </div>
   <div className='main_container'>
  
     <Front/>
     <Arrivals/>
     <Collections/>
     <Essentials/>
<Footer/>
    </div>
   </>
  )
}
