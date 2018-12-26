import React from 'react'
import Helmet from 'react-helmet'
import {OgpValues} from '../../domain/OgpValues'

const OgpMetaTags: React.SFC<OgpValues> = (props) =>
  <Helmet
    meta={[
      { name: 'twitter:card',    content: props.twitterCard },
      { name: 'twitter:site',    content: props.twitterSite },
      { name: 'twitter:creator', content: props.twitterCreator },
      { name: 'og:url',          content: props.ogURL },
      { name: 'og:title',        content: props.ogTitle },
      { name: 'og:description',  content: props.ogDescription },
      { name: 'og:image',        content: props.ogImage },
      { name: 'title',           content: props.ogTitle }
    ]}
  />


export default OgpMetaTags