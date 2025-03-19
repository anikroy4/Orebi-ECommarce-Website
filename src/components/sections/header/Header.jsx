import React, { useEffect, useRef, useState } from 'react'
import Container from '../../layers/Container'
import Flex from '../../layers/Flex'
import List from '../../layers/List'
import ListItem from '../../layers/ListItem'
import Dropdown from '../../layers/Dropdown'
import { FaBars, FaSearch } from 'react-icons/fa'
import Searchbar from '../../layers/Searchbar'



const Header = () => {
  
  let [show, setShow] =useState(false);       
  let ref= useRef()
  
  useEffect(()=>{
    document.body.addEventListener("click",(e)=>{
      console.log(ref.current);
      if(ref.current.contains(e.target)){
        setShow(true);
      }
      else{
        setShow(false);
      }
    });
  },[]);
  

  
   
  return (
    <div className='bg-[#f5f5f3] py-[25px]'>
        <Container>
            <Flex className="flex justify-between">
                <div className='flex items-center'>
                  <Dropdown className="relative" dropRef={ref}>
                    <p className='flex items-center gap-x-2.5 font-dm text-sm '>
                      <FaBars /> Shop by Category
                    </p>
                    {show &&
                      <List className='absolute top-8 w-[263px] bg-primary text-sm text-[#767676] font-dm font-normal'>
                        <ListItem className="px-5 py-4 duration-100 ease-in hover:px-7 hover:font-bold border border-solid border-[#2D2D2D] hover: text-white" ListInnerItem="Furniture"/>
                        <ListItem className="px-5 py-4 duration-100 ease-in hover:px-7 hover:font-bold border border-solid border-[#2D2D2D] hover: text-white" ListInnerItem="Accesories"/>
                        <ListItem className="px-5 py-4 duration-100 ease-in hover:px-7 hover:font-bold border border-solid border-[#2D2D2D] hover: text-white" ListInnerItem="Electronics"/>
                        <ListItem className="px-5 py-4 duration-100 ease-in hover:px-7 hover:font-bold border border-solid border-[#2D2D2D] hover: text-white" ListInnerItem="Clothes"/>
                        <ListItem className="px-5 py-4 duration-100 ease-in hover:px-7 hover:font-bold border border-solid border-[#2D2D2D] hover: text-white" ListInnerItem="Bags"/>
                        <ListItem className="px-5 py-4 duration-100 ease-in hover:px-7 hover:font-bold border border-solid border-[#2D2D2D] hover: text-white" ListInnerItem="Home appliances"/>
                      </List>
                    }
                  </Dropdown>
                </div>
                <div className='relative w-[600px]'>
                  <Searchbar className="w-full px-5 py-4 placeholder:text-[#C4C4C4] font-normal text-sm font-dm" placeholder="Search Products"/>
                  <FaSearch className='absolute top-4 right-4'/>
                </div>
                <div className='flex items-center'>as</div>
            </Flex>
        </Container>
    </div>
  )
}

export default Header