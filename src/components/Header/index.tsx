import React, { useEffect, useState } from 'react';
import * as S from './styles'
import Link from "next/link"
import ListIco from './ListIco';
import ChatIco from './ChatIco';
import { useRecoilState } from 'recoil';
import { userAtom } from '@/src/modules/atom/user';


/**야야 */
function Header({color} : {color:string}){
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
        <div>
        <S.Header >
            <S.TopHeader state={scroll} color={color}>
                <Link href="/">
                    <a><img src={color=="white" ? "https://eungyeole.s3.ap-northeast-2.amazonaws.com/logoblack.png" : "https://eungyeole.s3.ap-northeast-2.amazonaws.com/logowhite.png"} width={25} height={25}></img>대동여지도</a>
                </Link>
                <Link href="/chat">
                  <a><ChatIco></ChatIco></a>
                </Link>
            </S.TopHeader>
            <S.BottomHeader>
                <ul>
                    <div style={{cursor:"pointer"}}><ListIco></ListIco></div>
                    <h3 style={{cursor:"pointer"}}>전체 카테고리</h3>
                    <li><Link href="/majorlist"><a>동아리 신청</a></Link></li>
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
        </div>
    )
}

export default Header;
