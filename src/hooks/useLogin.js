import React from 'react'
import { useShowToast } from './useShowToast'
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth'
import { auth } from '../firebase/firebase'
import { doc, getDoc } from 'firebase/firestore'
import { firestore } from '../firebase/firebase'
import useAuthStore from '../store/authStore'

const useLogin = () => {
  const showToast = useShowToast()
  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);

  const loginUser = useAuthStore(state => state.login)

  const login = async (inputs) => {
    if (!inputs.email || !inputs.password) {
      showToast("error", "fill out all the fields")
      console.log("Please fill all the fields")
      return
    }
    try {
        const userCred = await signInWithEmailAndPassword(inputs.email, inputs.password)

        if(userCred) {
            const docRef = doc(firestore, "users", userCred.user.uid)
            const docSnap = await getDoc(docRef)
            localStorage.setItem("user-info", JSON.stringify(docSnap.data()))
            loginUser(docSnap.data())
        }
  } catch (error) {
    showToast("error", error.message)
  }
}

  return  {loading, error, login }
}

export default useLogin