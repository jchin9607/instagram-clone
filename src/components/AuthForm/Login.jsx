import React from 'react'
import { Input, Button } from '@chakra-ui/react'
import { useState } from 'react'
import useLogin from '../../hooks/useLogin'

import { Alert, AlertIcon, AlertTitle, AlertDescription } from '@chakra-ui/react'


const Login = () => {
    const [inputs, setInputs] = useState({
        email: "",
        password: "",
        
    })
    const {loading, error, login }= useLogin()
  return (
    <>
    <Input placeholder='Email'
    fontSize={14}
    type='email'
    size={"sm"}
    value={inputs.email}
    onChange={(e) => setInputs({ ...inputs, email:e.target.value })}
    />
    <Input placeholder='Password'
    fontSize={14}
    type='password'
    size={"sm"}
    value={inputs.password}
    onChange={(e) => setInputs({ ...inputs, password:e.target.value })}
    />

    {
      error && (
        <Alert status='error' fontSize={14} borterRadius={4}>
          <AlertIcon fontSize={12}/>
          {error.message}
        </Alert>
      )
    }

    <Button w={"full"} colorScheme='blue' fontSize={14} size={"sm"} 
    isLoading={loading}
    onClick={() => login(inputs)}>
                    Log In
                </Button>
    
    </>
  )
}

export default Login