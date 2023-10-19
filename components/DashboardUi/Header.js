import React from 'react'
import Router from 'next/router'
import {MdLogout} from 'react-icons/md'
import {Avatar, Chip} from "@nextui-org/react";
import {Tabs, Tab, Card, CardBody, CardHeader} from "@nextui-org/react";
import { Button } from '@nextui-org/react';
import {BsCart4 , BsGenderMale , BsGenderFemale} from 'react-icons/bs'
const Header = () => {

    const headerMap = {
        "/":"Dashboard",
        "/foodnutrition":"Food & Nutrition",
        "/help":"Help",
        "/sleep":"Sleep",
        "/excercise":"Excercise & Yoga",
        "/mentalhealth":"Mental Health"
    }
  return (
    <>
   
    <div className='flex justify-end '>
   
   
   
  

    <div className='flex justify-end gap-4'>  
    <Button color="default">
    <BsCart4 />
  </Button>
    <Avatar isBordered color="primary" src="https://i.pravatar.cc/150?u=a04258a2462d826712d" />
    </div>

    </div>


    <span className='text-2xl font-bold'>Explore  </span>
    <div className='flex justify-center gap-4'>
    <Button>All</Button>
    <Button><BsGenderMale />Men</Button>
    <Button><BsGenderFemale />Women</Button>
    </div>
    
   
   

</>
    
  )
}

export default Header
