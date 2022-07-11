import type { NextApiRequest, NextApiResponse } from 'next'

export type Student = {
  name: string,
  avatar: string,
  quote: string,
  id: string
}
const handler = async (req: NextApiRequest, res: NextApiResponse<Student[]>) => {
  const response = await fetch("https://62b3a9264f851f87f45dfb80.mockapi.io/api/example/data")
  const students: Student[] = await response.json()
  res.status(200).json(students) 
}

export default handler