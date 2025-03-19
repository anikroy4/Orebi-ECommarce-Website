import React, { useEffect, useRef, useState } from 'react'
import Container from '../../layers/Container'
import Flex from '../../layers/Flex'
import List from '../../layers/List'
import ListItem from '../../layers/ListItem'
import Dropdown from '../../layers/Dropdown'
import { FaBars } from 'react-icons/fa'
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
                <div>
                  <Dropdown className="relative" dropRef={ref}>
                    <p className='flex items-center gap-x-2.5 font-dm  '>
                      <FaBars /> Shop by Category
                    </p>
                    {show &&
                      <List className='absolute top-8 w-[263px] bg-primary text-[#767676]'>
                        <ListItem className="px-5 py-4 font-dm hover:px-7 hover:font-bold border border-solid border-[#2D2D2D] hover: text-white" ListInnerItem="Furniture"/>
                        <ListItem className="px-5 py-4 font-dm hover:px-7 hover:font-bold border border-solid border-[#2D2D2D] hover: text-white" ListInnerItem="Accesories"/>
                        <ListItem className="px-5 py-4 font-dm hover:px-7 hover:font-bold border border-solid border-[#2D2D2D] hover: text-white" ListInnerItem="Electronics"/>
                        <ListItem className="px-5 py-4 font-dm hover:px-7 hover:font-bold border border-solid border-[#2D2D2D] hover: text-white" ListInnerItem="Clothes"/>
                        <ListItem className="px-5 py-4 font-dm hover:px-7 hover:font-bold border border-solid border-[#2D2D2D] hover: text-white" ListInnerItem="Bags"/>
                        <ListItem className="px-5 py-4 font-dm hover:px-7 hover:font-bold border border-solid border-[#2D2D2D] hover: text-white" ListInnerItem="Home appliances"/>
                      </List>
                    }
                  </Dropdown>
                </div>
                <div className='w-[600px]'>
                  <Searchbar className="w-full"/>
                </div>
                <h1>as</h1>
            </Flex>
        </Container>
    </div>
  )
}

export default Header