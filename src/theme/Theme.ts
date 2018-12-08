import { createMuiTheme } from '@material-ui/core/styles';
import orange from '@material-ui/core/colors/orange';
import yellow from '@material-ui/core/colors/yellow';

const NotoSansJP = 'Noto Sans JP, sans-serif'

// We import Noto Sans JP as follows, which makes only fontWeight = 400 available
// <link href="https://fonts.googleapis.com/css?family=Noto+Sans+JP" rel="stylesheet" />
const fontWeightRegular = 400

const Theme = createMuiTheme({
  palette: {
    primary: {
      main: orange[700],
      light: orange[500],
      dark: orange[900],
    },
    secondary: {
      main: yellow[400],
      light: yellow[200],
      dark: yellow[500],
    },
  },
  // Check default values at https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/styles/createTypography.js
  typography: {
    useNextVariants: true,
    fontFamily: NotoSansJP,

    // See TypographyStyle for possible options:
    // 'fontFamily' | 'fontSize' | 'fontWeight' | 'color' | 'letterSpacing' | 'lineHeight' | 'textTransform'
    h1: { fontFamily: NotoSansJP, fontWeight: fontWeightRegular },
    h2: { fontFamily: NotoSansJP, fontWeight: fontWeightRegular },
    h3: { fontFamily: NotoSansJP, fontWeight: fontWeightRegular },
    h4: { fontFamily: NotoSansJP, fontWeight: fontWeightRegular },
    h5: { fontFamily: NotoSansJP, fontWeight: fontWeightRegular },
    h6: { fontFamily: NotoSansJP, fontWeight: fontWeightRegular },
    subtitle1: { fontFamily: NotoSansJP, fontWeight: fontWeightRegular },
    subtitle2: { fontFamily: NotoSansJP, fontWeight: fontWeightRegular },
    body1: { fontFamily: NotoSansJP, fontWeight: fontWeightRegular },
    body2: { fontFamily: NotoSansJP, fontWeight: fontWeightRegular },
    button: { fontFamily: NotoSansJP, fontWeight: fontWeightRegular },
    caption: { fontFamily: NotoSansJP, fontWeight: fontWeightRegular },
    overline: { fontFamily: NotoSansJP, fontWeight: fontWeightRegular },
  }
});

export default Theme
