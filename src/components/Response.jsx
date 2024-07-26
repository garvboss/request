import { Typography, TextareaAutosize } from "@mui/material"

const textareaStyle = {
    width: '100%',
    padding: 10,
    background: `url('http://i.imgur.com/2cOaJ.png')`,
    backgroundAttachment: 'local',
    backgroundRepeat: 'no-repeat',
    paddingLeft: 35,
    paddingTop: 10,
    borderColor: '#ccc',
    color: '#777'
}

const Response = ( {data} ) => {
    let readableObj = ''

    const formatObject = (obj) => {
        let formatted = '{ \n';
        for (let key in obj) {
            formatted += (typeof obj[key] === 'string') ? `${key}: "${obj[key]}"` : `${key}: ${JSON.stringify(obj[key])}`;
            if (Object.keys(obj).pop() !== key) {
                formatted += ',\n';
            }
        }
        formatted += '\n}';
        return formatted;
    };

    // Check if data is an array
    if (Array.isArray(data)) {
        readableObj += '[\n';
        data.forEach((item, index) => {
            readableObj += formatObject(item);
            if (index < data.length - 1) {
                readableObj += ',\n';
            }
        });
        readableObj += '\n]';
    } 
    // If data is a single object
    else {
        readableObj = formatObject(data);
    }

    return (
        <>
            <Typography mt={2} mb={2}>Response</Typography>
            <TextareaAutosize 
                minRows={5}
                maxRows={8}
                style={textareaStyle}
                disabled = 'disabled'
                value = {readableObj}
            />
        </>
    )
}


export default Response;