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
        <Header></Header>
        <LeftPanel></LeftPanel>
        <BodyContentSection></BodyContentSection>
        <RightPanel></RightPanel>
        <Footer></Footer>
      </div>
    )
  }
}

export default Layout