import axios from 'axios'
import { UserInterface } from 'interfaces'
import React from 'react'
import useSWR, { Fetcher } from 'swr'
import User from './UserItem'

const getUsers: Fetcher<UserInterface[], string> = async (url) => {
  const { data } = await axios.get(url)
  return data
}

const UsersList = () => {
  const { data: users } = useSWR('/api/users', getUsers)
  // console.log(users)
  return (
    <div className="mt-16">
      {users?.map((user) => (
        <User key={user._id} user={user} />
      ))}
    </div>
  )
}

export default UsersList
