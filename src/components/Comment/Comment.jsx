import React from 'react'
import { Avatar, Flex, Text } from '@chakra-ui/react'
import { Skeleton, SkeletonCircle } from '@chakra-ui/react'
import { timeAgo } from '../../utils/timeAgo'
import useGetUserProfileById from '../../hooks/useGetUserProfileById'

const Comment = ({ comment }) => {
  const { userProfile, isLoading} = useGetUserProfileById(comment.createdBy)

  if(isLoading) return <CommentSkeleton />
  return (
    <Flex
    gap={4}
    >
      <Avatar src={userProfile.profilePicURL}  size={"sm"}/>
      <Flex
      direction={"column"}
      >
        <Flex gap={2}>
          <Text fontSize={12} fontWeight={"bold"}>
            {userProfile.username}
          </Text>
          <Text fontSize={14}>
            {comment.comment}
          </Text>
          <Text fontSize={12} color={"gray"}>
            {timeAgo(comment.createdAt)}
          </Text>
        </Flex>
      </Flex>
    </Flex>
  )
}

export { Comment }

const CommentSkeleton = () => {
	return (
		<Flex gap={4} w={"full"} alignItems={"center"}>
			<SkeletonCircle h={10} w='10' />
			<Flex gap={1} flexDir={"column"}>
				<Skeleton height={2} width={100} />
				<Skeleton height={2} width={50} />
			</Flex>
		</Flex>
	);
};