import { useState } from 'react';
import { TableRow, TableCell, Checkbox, TextField } from '@mui/material'
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    tableCell: {
        border: '1px solid rgba(224,224,224,1)',
        borderCollapse: 'collapse',
        padding: ['7px 5px', '!important'],
    },
    checkbox: {
        padding: ['2px 5px', '!important']
    },
    textField: {
        width: '100%'
    }
})

const AddRow = ( { addRows, rowId, data, setData }) => {
    const classes = useStyles()
    const [checkCheckBox, setCheckCheckBox] = useState(false);

    const handleChange = (e) => {

        let result = data.filter(entry => entry.id === rowId)[0];
    
        if(!checkCheckBox)
        {
            setCheckCheckBox(true);
            addRows(oldArr => [...oldArr, rowId]);
            result = { ...result, id: rowId, checked: true }
        }

        else
        {
            setCheckCheckBox(false);
            result = { ...result, id: rowId, checked: false }
        }

        let index = data.findIndex((value) => value.id === rowId);
        if (index === -1) {
            setData(oldArr => [...oldArr, result]);
        } else {
            const newArray = Object.assign([...data], {
                [index]: result
            });
            setData(newArray)    
        }
    }

    const onTextChange = (e) => {
        
        let result = data.filter(entry => entry.id === rowId)[0]
        result = { ...result, id: rowId, [e.target.name]: e.target.value }

        let index = data.findIndex((value) => value.id === rowId);

        if(index === -1)
        {
            setData(oldArr => [...oldArr, result]);
        }
        else
        {
            const newArr = Object.assign([...data], {
                [index]: result
            });
            setData(newArr);
        }
    }

    return (
        <TableRow>   
            <TableCell className={classes.tableCell}>
                <Checkbox 
                  checked={checkCheckBox}
                  size='large'
                  className={classes.checkbox}
                  onChange={ (e) => handleChange(e) }
                >
                </Checkbox>
            </TableCell>
            <TableCell className={classes.tableCell}>
                <TextField 
                    className={classes.textField}
                    inputProps={{ style: { height: 30, padding: '0 5px' } }}
                    onChange = { (e) => onTextChange(e) }
                    name = "key"
                />
            </TableCell>
            <TableCell className={classes.tableCell}>
                <TextField 
                    className={classes.textField}
                    inputProps={{ style: { height: 30, padding: '0 5px' } }}
                    onChange = { (e) => onTextChange(e) }
                    name = "value"
                />
            </TableCell>
        </TableRow>
    )
}

export default AddRow;