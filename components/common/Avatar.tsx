import Image from 'next/image'
import dummyAvatar from 'public/avatar.jpg'

interface AvatarProps {
  src?: string | null
  height?: number
  width?: number
}

const Avatar = ({ src, height = 40, width = 40 }: AvatarProps) => {
  return (
    <Image
      src={src || dummyAvatar}
      className="rounded-full"
      height={height}
      width={width}
      objectFit="contain"
    />
  )
}

export default Avatar
