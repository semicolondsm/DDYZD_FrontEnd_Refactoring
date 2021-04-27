import React, { FC, useEffect, useState } from 'react';
import * as S from './styles'
import Link from "next/link"
import listIco from '../../assets/images/listIco';
import chatIco from '../../assets/images/chatIco';
import { useRecoilState } from 'recoil';
import { userAtom } from '@/src/modules/atom/user';
import logo from '@/src/assets/images/logo';
import logowhite from '@/src/assets/images/logowhite';

interface Props {
    color?: string
}


/**야야 */
const Header: FC<Props> = ({color = "white"}) => {
    const [scroll, setScroll] = useState<number>(0);
    const [ userData, setUserData ] = useRecoilState(userAtom);

    useEffect(()=>{
        window.onscroll=()=>setScroll(window.scrollY);
        localStorage.userCache && setUserData(JSON.parse(localStorage.userCache))
    },[])
    const logout =()=>{
        alert("로그아웃 되었습니다.")
        localStorage.clear()
        window.location.href="/"  
    }
    return(
        <>
        <S.Header >
            <S.TopHeader state={scroll} color={color}>
                <Link href="/">
                    <a>{color==="white" ? logo : logowhite}대동여지도</a>
                </Link>
                <Link href="/chat">
                  <a>{chatIco}</a>
                </Link>
            </S.TopHeader>
            <S.BottomHeader>
                <ul>
                    <div style={{cursor:"pointer"}}>{listIco}</div>
                    <h3 style={{cursor:"pointer"}}>전체 카테고리</h3>
                    <li><Link href="/club"><a>동아리 신청</a></Link></li>
                    <li onClick={()=>alert("개발중")}>동아리 물품 신청</li>
                    <li onClick={()=>window.location.href="https://ddyzd-club.dsmkr.com/"}>관리 페이지</li>
                    <li>공지사항</li>
                </ul>
                <ul>
                    {
                        userData?
                            <><li><Link href={`/profile?id=${userData.gcn}`}><a>{userData?.name}</a></Link></li><li onClick={logout}>로그아웃</li></>
                        :<li onClick={()=>window.location.href="/login"}>로그인</li>
                    }
                    <li>고객센터</li>
                    
                </ul>
            </S.BottomHeader>
        </S.Header>
        </>
    )
}

export default Header;
