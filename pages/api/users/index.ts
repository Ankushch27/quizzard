import clientPromise from 'db/mongodb'
import { NextApiRequest, NextApiResponse } from 'next'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const client = await clientPromise

  try {
    const users = await client.db().collection('users').find({}).toArray()
    res.status(200).json(users)
  } catch (error: any) {
    res.status(422).json({ error })
  }
}
