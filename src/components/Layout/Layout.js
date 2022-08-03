import React from 'react'
import { Footer } from '../Footer'
import Navigation from '../Navigation'
import SocialLinks from '../SocialLinks'

const Layout = (props) => {
  return (
    <div>
      <SocialLinks />
      <Navigation />
      <main>{props.children}</main>
      <Footer />
    </div>
  )
}

export default Layout
