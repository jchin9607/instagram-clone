import React from 'react'
import { Avatar, Box, Flex, VStack, Text, Button } from '@chakra-ui/react'
import useFollowerUser from '../../hooks/useFollowerUser'
import useAuthStore from '../../store/authStore'
import { Link } from 'react-router-dom'

const SuggestedUser = ({ user, setUser}) => {
   const { isFollowing, isUpdating, handleFollowUser } = useFollowerUser(user.uid)
   const authUser = useAuthStore((state) => state.user)

   const onFollowUser = async () => {
    await handleFollowUser()
    setUser({...user,
        followers: isFollowing ? user.followers.filter((uid) => uid !== authUser.uid) : [...user.followers, authUser.uid],
    })
   }
  return (
    <Flex justifyContent={"space-between"} alignItems={"center"} w={"full"}>
        <Flex>
            <Link to={`/${user.username}`}>
            <Avatar src={user.profilePicURL} size={"md"} /> 
            </Link>
            <VStack spacing={2}>
            <Link to={`/${user.username}`}>
                <Box fontSize={12} fontWeight={"bold"} alignSelf={"start"}>
                    {user.fullName}
                </Box>
            </Link>

                <Box fontSize={12} color={"gray.500"} alignSelf={"start"}>
                    {user.followers.length} followers
                </Box>
            </VStack>
        </Flex>
        {authUser.uid !== user.uid && (
            <Button
            fontSize={13}
            bg={"transparent"}
            color={"blue.500"}
            cursor={"pointer"}
            _hover={{color: "white" }}
            fontWeight={"medium"}
            onClick={onFollowUser}
            isLoading={isUpdating}
            >
                {isFollowing ? "Unfollow" : "Follow"}
            </Button>
        )}
    </Flex>
  )
}

export default SuggestedUser