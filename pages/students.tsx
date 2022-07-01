import React, { useEffect, useState } from 'react'
import { InferGetStaticPropsType } from 'next'
import Avatar from '../components/Avatar'
import Navbar from '../components/Navbar'



export type Student = {
  name: string,
  image: string,
  id: string
}

export const getStaticProps = async () => {
    const res = await fetch("http://localhost:3000/api/students")
    console.log(res);
    const students: Student[]= await res.json()
    return { 
      props: { students }
    }
  }
  
type Props = InferGetStaticPropsType<typeof getStaticProps>
const Students = ({students}: Props) => {
 
  return (
    <>
      <Navbar/>
      <section style={{display: "flex", width: "1000px", flexWrap: "wrap",  margin:"0 auto"}}>
          {students?.map(data => <Avatar student={data} key={data.id} />)}
      </section>
    </>
  )
}

export default Students