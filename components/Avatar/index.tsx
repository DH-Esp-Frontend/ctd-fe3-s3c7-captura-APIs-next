import React, { FC } from 'react'
import { DBStudent } from '../../pages/students'


type Props = {
    student: DBStudent
}

const Avatar: FC<Props> = ({student}) => {
  return (
    <div style={{margin: "30px"}} >
        <h2>{student.email}</h2>
    </div>
  )
}

export default Avatar