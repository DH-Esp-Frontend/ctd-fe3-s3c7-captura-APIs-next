import React, { useEffect, useState } from 'react'
import { InferGetStaticPropsType } from 'next'
import Avatar from '../components/Avatar'
import Navbar from '../components/Navbar'


export type DBStudent = {
  email: string,
  password: string,
  role: "Student" | "Profesor"
}

export const getStaticProps = async () => {
    const res = await fetch("http://localhost:3000/api/students")
    console.log(res);
    const students: DBStudent[]= await res.json()
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
          {students?.map(data => <Avatar student={data} key={Math.random()} />)}
      </section>
    </>
  )
}

export default Students