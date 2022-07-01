import type { NextApiRequest, NextApiResponse } from 'next'
import { users } from '../../../data'

type Student = {
  name: string,
  image: string,
  id: string
}
const handler = async (req: NextApiRequest, res: NextApiResponse<Student[]>) => {
  const response = await fetch("https://62b3a9264f851f87f45dfb80.mockapi.io/api/example/info")
  const students: Student[] = await response.json()
  res.status(200).json(students) 
}

export default handler