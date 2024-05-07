"use client"
import React, {useEffect, useState} from "react"
import { getAuth, signOut, onAuthStateChanged } from "firebase/auth"
import { useRouter } from "next/navigation"
import app from "../config"

export default function Page(){
    const auth = getAuth()
    const router = useRouter()
    const [user, setUser] = useState(null);

    useEffect(() =>{
        const unsubscribe = onAuthStateChanged(auth, (user) =>{
            if(user){
             setUser(user);
            } else {
                router.push("/")
            }
        })
        return() => unsubscribe();
    }, [auth, router]);

    const hangelLogout = async () => {
        try{
          await signOut(auth);
          router.push("/")
        } catch (error){
            console.error("error is " , error.message);
        }
    };

    return(
         <>
          <div className="flex flex-col justify-center items-center h-screen ">
            <div className="p-8 rounded-lg shadow-mg">
                <h1 className="text-3xl font-bold mb-4">
                    Welcome to the dashboard, {user ? user.displayName : "Guest"}!
                </h1>
            <button
            onClick={hangelLogout}
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-md"
            >
               Logout
            </button>
            </div>
          </div>
         </>
    )


}