import React, { Component } from 'react'
import BodyContentSection from '../bodysection'
import Footer from '../Footer'
import Header from '../Header'
import LeftPanel from '../LeftPanel'
import RightPanel from '../RightPanel'

class Layout extends Component {
  render() {
    return (
      <div>
        <Header />
        <LeftPanel />
        <BodyContentSection />
        <RightPanel />
        <Footer footerValue="© 2022 Rishant Gupta, LLC. All rights reserved." />
      </div>
    )
  }
}

export default Layout