import React from 'react'
import { Container } from '@chakra-ui/react'
import { Flex } from '@chakra-ui/react'
import ProfileHeader from '../../components/Profile/ProfileHeader'
import ProfileTabs from '../../components/Profile/ProfileTabs'
import ProfilePosts from '../../components/Profile/ProfilePosts'
import useGetUserByUsername from '../../hooks/useGetUserByUsername'
import { useParams } from 'react-router-dom'
import { SkeletonCircle, VStack, Skeleton } from '@chakra-ui/react'


const ProfilePage = () => {
  const {username} = useParams()
  const { userProfile, isLoading } = useGetUserByUsername(username)

  const userNotFound = !userProfile && !isLoading

  if (userNotFound) return <h1>404: User Not Found</h1>
  return (
    <Container maxW={"container.lg"} py={5}>
        <Flex
        py={10}
        px={4}
        pl={{base: 4, md: 10}}
        w={"full"}
        mx={"auto"}
        flexDirection={"column"}
        >
            {!isLoading && userProfile && <ProfileHeader />}
            {isLoading && <ProfileHeaderSkeleton />}
        </Flex>
        <Flex
            px={{base: 2, md: 4}}
            maxW={"full"}
            mx={"auto"}
            borderTop={"1px solid"}
            borderColor={"whiteAlpha.300"}
            direction={"column"}
        >
            <ProfileTabs />
            <ProfilePosts />
        </Flex>
    </Container>
  )
}

export default ProfilePage

const ProfileHeaderSkeleton = () => {
  return (
		<Flex
			gap={{ base: 4, sm: 10 }}
			py={10}
			direction={{ base: "column", sm: "row" }}
			justifyContent={"center"}
			alignItems={"center"}
		>
			<SkeletonCircle size='24' />

			<VStack alignItems={{ base: "center", sm: "flex-start" }} gap={2} mx={"auto"} flex={1}>
				<Skeleton height='12px' width='150px' />
				<Skeleton height='12px' width='100px' />
			</VStack>
		</Flex>
	);
}