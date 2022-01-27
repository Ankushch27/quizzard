import { signIn, signOut, useSession } from 'next-auth/react'
import Layout from '../components/Layout'

const IndexPage = () => {
  const { data: session, status } = useSession()
  console.log(session, status)

  return (
    <Layout avatarUrl={session && session.user?.image}>
      <div className="min-h-screen flex flex-col justify-center items-center gap-4">
        <h1 className="text-5xl">Welcome, {session ? session.user?.name : 'Guest'}</h1>
        {session ? (
          <button
            className="px-4 py-1 rounded bg-blue-600 text-white"
            onClick={() => signOut({ redirect: false })}>
            Sign out
          </button>
        ) : (
          <button
            className="px-4 py-1 rounded bg-blue-600 text-white"
            onClick={() => signIn('google')}>
            Sign In with Google
          </button>
        )}
      </div>
    </Layout>
  )
}

export default IndexPage
