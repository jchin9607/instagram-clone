import React from 'react'
import { Input } from '@chakra-ui/react'
import { useState } from 'react'
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
import { InputGroup, Button, InputRightElement } from '@chakra-ui/react'
import { useSignUpWithEmailAndPassword } from '../../hooks/useSignUpWithEmailAndPassword.js'
import { Alert, AlertIcon, AlertTitle, AlertDescription } from '@chakra-ui/react'



const Signup = () => {
        
    const [inputs, setInputs] = useState({
        email: "",
        password: "",
        fullName: "",
        username: "",
        confirmPassword: ""
    })

    const [showPassword, setShowPassword] = useState(false)
    const {loading, error, signup} = useSignUpWithEmailAndPassword()
  return (
    <>
    <Input placeholder='Email'
        fontSize={14}
        size={"sm"}
        type='email'
        value={inputs.email}
        onChange={(e) => setInputs({ ...inputs, email:e.target.value })}
    />
    <Input placeholder='Username'
        fontSize={14}
        type='text'
        size={"sm"}
        value={inputs.username.toLowerCase()}
        onChange={(e) => setInputs({ ...inputs, username:e.target.value })}
    />
    <Input placeholder='Full Name'
        fontSize={14}
        type='text'
        size={"sm"}
        value={inputs.fullName}
        onChange={(e) => setInputs({ ...inputs, fullName:e.target.value })}
    />
    <InputGroup>
        <Input placeholder='Password'
        fontSize={14}
        type={showPassword ? "text" : "password"}
        value={inputs.password}
        size={"sm"}
        onChange={(e) => setInputs({ ...inputs, password:e.target.value })}
        />
        <InputRightElement h='full'>
            <Button variant='ghost' size='sm' onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? <ViewIcon /> : <ViewOffIcon />}
            </Button>
        </InputRightElement>
    </InputGroup>

    {error && (
        <Alert status='error' fontSize={14} p={3} borderRadius={3}>
            <AlertIcon fontSize={12} />
            {error.message}
        </Alert>
    )}

    <Button w={"full"} colorScheme='blue' fontSize={14} size={"sm"} 
    isLoading={loading}
    onClick={() => signup(inputs)}>
        Sign Up
    </Button>
    </>
  )
}

export default Signup
