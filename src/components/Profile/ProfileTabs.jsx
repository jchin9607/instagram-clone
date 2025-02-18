import React from 'react'
import { Box, Flex, Text } from '@chakra-ui/react'

import { BsBookmark, BsGrid3X3, BsSuitHeart } from "react-icons/bs";

const ProfileTabs = () => {
  return (
    <Flex
    w={'full'}
    justifyContent={'center'}
    gap={{base: 4, sm: 10}}
    textTransform={'uppercase'}
    fontWeight={'bold'}
    
    >
        {/* <Flex borderTop={"1px solid white"} p={3}alignItems={'center'} gap={1} cursor={'pointer'}>
            <Box fontSize={20}>
                <BsGrid3X3 />

                
            </Box>
            <Text fontSize={12}  display={{base: "none", sm: "block"}}>Posts</Text>
        </Flex>

        <Flex  alignItems={'center'} gap={1} cursor={'pointer'} p={3}>
            <Box fontSize={20}>
                <BsBookmark />

                
            </Box>
            <Text fontSize={12} display={{base: "none", sm: "block"}}>Saved</Text>
        </Flex>

        <Flex  alignItems={'center'} gap={1} cursor={'pointer'} p={3}>
            <Box fontSize={20}>
                <BsSuitHeart fontWeight={'bold'} />

                
            </Box>
            <Text fontSize={12} display={{base: "none", sm: "block"}}>Liked</Text>
        </Flex> */}
    </Flex>
  )
}

export default ProfileTabs