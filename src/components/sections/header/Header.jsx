import React, { useEffect, useRef, useState } from 'react'
import Container from '../../layers/Container'
import Flex from '../../layers/Flex'
import List from '../../layers/List'
import ListItem from '../../layers/ListItem'
import Dropdown from '../../layers/Dropdown'
import Image from "../../layers/Image"
import { FaBars, FaSearch, FaUserAlt } from 'react-icons/fa'
import Searchbar from '../../layers/Searchbar'
import { RxTriangleDown } from 'react-icons/rx'
import { HiShoppingCart } from 'react-icons/hi'
import { ImCross } from 'react-icons/im'
import { Link } from 'react-router-dom'




const Header = () => {
  
  let [CategoryDropdownShow, setCategoryDropdownShow] =useState(false);       
  let [UserDropdownShow, setUserDropdownShow] =useState(false);       
  let [CartDropdownShow, setCartDropdownShow] =useState(false);   
      
  let Categoryref= useRef();
  let UserRef=useRef();
  let CartRef=useRef();
  
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
      
      if(CartRef.current.contains(e.target)){
        setCartDropdownShow(true);
      }
      else{
        setCartDropdownShow(false);
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
                      <FaBars /> <span className="hidden lg:inline-block">Shop by Category</span>
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
                <div className='relative w-auto lg:w-[600px]'>
                  <Searchbar className="w-full px-5 py-4 placeholder:text-[#C4C4C4] font-normal text-sm font-dm " placeholder="Search Products"/>
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
                      
                      <Dropdown className="relative" dropRef={CartRef}>
                        <div className='flex items-center'>
                          <HiShoppingCart className='text-xl'/>
                        </div>

                        {CartDropdownShow &&(
                          <div className='w-[360px] absolute top-10 right-0 border border-solid border-[#F0F0F0]'>
                            <div className=" bg-[#F5F5F5]  p-5">
                              <Flex className="flex justify-between">
                                <div>
                                  <Image imgsrc="./public/cartimage.png"alt="cartimage.png"/>
                                </div>
                                <div className='flex flex-col justify-center'>
                                  <h3 className='mt-5 text-sm font-bold font-dm text-primary'>
                                    Black Smart Watch 
                                  </h3>
                                  <p className='mt-3 text-sm font-bold font-dm text-primary'>
                                    $44.00
                                  </p>
                                </div>
                                <div className='flex items-center justify-end'>
                                  <ImCross className='text-sm'/>
                                </div>
                              </Flex>
                            </div>
                              
                            <div className='p-5 bg-white'>
                              <h4 className='text-base font-dm font-regular text-[#767676]'>
                                Subtotal:<span className='font-bold text-primary'>$44.00</span> 
                              </h4>
                              <Link to="#" className='inline-block px-10 py-4 text-sm font-bold border border-solid font-dm mt-[13px] mr-5'>
                                View Cart
                              </Link>
                              <Link to="#" className='inline-block px-10 py-4 text-sm font-bold border border-solid font-dm mt-[13px] bg-primary text-white'>
                                Checkout
                              </Link>
                            </div>
                          </div>
                        )}
                      </Dropdown>
                    </div>
                  </Flex>
                </div> 
            </Flex>
        </Container>
    </div>
  )
}

export default Header