import { FC, useEffect, useState } from "react";
import club from "@/src/libs/api/club";
import * as S from "./styles"
import yyyymmddFormat from "@/src/libs/function/yyyymmddFormat";
import getDday from "@/src/libs/function/getDday";
import { IRecruitmentData } from "@/src/libs/intefaces/Club";

interface Props {
    club_id: number
}

export const ClubRecruitment: FC<Props> = ({club_id}) =>{
    const [data,setData] = useState<IRecruitmentData>();

    useEffect(()=>{
        club.getRecruitment(club_id)
        .then((res)=>setData(res.data))
        .catch((e)=>console.error(e))
    },[])

    return(
        <>
            {
                data ? 
                <S.Wrapper>
                    <div>
                        <S.HeaderWrapper>
                            <p>모집분야</p>
                            
                        </S.HeaderWrapper>
                        <S.TagList>
                            {
                                data?.major.map((i, index)=>(<span key={index}>{i}</span>))
                            }
                        </S.TagList>
                        <p>모집기간</p>
                        <S.RecuitmentDay>
                            {data && yyyymmddFormat(data.startat)}
                            ~  
                            {data && yyyymmddFormat(data.closeat)} 
                            ( {data && getDday(data.startat, data.closeat)}일간 )
                        </S.RecuitmentDay>
                    </div>
                </S.Wrapper>
                : null
            }
        </>
    )
}