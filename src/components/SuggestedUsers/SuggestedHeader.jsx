import { Avatar, Flex, VStack, Text, Link, Button } from '@chakra-ui/react'
import React from 'react'
import {Link as RouterLink} from 'react-router-dom'
import {useLogout} from '../../hooks/useLogout'
import useAuthStore from '../../store/authStore'



const SuggestedHeader = () => {
  const {handleLogout, isLoggingOut} = useLogout();
  const authUser = useAuthStore(state => state.user)

  if (!authUser) return null
  return (
    <Flex justifyContent={"space-between"} alignItems={"center"} w={"full"}>
        <Flex gap={2} alignItems={"center"}>
          <Link to={`${authUser.username}`} as={RouterLink}>
            <Avatar src={authUser.profilePicURL}/>
          </Link>
          <Link to={`${authUser.username}`} as={RouterLink}>
                <Text fontSize={12} fontWeight={"bold"}>
                    {authUser.username}
                </Text>
                </Link>
            
        </Flex>
        <Button
        size={"xs"}
        background={"transparent"}
        _hover={{background: "transparent"}}
        // as={RouterLink}
        // to="/auth"
        fontSize={14}
        fontWeight={"medium"}
        color={"blue.400"}
        // style={{ textDecoration: "none" }}
        onClick={handleLogout}
        isLoading={isLoggingOut}
        cursor={"pointer"}
        >
            Log Out
        </Button>
    </Flex>
  )
}

export default SuggestedHeader
