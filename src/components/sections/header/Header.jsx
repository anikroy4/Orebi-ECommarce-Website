import React, { useEffect, useRef, useState } from 'react'
import Container from '../../layers/Container'
import Flex from '../../layers/Flex'
import List from '../../layers/List'
import ListItem from '../../layers/ListItem'
import Dropdown from '../../layers/Dropdown'
import { FaBars, FaSearch, FaUserAlt } from 'react-icons/fa'
import Searchbar from '../../layers/Searchbar'
import { RxTriangleDown } from 'react-icons/rx'
import { HiShoppingCart } from 'react-icons/hi'



const Header = () => {
  
  let [CategoryDropdownShow, setCategoryDropdownShow] =useState(false);       
  let [UserDropdownShow, setUserDropdownShow] =useState(false);       
  let Categoryref= useRef();
  let UserRef=useRef();
  
  useEffect(()=>{
    document.body.addEventListener("click",(e)=>{
      // console.log(ref.current);
      if(Categoryref.current.contains(e.target)){
        setCategoryDropdownShow(true);
      }
      else{
        setCategoryDropdownShow(false);
      }
      if(UserRef.current.contains(e.target)){
        setUserDropdownShow(true);
      }
      else{
        setUserDropdownShow(false);
      }
    });
  },[]);
  

  
   
  return (
    <div className='bg-[#f5f5f3] py-[25px]'>
        <Container>
            <Flex className="flex justify-between">
                <div className='flex items-center'>
                  <Dropdown className="relative" dropRef={Categoryref}>
                    <p className='flex items-center gap-x-2.5 font-dm text-sm '>
                      <FaBars /> Shop by Category
                    </p>
                    {CategoryDropdownShow &&
                      <List className='absolute top-8 w-[263px] bg-primary text-sm text-[#767676] font-dm font-normal'>
                        <ListItem className="px-5 py-4 duration-100 ease-in hover:px-7 hover:font-bold border-b border-solid border-[#2D2D2D] hover: text-white" ListInnerItem="Furniture"/>
                        <ListItem className="px-5 py-4 duration-100 ease-in hover:px-7 hover:font-bold border-b border-solid border-[#2D2D2D] hover: text-white" ListInnerItem="Accesories"/>
                        <ListItem className="px-5 py-4 duration-100 ease-in hover:px-7 hover:font-bold border-b border-solid border-[#2D2D2D] hover: text-white" ListInnerItem="Electronics"/>
                        <ListItem className="px-5 py-4 duration-100 ease-in hover:px-7 hover:font-bold border-b border-solid border-[#2D2D2D] hover: text-white" ListInnerItem="Clothes"/>
                        <ListItem className="px-5 py-4 duration-100 ease-in hover:px-7 hover:font-bold border-b border-solid border-[#2D2D2D] hover: text-white" ListInnerItem="Bags"/>
                        <ListItem className="px-5 py-4 duration-100 ease-in hover:px-7 hover:font-bold border-b border-solid border-[#2D2D2D] hover: text-white" ListInnerItem="Home appliances"/>
                      </List>
                    }
                  </Dropdown>
                </div>
                <div className='relative w-[600px]'>
                  <Searchbar className="w-full px-5 py-4 placeholder:text-[#C4C4C4] font-normal text-sm font-dm" placeholder="Search Products"/>
                  <FaSearch className='absolute top-4 right-4'/>
                </div>
                <div className='flex items-center'>
                  <Flex className="flex gap-x-[41px]">
                    <Dropdown className="relative" dropRef={UserRef}>
                      <div className='flex items-center'>
                        <FaUserAlt />
                        <RxTriangleDown />
                      </div>

                      {UserDropdownShow &&(
                      <List className=' absolute top-8 right-0 w-[200px] bg-white text-sm text-primary  font-dm font-normal text-center border border-solid border-[#f0f0f0]' >
                        <ListItem className="px-5 py-4 duration-100 ease-in  hover:font-bold border-b border-solid border-[#f0f0f0] hover:bg-primary hover:text-white" ListInnerItem="My Account"/>
                        <ListItem className="px-5 py-4 duration-100 ease-in  hover:font-bold border-b border-solid border-[#f0f0f0] hover:bg-primary hover:text-white" ListInnerItem="Log Out"/>                      
                      </List>)
                    }
                    </Dropdown>
                    
                    <div>
                      <HiShoppingCart/>
                    </div>
                  </Flex>
                </div>
            </Flex>
        </Container>
    </div>
  )
}

export default Header