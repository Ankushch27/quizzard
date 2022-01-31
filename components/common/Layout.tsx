import Head from 'next/head'
import React, { ReactNode } from 'react'
import Avatar from './Avatar'

interface LayoutProps {
  children?: ReactNode
  title?: string
  avatarUrl?: string | null
}

const Layout = ({ children, title = 'Quizzard', avatarUrl }: LayoutProps) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="icon" type="image/png" href="favicon.png" />
    </Head>
    <header className="fixed w-full flex px-4 py-2 justify-end">
      <Avatar src={avatarUrl} />
    </header>
      {children}
    <footer>
      <hr />
      <span>I'm here to stay (Footer)</span>
    </footer>
  </div>
)

export default Layout
