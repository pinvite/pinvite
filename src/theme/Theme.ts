import orange from '@material-ui/core/colors/orange'
import yellow from '@material-ui/core/colors/yellow'
import { createMuiTheme } from '@material-ui/core/styles'

const NotoSansJP = 'Noto Sans JP, sans-serif'

// We import Noto Sans JP as follows, which makes only fontWeight = 400 available
// <link href="https://fonts.googleapis.com/css?family=Noto+Sans+JP" rel="stylesheet" />
const fontWeightRegular = 400

const Theme = createMuiTheme({
  palette: {
    primary: {
      dark: orange[900],
      light: orange[500],
      main: orange[700],
    },
    secondary: {
      dark: yellow[500],
      light: yellow[200],
      main: yellow[400],
    },
  },
  // Check default values at
  // https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/styles/createTypography.js
  typography: {
    fontFamily: NotoSansJP,
    useNextVariants: true,

    // See TypographyStyle for possible options:
    // 'fontFamily' | 'fontSize' | 'fontWeight' | 'color' | 'letterSpacing' | 'lineHeight' | 'textTransform'
    body1: { fontFamily: NotoSansJP, fontWeight: fontWeightRegular },
    body2: { fontFamily: NotoSansJP, fontWeight: fontWeightRegular },
    button: { fontFamily: NotoSansJP, fontWeight: fontWeightRegular },
    caption: { fontFamily: NotoSansJP, fontWeight: fontWeightRegular },
    h1: { fontFamily: NotoSansJP, fontWeight: fontWeightRegular },
    h2: { fontFamily: NotoSansJP, fontWeight: fontWeightRegular },
    h3: { fontFamily: NotoSansJP, fontWeight: fontWeightRegular },
    h4: { fontFamily: NotoSansJP, fontWeight: fontWeightRegular },
    h5: { fontFamily: NotoSansJP, fontWeight: fontWeightRegular },
    h6: { fontFamily: NotoSansJP, fontWeight: fontWeightRegular },
    overline: { fontFamily: NotoSansJP, fontWeight: fontWeightRegular },
    subtitle1: { fontFamily: NotoSansJP, fontWeight: fontWeightRegular },
    subtitle2: { fontFamily: NotoSansJP, fontWeight: fontWeightRegular },
  },
})

export default Theme
