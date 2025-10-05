import {Box, Heading, Text, TextField, Button} from '@radix-ui/themes';
import { useRef } from 'react';
import { apiClient } from '../../../Shared/services/api-client';
import { useState } from 'react';

export const UrlShort=()=>{
    const url=useRef();
    const [shortURL, setShortURL]=useState();
    const takeUrl=async ()=>{
        const URL=url.current.value;
        try{
        const response=await apiClient.post('/short-url', {bigurl : URL});
        if(response && response.data.shorturl){
            setShortURL(response.data.shorturl);
            console.log('Small URL ', response.data.shorturl)
        }else{
            console.log('Some Problem in Short URL');
        }
    }catch{
        console.log('Some Problem in Short URL');
    }
        console.log("Get the url", URL);
    }
    return (
        <Box width="400px" mx="auto" mt="6px" height="64px">
            <Heading align="center">
                Url Shortener
            </Heading>
                <Box>
                    <Text as="label" size="3" weight="medium">Long URL</Text>
                    <TextField.Root ref={url} type='text' placeholder='Type url Here...'/>
                    <Button onClick={takeUrl} variant='solid' type='button' mt="3" size="3">Short URL</Button>
                    <Box  mt="5" size="6"><a href={shortURL}>{shortURL}</a></Box>
                </Box>
        </Box>
    )
}