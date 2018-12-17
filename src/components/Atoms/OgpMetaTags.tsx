import React from 'react'
import Helmet from 'react-helmet'

export interface OgpMetaTagsProps {
  twitterCard: string
  twitterSite: string
  twitterCreator: string
  ogUrl: string
  ogTitle: string
  ogDescription: string
  ogImage: string
}

const OgpMetaTags: React.SFC<OgpMetaTagsProps> = (props) =>
  <Helmet
    meta={[
      { name: 'twitter:card',    content: props.twitterCard },
      { name: 'twitter:site',    content: props.twitterSite },
      { name: 'twitter:creator', content: props.twitterCreator },
      { name: 'og:url',          content: props.ogUrl },
      { name: 'og:title',        content: props.ogTitle },
      { name: 'og:description',  content: props.ogDescription },
      { name: 'og:image',        content: props.ogImage },
      { name: 'title',           content: props.ogTitle }
    ]}
  />


export default OgpMetaTags