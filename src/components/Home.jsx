import { useContext, useState } from 'react';
import { DataContext } from '../context/DataProvider';

import Header from './Header'
import Form from './Form'
import SelectTab from './SelectTab'
import Response from './Response'
import ErrorScreen from './ErrorScreen'
import SnackBar from './SnackBar.jsx'
import { getData } from '../service/api.jsx'

import { checkParams } from '../utils/common-utils.jsx'

import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline, Box } from '@mui/material'
import { makeStyles } from '@mui/styles'


const useStyles = makeStyles({
    component: {
        width: '60%',
        margin: '20px auto 0 auto'
    }
})



const Home = () => {
    const classes = useStyles();

    const [darkMode, setDarkMode] = useState(false);
    const [error, setError] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');
    const [errorResponse, setErrorResponse] = useState(false);
    const [apiResponse, setApiResponse] = useState({});

    const { formData, queryData, headerData, jsonText } = useContext(DataContext);

    const onSendClick = async () => {
        if(!checkParams(formData, queryData, headerData, jsonText, setErrorMsg)) {
          setError(true);
          return false;
        }

        let response = await getData(formData, queryData, headerData, jsonText, setErrorMsg);
  
        if(response==='error') {
          setErrorResponse(true);
          return;
        }
        setErrorResponse(false);
        setApiResponse(response.data);
    }

    const theme = createTheme({
      palette: {
          mode: darkMode ? 'dark' : 'light',
      },
    });

    const toggleDarkMode = () => {
      setDarkMode(!darkMode);
    };

    return (
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Header toggleDarkMode={toggleDarkMode}/>
          <Box className={classes.component}>
            <Form onSendClick = {onSendClick} />
            <SelectTab />
            { errorResponse ? <ErrorScreen /> : <Response data={apiResponse} /> }
            {error && <SnackBar error={error} setError={setError} errorMsg={errorMsg} />}
          </Box>
        </ThemeProvider>
    )
}

export default Home;