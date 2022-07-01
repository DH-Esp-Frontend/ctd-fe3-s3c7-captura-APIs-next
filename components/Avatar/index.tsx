import Image from 'next/image'
import React, { FC } from 'react'
import { Student } from '../../pages/students'


type Props = {
    student: Student
}

const Avatar: FC<Props> = ({student}) => {
  return (
    <div style={{margin: "30px"}} >
        <h2>{student.name}</h2>
        <Image src={student.image} alt="profile" height={100} width={100}  />
    </div>
  )
}

export default Avatar