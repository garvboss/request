import axios from 'axios'

import { getHeadersAndParams } from '../utils/common-utils'

export const getData = async (formData, queryData, headerData, jsonText) => {
    const apiType = formData.type;
    const apiURL = formData.url;
    const apiHeaders = getHeadersAndParams(headerData);
    const apiParams = getHeadersAndParams(queryData);

    try {
        return await axios({
            type: apiType,
            url: apiURL,
            body: jsonText,
            headers: apiHeaders,
            params: apiParams
        })

    } 
    catch (error) {
        console.log('Error while calling getData API call', error);
        return 'error';
    }
}