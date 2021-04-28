import { AxiosError } from 'axios';
import { useEffect, useState, useRef, MutableRefObject } from 'react';
import auth from '../../api/auth';
import { IUser } from '../../intefaces/User';

interface Return{

}

export function useAuth() : Return {
    function logOut(){
        alert("로그아웃 되었습니다.")
        localStorage.clear()
        window.location.href="/"  
    }
    function isLogin(){
        if(!localStorage.refreshToken) {
            alert("로그인을 해주세요!");
            throw new Error('로그인을 해주세요!'); 
        }
        
    }
    const onSilentRefresh = () => {
        auth.refreshToken()
            .then(onLogin)
            .catch((e: AxiosError) => {
                e.response.status === 401 && logOut();
            });
    };
    const onLogin = async (res: any) => {
        localStorage.setItem("accessToken", res.data.access_token);
        localStorage.setItem("refreshToken", res.data.refresh_token);
        setTimeout(onSilentRefresh, 72000000);
        const gcn: any = await auth.getGCN();
        const { data }: { data: IUser } = await auth.getProfile(gcn.data.gcn);
        localStorage.setItem("userCache", JSON.stringify(data));
    };
    useEffect(()=>{
     
    },[])

    return { logOut, onLogin, isLogin, onSilentRefresh }
}