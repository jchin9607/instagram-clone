import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Box, VStack, Image, Input, Button, Text, Flex } from '@chakra-ui/react'
import Signup from './Signup'
import Login from './Login'
import GoogleAuth from './GoogleAuth'
const AuthForm = () => {
    const [isLogin, setIsLogin] = useState(true);
    
    

    

  return (
    <>
        <Box border={"1px solid grey"} borderRadius={4} padding={5}>
            <VStack spacing={4}>
                <Image src='/logo.png' h={24} cursor={"pointer"}/>
                

                

                {isLogin ? <Login /> : <Signup />}
                <Flex alignItems={"center"} justifyContent={"center"} my={4} gap={1} w={"full"} >
                    <Box flex={1} h={"1px"} bg={"gray.400"} />
                    <Text mx={1}  color={"white"}>OR</Text>
                    <Box flex={1} h={"1px"} bg={"gray.400"} />
                </Flex>

                <GoogleAuth prefix={isLogin ? "Login" : "Register"}/>
            </VStack>
        </Box>

        <Box border={"1px solid grey"} borderRadius={4} padding={5}>
            <Flex justifyContent={"center"} alignItems={"center"}>
                <Box mx={2} fontSize={14}>
                    {isLogin ? "Don't have an account?" : "Already have an account?"}
                </Box>
                <Box onClick={() => setIsLogin(!isLogin)} color={"blue.500"} cursor={"pointer"}>
                    {isLogin ? "Register" : "Login"}
                </Box>
            </Flex>
        </Box>
    </>
  )
}

export default AuthForm