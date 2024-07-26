import { useContext } from 'react'

import { Box, Tabs, Tab } from '@mui/material'
import { useState } from 'react'

import { makeStyles } from '@mui/styles'

import CreateTable from './CreateTable.jsx'
import CreateJsonText from './CreateJsonText.jsx'

import { DataContext } from '../context/DataProvider.jsx'

const useStyles = makeStyles({
    container: {
        marginTop: 20
    }
})

const SelectTab = () => {
    const classes = useStyles();
    const [value, setValue] = useState(0);

    const { queryData, headerData, setQueryData, setHeaderData } = useContext(DataContext);

    const handleChange = (event, newValue) => {
        setValue(newValue)
    }

    return (
        <Box className={classes.container}>
            
            <Tabs value={value} onChange={handleChange} 
                TabIndicatorProps = {{ sx: { height: 4, bottom: 2 } }}
                aria-label="basic tabs example">
                <Tab label="Params" />
                <Tab label="Headers" />
                <Tab label="Body" />
            </Tabs>
          
            <Box
            role="tabpanel"
            hidden={value !== 0}
            id={`simple-tabpanel-${0}`}
            aria-labelledby={`simple-tab-${0}`}
            >
                <CreateTable text={'Query Params'} data={queryData} setData={setQueryData} />
            </Box>

            <Box
            role="tabpanel"
            hidden={value !== 1}
            id={`simple-tabpanel-${1}`}
            aria-labelledby={`simple-tab-${1}`}
            >
                <CreateTable text={'Headers'} data={headerData} setData={setHeaderData} />
            </Box>

            <Box
            role="tabpanel"
            hidden={value !== 2}
            id={`simple-tabpanel-${2}`}
            aria-labelledby={`simple-tab-${2}`}
            >
                <CreateJsonText text={'Body'} />
            </Box>
        </Box>

        
    );
}

export default SelectTab;