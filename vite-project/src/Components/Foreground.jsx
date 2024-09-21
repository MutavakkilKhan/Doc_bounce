import React,{useState}from 'react'
import Card from './card';
import  { useRef } from 'react'



const Foreground = () => {
  const ref = useRef(null);
  const data =[
    {
     desc:"This is the data which is changed by the user and we are making our first project on react",
     filesize:'9MB',
      close:true,
      tag:{isopen:true,tagtitle:"Upload",tagcolor:"green"}

    },
    {
      desc:"This is the data which is changed by the user and we are making our first project on react",
      filesize:'9MB',
       close:true,
       tag:{isopen:true,tagtitle:"Download now",tagcolor:"blue"}
 
     },
     {
      desc:"This is the data which is changed by the user and we are making our first project on react",
      filesize:'9MB',
       close:true,
       tag:{isopen:false,tagtitle:"Download now",tagcolor:"green"}
 
     },
     {
      desc:"This is the data which is changed by the user and we are making our first project on react",
      filesize:'9MB',
       close:true,
       tag:{isopen:true,tagtitle:"Download now",tagcolor:"blue"}
 
     },
     {
      desc:"This is the data which is changed by the user and we are making our first project on react",
      filesize:'9MB',
       close:true,
       tag:{isopen:true,tagtitle:"Upload",tagcolor:"green"}
 
     },
  ];
  return (
   
   <div ref={ref} className='fixed z-[3] w-full h-full flex gap-5 flex-wrap p-5'>
      {data.map((item,index)=>(
        <Card data={item} reference={ref}/>
      ))}
      </div>
  
  );
}

export default Foreground
