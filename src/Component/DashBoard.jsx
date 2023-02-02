import { Box, Button, Spacer, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

export default function DashBoard() {
  return (
    <Box>
        <Text className="h1">Select the Operation you want</Text>
      <Stack className='stack' direction="row">
        <Link className='button' to={"/upload"}><Button>Upload</Button></Link>
        <Spacer />
        <Link className='button' to={"/view"}><Button>View</Button></Link>
      </Stack>
    </Box>
  )
}
