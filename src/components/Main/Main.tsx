import { useEffect } from "react"
import Feed from "@/src/components/Feed"
import MainSlide from "./MainSlide"
import user from '@/src/libs/api/user'
import { useRouter } from "next/dist/client/router"
import token from '@/src/libs/api/token'

const Main = () => {
    const {query={}} = useRouter();
    const {code} = query
    useEffect(()=>{
        if(typeof code!=="undefined"){
            user.getAuthToken(code) 
            .then((res)=>{
                token.getToken(res.data['access-token'])
                .then((res)=>{
                    console.log(res)
                    console.log(res.data["access_token"])
                    localStorage.setItem("accessToken",res.data["access_token"])
                    localStorage.setItem("refreshToken",res.data["refresh_token"])
                    window.location.href="/";
                }).catch((err)=>{
                    console.log(err)
                })
                
            }).catch((err)=>{
                console.log(err)
            })
        }
    },[query]) 
    return (
        <>
            <MainSlide></MainSlide>
        </>
    )
}

export default Main