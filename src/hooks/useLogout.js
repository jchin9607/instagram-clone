import React from 'react'
import { useSignOut } from 'react-firebase-hooks/auth'
import { auth } from '../firebase/firebase'
import { useShowToast } from './useShowToast'
import useAuthStore from '../store/authStore'
const useLogout = () => {
    const [signOut, loading, error] = useSignOut(auth)
    const showToast = useShowToast()
    const logoutUser = useAuthStore(state => state.logout)
    const handleLogout = async () => {
        try {
            await signOut()
            showToast("success", "Logged out successfully")
            localStorage.removeItem("user-info")
            logoutUser()
        } catch (error) {
            showToast("error", error.message)
        }
    }
  return {handleLogout, loading, error}
}

export {useLogout}