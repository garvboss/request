import { Box, IconButton } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { useTheme } from '@mui/material/styles';

import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    flexBox: {
        display: 'flex',
        alignItems: 'center',
    },
    logo: {
        width: 100,
    },
    text: {
        fontSize: 36,
        color: theme.palette.mode === 'dark' ? '#fff' : '#09145c',
        fontFamily: '"monospace"',
        letterSpacing: 1.2,
    }
}))

const Header = ({ toggleDarkMode }) => {
    const classes = useStyles();
    const theme = useTheme();
    return (
        <Box className={classes.container}>
            <div className={classes.flexBox}>
                <img className={classes.logo} src="/logo.png" alt="logo" />
                <div className={classes.text}>ReqQuest</div>
            </div>
            <IconButton onClick={toggleDarkMode} sx={{ p: 3 }}>
                {theme.palette.mode === 'dark' ? (
                    <Brightness7Icon sx={{ fontSize: 40 }} />
                ) : (
                    <Brightness4Icon sx={{ fontSize: 40 }} />
                )}
            </IconButton>
        </Box>
    )
}

export default Header;