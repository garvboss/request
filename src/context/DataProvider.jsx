import React, { createContext, useState } from 'react'

export const DataContext = createContext(null);


const DataProvider = ( {children} ) => {

    const [formData, setFormData] = useState({ url: '', type: 'POST' })
    const [queryData, setQueryData] = useState([]);
    const [headerData, setHeaderData] = useState([]);
    const [jsonText, setJsonText] = useState("");

    return (
        <DataContext.Provider value={{
            formData,
            setFormData,
            queryData,
            setQueryData, 
            headerData,
            setHeaderData,
            jsonText,
            setJsonText
        }}>
            {children}
        </DataContext.Provider>
    )
}

export default DataProvider;