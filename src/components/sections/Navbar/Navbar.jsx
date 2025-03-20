import React, { useEffect, useState } from 'react'
import Flex from '../../layers/Flex'
import Image from '../../layers/Image'
import List from '../../layers/List'
import ListItem from '../../layers/ListItem'
import { FaBars } from "react-icons/fa";
import Container from '../../layers/Container'

const Navbar = () => {
  
  let [Navshow, setNavShow]= useState(true);
  
  useEffect(()=>{
    function scrollWidth(e){
      console.log(window.innerWidth);
      if(window.innerWidth<1024){
        setNavShow(false)
      }else{
        setNavShow(true)
      }
    }
    scrollWidth();
    window.addEventListener("resize", scrollWidth)
  },[])

   
  return (
  <nav className='py-8'>
    <Container >
      <Flex className='relative items-center lg:flex'>  
        <div className="w-full lg:w-3/12">
          <Image imgsrc="./public/logo.png" alt="logo.png"/>
        </div>
        <div className='w-full lg:w-9/12'>
        <FaBars  onClick={()=> setNavShow(!Navshow)} className='absolute top-0 block ml-auto lg:hidden  right-2.5'/>  
        
        {Navshow &&
          <List className="mt-5 lg:justify-end lg:flex lg:gap-x-10 lg:mt-0">
          <ListItem className="font-dm text-[#262626] text-sm font-bold hover:text-[#262626]" ListInnerItem="Home"/>
          <ListItem className="font-dm text-[#767676] text-sm font-bold hover:text-[#262626]" ListInnerItem="Shop"/>
          <ListItem className="font-dm text-[#767676] text-sm font-bold hover:text-[#262626]" ListInnerItem="About"/>
          <ListItem className="font-dm text-[#767676] text-sm font-bold hover:text-[#262626]" ListInnerItem="Contacts"/>
          <ListItem className="font-dm text-[#767676] text-sm font-bold hover:text-[#262626]" ListInnerItem="Journal"/>
        </List>
        }
          
        </div>
      </Flex> 
       
    </Container>
  </nav>
  )
}

export default Navbar