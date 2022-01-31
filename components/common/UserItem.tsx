import { UserInterface } from 'interfaces'
import React from 'react'
import Avatar from './Avatar'

type UserProps = {
  user: UserInterface
}

const UserItem = ({ user }: UserProps) => (
  <div className="flex gap-2 px-3 py-2">
    <Avatar src={user.image} height={25} width={25} />
    <div className="">{user.name}</div>
  </div>
)

export default UserItem
