/**
 * @author Aldi Mustafri
 * @email aldimustafri@live.com
 * @create date 2020-04-23 00:14:36
 * @modify date 2020-04-23 00:14:36
 * @desc [description]
 */
import { red } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#0000ff',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#eee',
    },
  },
});

export default theme;
