import { FC, useEffect, useState } from "react";
import club from "@/src/libs/api/club";
import * as S from "./styles"
import yyyymmddFormat from "@/src/libs/function/yyyymmddFormat";
import getDday from "@/src/libs/function/getDday";
import { IRecruitmentData } from "@/src/libs/intefaces/Club";
import { CreateRoomAndGetRoomId } from "@/src/libs/function/chat";
import { useRouter } from "next/router"
import RecruitmentSkeleton from "./RecruitmentSkeleton";

interface Props {
    club_id: number
}

export const ClubRecruitment: FC<Props> = ({club_id}) =>{
    const router = useRouter();
    const [data,setData] = useState<IRecruitmentData>();
    const [ loading, setLoading ] = useState(true);

    useEffect(()=>{
        club.getRecruitment(club_id)
        .then((res)=>{
            setLoading(false)
            setData(res.data);
            setLoading(true)
        })
        .catch((e)=>console.error(e))
    },[])

    const onSupport = async () => {
        if (!localStorage.getItem("accessToken")) {
            alert("로그인을 해주세요 !");
            return;
        }
        const chat_id = await CreateRoomAndGetRoomId(
            Number(router.query.clubid)
        );
        router.push("/chat/" + chat_id);
    };

    return(
        <>
        {
            loading ?
            <S.Wrapper>

                <S.HeaderWrapper>
                    동아리 지원
                </S.HeaderWrapper>

                {
                    data ? 
                    <>
                        <S.MajorWrapper>
                            모집분야
                            <S.TagList>
                                {
                                    data?.major.map((i, index)=>(<span key={index}>{i}</span>))
                                }
                            </S.TagList>
                        </S.MajorWrapper>
                    
                        <S.DdayWapper>
                            모집기간
                            <S.Dday>
                                <div style={{alignItems: "center", width: '20px', height: '20px', border: "1px solid black", borderRadius: "50%", marginRight: "10px"}}></div>
                                <div style={{}}>
                                    <div>
                                        {data && yyyymmddFormat(data.startat)}
                                        ~  
                                        {data && yyyymmddFormat(data.closeat)} 
                                    </div>
                                    <div>
                                        ( {data && getDday(data.startat, data.closeat)}일간 )
                                    </div>
                                </div>
                            </S.Dday>
                        </S.DdayWapper>
                        </>
                    : <S.NoRecruiment>모집기간이 아닙니다</S.NoRecruiment>
                }

                <S.ButtonWapper>
                    <S.Button onClick={onSupport} disabled={!data}>지원하기</S.Button>
                </S.ButtonWapper>

            </S.Wrapper>
            : <RecruitmentSkeleton />
        }
        </>

    )
}