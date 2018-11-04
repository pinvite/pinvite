import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import cloudinary from '../utils/cloudinary'

const InvitePreviewPage = () => {
  const dummyImageUrl = cloudinary.url(
    "pinvite-background1.png",
    {
      transformation: [
        {
          width: 1200,
          height: 300,
          y: 30,
          gravity: "north",
          overlay: {
            font_family: "NotoSansJP-Black.otf",
            font_size: 70, 
            text_align: "center",
            text: "%E9%AD%9A%E3%81%AE%E6%8D%8C%E3%81%8D%E6%96%B9%E3%82%92%E6%95%99%E3%81%88%E3%81%A6%E3%81%8F%E3%82%8C%E3%82%8B%E4%BA%BAbosyu.me%21%21"
          },
          crop: "fit"
        },
    ]
  }
  )

  return(
    <Layout>
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <img src={dummyImageUrl} />
      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  )
}

export default InvitePreviewPage
