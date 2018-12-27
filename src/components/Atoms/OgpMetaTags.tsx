import React from 'react'
import Helmet from 'react-helmet'
import { OgpValues } from '../../domain/OgpValues'

const OgpMetaTags: React.SFC<OgpValues> = props => (
  <Helmet
    meta={[
      { name: 'twitter:card', content: props.twitterCard },
      { name: 'twitter:site', content: props.twitterSite },
      { name: 'twitter:creator', content: props.twitterCreator },
      { property: 'og:url', content: props.ogURL },
      { property: 'og:title', content: props.ogTitle },
      { property: 'og:description', content: props.ogDescription },
      { property: 'og:image', content: props.ogImage },
      { name: 'title', content: props.ogTitle },
    ]}
  />
)

export default OgpMetaTags
