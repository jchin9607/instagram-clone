
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth'
import { auth } from '../firebase/firebase'
import { doc, setDoc, getDocs } from 'firebase/firestore'
import { firestore } from '../firebase/firebase'
import { useShowToast } from './useShowToast'
import useAuthStore from '../store/authStore'
import { collection, query, where } from "firebase/firestore";

const useSignUpWithEmailAndPassword = () => {
    const [createUserWithEmailAndPassword, user, loading, error] = useCreateUserWithEmailAndPassword(auth)
    const showToast = useShowToast()
    const loginUser= useAuthStore(state => state.login)
    const logoutUser= useAuthStore(state => state.logout)

    const signup = async (inputs) => {
        if(!inputs.email || !inputs.password || !inputs.username || !inputs.fullName) {
            showToast("error", "fill out all the fields")
            console.log("Please fill all the fields"); 
            return
        }

        const usersRef = collection(firestore, "users");

        const q = query(usersRef, where("username", "==", inputs.username));

        const querySnapshot = await getDocs(q);

        if(!querySnapshot.empty) {
            showToast("error", "username already exists")
            return
        }

        try {
            const newUser = await createUserWithEmailAndPassword(inputs.email, inputs.password)
            if(!newUser && error) {
                console.log(error)
                showToast("error", error.message)
                return
            }
            if (newUser) {
                const userDoc = {
                    uid:newUser.user.uid,
                    username:inputs.username,
                    email:inputs.email,
                    fullName:inputs.fullName,
                    bio:"",
                    profilePicURL:"",
                    followers:[],
                    following:[],
                    posts:[],
                    createdAt:Date.now()
                }

                await setDoc(doc(firestore, "users", newUser.user.uid), userDoc)
                localStorage.setItem("user-info", JSON.stringify(userDoc))
                loginUser(userDoc);
            }
        } catch (error) {
            console.log(error)
            showToast("error", error.message)
        }
    }

  return {loading, error, signup}
}

export {useSignUpWithEmailAndPassword}