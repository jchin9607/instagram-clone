import React from 'react'
import { useToast } from '@chakra-ui/react'
import { useCallback } from 'react'
const useShowToast = () => {
    const toast = useToast()
    const showToast = useCallback((title, description,) => {
        toast( {
            title: title,
            description: description,
            status: 'error',
            duration: 5000,
            isClosable: true,
        })
    }, [toast])
  return showToast
}

export {useShowToast}