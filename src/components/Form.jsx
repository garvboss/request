import { useContext } from 'react'

import { Box, Select, MenuItem, TextField, Button } from '@mui/material'
import { makeStyles } from '@mui/styles'

import { DataContext } from '../context/DataProvider'

const useStyles = makeStyles({
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    select: {
        width: 150,
        height: 40
    },
    textfield: {
        width: '100%',
    },
    button: {
        width: 100,
        height: 40,
        marginLeft: [5, '!important']
    }
})

const Form = ( {onSendClick} ) => {
    const classes = useStyles();
    const { formData, setFormData } = useContext(DataContext);

    const handleChange = (e) => {
        setFormData( {...formData, type: e.target.value} )
    }


    const onURLChange = (e) => {
        setFormData( {...formData, url: e.target.value} )
    }

    return (
        <Box className={classes.container}>
            <Select
                value = {formData.type}
                className={classes.select}
                label="POST"
                onChange={ (e) => handleChange(e) }
            >
                <MenuItem value={'POST'}>POST</MenuItem>
                <MenuItem value={'GET'}>GET</MenuItem>
            </Select>
            <TextField 
                className={classes.textfield} 
                size="small" 
                onChange = { (e) => onURLChange(e) }
            />
            <Button 
                className={classes.button} 
                variant="contained"
                onClick={() => onSendClick()}
            >
                Send
            </Button>
        </Box>
    );
}

export default Form;