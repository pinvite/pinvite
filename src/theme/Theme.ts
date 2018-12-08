import { createMuiTheme } from '@material-ui/core/styles';
import orange from '@material-ui/core/colors/orange';
import yellow from '@material-ui/core/colors/yellow';

const Theme = createMuiTheme({
  palette: {
    primary: {
      main:  orange[700],
      light: orange[500],
      dark:  orange[900],
    },
    secondary: {
      main:  yellow[400],
      light: yellow[200],
      dark:  yellow[500],
    },
  },
});

export default Theme
