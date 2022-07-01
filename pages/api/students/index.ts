import type { NextApiRequest, NextApiResponse } from 'next'
import { users } from '../../../data'

type DBStudent = {
  email: string,
  password: string,
  role: "Student" | "Profesor"
}
const handler = async (req: NextApiRequest, res: NextApiResponse<DBStudent[]>) => {

  res.status(200).json(users.filter(user => user.role === "Student") )
}

export default handler