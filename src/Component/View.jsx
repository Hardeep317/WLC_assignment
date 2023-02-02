
import React, { useEffect, useState } from 'react';
import useDrivePicker from 'react-google-drive-picker';
import { Box, Button, Stack, Text } from '@chakra-ui/react';
import "../main.css"
import { Link } from 'react-router-dom';
import { keyToken } from './Token';

export default function Upload() {
    const [openPicker, data, authResponse] = useDrivePicker();
    const [show, setShow] = useState(false);
  const handleOpenPicker = () => {
    openPicker({
      clientId:"567856497344-kiudhrklknb8o1tlceqpmn2r2tjaqcci.apps.googleusercontent.com",
      developerKey:"AIzaSyCTISElsc7GIiyx6mt6yBUSkxloZvofg0E",
      viewId:"DOCS",
      token:keyToken,
      showUploadView:true,
      showUploadFolders:true,
      supportDrives:true,
      multiselect:true,
    })
    setShow(true);
  }

  useEffect(() => {
    if(data){
      data.docs.map((i) => console.log(i))
    }
  },[data])
  return (
    <Box textAlign={"center"}>
        <Text className='h1'>Upload Your Files From Here</Text>
     <Button className='uploadBtn' onClick={() => handleOpenPicker()}>View File</Button>
     <Link  to={"/"}><Button className='gotoHome'>Go to Home</Button></Link>
     {show && <Text mt={"40px"}>hebebgd.png</Text>}
     {show && <Text mt={"30px"}><a href='https://drive.google.com/file/d/1yD33h9tSCMEEzTQnc4VqgG-vzykvvdAY/view?usp=share_link'>https://drive.google.com/file/d/1yD33h9tSCMEEzTQnc4VqgG-vzykvvdAY/view?usp=share_link</a> </Text>}
     <Text mt={"300px"}><a className="anchor_tag" href="https://drive.google.com/drive/u/0/my-drive"> Go to Your Drive</a></Text>
    </Box>
  )
}
