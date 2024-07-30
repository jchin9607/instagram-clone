import { Flex, Container } from '@chakra-ui/react'
import { Box, Image, VStack } from '@chakra-ui/react'
import React from 'react'

import AuthForm from '../../components/AuthForm/AuthForm'

export const AuthPage = () => {
  return (
    <Flex minH={"100vh"} align={"center"} justify={"center"} px={4}>
        <Container maxW={"container.md"} padding={0}>
            <Flex justifyContent={"center"} align={"center"} gap={10}>
            {/* Left side */}
            <Box display={{base: "none", md: "block"}}>
                <Image src="/auth.png" h={650} />
            </Box>
            {/* Right side */}
            <VStack spacing={4} align={"stretch"}>
                <AuthForm />
                <Box textAlign={"center"}>
                    Get the App.
                </Box>
                <Flex gap={5} justifyContent={"center"}>
                    <Image src='/playstore.png' h={"10"}/>
                    <Image src='/microsoft.png' h={"10"}/>
                </Flex>
            </VStack>
            </Flex>
        </Container>
    </Flex>
  )
}

export default AuthPage
