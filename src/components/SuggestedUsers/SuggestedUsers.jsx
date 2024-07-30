import React from 'react'
import { VStack, Text, Flex, Box } from '@chakra-ui/react'
import SuggestedHeader from './SuggestedHeader'
import SuggestedUser from './SuggestedUser'
import useGetSuggestedUsers from '../../hooks/useGetSuggestedUsers'
const SuggestedUsers = () => {
    const {isLoading, suggestedUsers} = useGetSuggestedUsers()

    if (isLoading) return <Text>Loading...</Text>
  return (
    <VStack gap={4} py={8} px={6}>
        <SuggestedHeader />

        <Flex alignItems={"center"} justifyContent={"space-between"} w={"full"}>
            <Text fontSize={12} fontWeight={"bold"} color={"gray.500"}>
                Suggested for you
            </Text>

            <Text fontSize={12} fontWeight={"bold"} color={"white"}>
               
            </Text>
        </Flex>

        {suggestedUsers.map((user) => (
            <SuggestedUser key={user.id} user={user} />
        ))}

        <Box
            fontSize={12}
            mt={5}
            color={"gray.500"}
            cursor={"pointer"}
            alignSelf={"start"}
        >
            Built By Lucas C Summer 2024
        </Box>
    </VStack>
  )
}

export default SuggestedUsers