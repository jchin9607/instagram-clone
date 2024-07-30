import React from 'react'
import { Flex, Box } from '@chakra-ui/react' 

import Sidebar from '../../components/Sidebar/Sidebar'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useLocation } from 'react-router-dom'
import { auth } from '../../firebase/firebase'
import { Spinner } from '@chakra-ui/react'

import Navbar from '../../components/Navbar/Navbar'

const PageLayout = ({children}) => {
    const {pathname} = useLocation()
    const [user, loading, error] = useAuthState(auth);
    const canRenderSidebar = pathname !== '/auth' && user ;
    const canRenderNavbar = !user && !loading && pathname !== '/auth'

    const checkingUserUsAuth = !user && loading
    if(checkingUserUsAuth) return <PageLayoutSpinner />

  return (
    <Flex flexDirection={canRenderNavbar ? "column" : "row"}>
        {canRenderSidebar ? (
            <Box w={{base: "70px", md: "240px"}}>
            <Sidebar />

            </Box>

        ) : null}
        {canRenderNavbar ? <Navbar /> : null}
        <Box flex={1} w={{base:"calc(100% - 70px)" , md:"calc(100% - 240px)"}} mx={"auto"}>
            {children}
        </Box>
    </Flex>
  )
}

export default PageLayout

const PageLayoutSpinner = () => {
  return (
		<Flex flexDir='column' h='100vh' alignItems='center' justifyContent='center'>
			<Spinner size='xl' />
		</Flex>
	);
}