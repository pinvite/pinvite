import orange from '@material-ui/core/colors/orange'
import yellow from '@material-ui/core/colors/yellow'
import { createMuiTheme } from '@material-ui/core/styles'

const NotoSansJP = 'Noto Sans JP, sans-serif'

// We import Noto Sans JP as follows, which makes only fontWeight = 400 available
// <link href="https://fonts.googleapis.com/css?family=Noto+Sans+JP" rel="stylesheet" />
const fontWeightRegular = 400

const MuiTheme = createMuiTheme({
  palette: {
    // You can enter the main color here https://material-ui.com/style/color/#color-tool
    // and get the associated dark and light colors
    primary: {
      dark: '#000027',
      light: '#333360',
      main: '#010039',
      contrastText: '#FFFFFF'
    },
    secondary: {
      dark: '#b29500',
      light: '#ffde33',
      main: '#FFD600',
    },
    background: {
      default: '#13194F',
      paper: '#000000',
    },
    text: {
      primary: '#FFFFFF'
    }
  },
  spacing: {
    unit: 16
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

export default MuiTheme
