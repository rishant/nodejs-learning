import React, { useState } from 'react'

function Footer(props) {
  const [footerValue, setFooterValue] = useState("");
  return (
    <div>{props.footerValue ? props.footerValue : footerValue}</div>
  )
}

export default Footer;