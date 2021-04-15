import * as S from "./style";
import earthIc from "@/src/assets/images/earth";
import phonoeIc from "@/src/assets/images/phone";
import brainIc from "@/src/assets/images/brain";
import etcIc from "@/src/assets/images/etc";
import shieldIc from "@/src/assets/images/shield";
import embedIc from "@/src/assets/images/embed";
import Link from "next/link";
import { CreateRoomAndGetRoomId } from "@/src/libs/function/chat";
import { color } from "@/src/styles";
import { useRouter } from "next/router";
import React, { FC, MouseEvent, useCallback, useEffect, useRef } from "react";
interface Props {
    max: number;
    now: number;
    imgSrc?: string;    
    header: string;
    tag: string[];
    description: string;
    banner: string;
    id: number;
    clubrecruitment: boolean;
}

export const ClubItem : FC<Props> = ({imgSrc, header, description, tag, banner, id, max, now, clubrecruitment,}) => {
    const thisElement=useRef<HTMLDivElement>();
    const router = useRouter();
    const time = useRef<ReturnType<typeof setTimeout>>(null);
    const convertIdLinkChat = useCallback(async (e : MouseEvent<HTMLElement>) => {
        e.preventDefault();
        const chat_id: number = await CreateRoomAndGetRoomId(id);
        if(clubrecruitment) router.push(`/chat/${chat_id}`);
        else router.push(`/club/${id}`);
    },[id]);
    useEffect(()=>{
        if((now+1)%4===0){
            const prevElement=thisElement.current.previousElementSibling as HTMLDivElement;
            thisElement.current.addEventListener("mouseover",()=>{
                clearTimeout(time.current);
                thisElement.current.style.zIndex = `40`;
                prevElement.style.boxShadow="none";
          
            })
            thisElement.current.addEventListener("mouseout", ()=>{
                prevElement.style.boxShadow = "0 5px 5px rgba(0, 0, 0, 0.29)";
                time.current=setTimeout(()=>{
                    thisElement.current.style.zIndex = `0`;
                },150)
            })
        }
    },[])
    return (
        <Link href={`/club/${id}`}>
            <S.ItemWrapper 
                ref={thisElement}
                max={max}
                now={now}
                clubrecruitment={clubrecruitment}
            >
                <div>
                    <S.PurpleBack />
                    {/* 핀 버튼 추가 */}
                    <S.PointButton></S.PointButton>
                    <S.ItemImgWrap>
                        <S.ItemImg
                            src={`${process.env.NEXT_PUBLIC_BASEURL}/file/${banner}`}
                        />
                    </S.ItemImgWrap>
                    <S.ItemFontWrapper>
                        <S.ItemHeader>{header}</S.ItemHeader>
                        <S.ItemSubHeader>{description}</S.ItemSubHeader>
                    </S.ItemFontWrapper>
                    <S.ButtonsWrapper active={clubrecruitment}>
                        <S.RadiusButton onClick={convertIdLinkChat}>
                            {
                                clubrecruitment ? "지원하기" : "자세히보기"
                            }
                        </S.RadiusButton>
                    </S.ButtonsWrapper>
                    <S.IconWrapper>
                        <S.Icon
                            src={`${process.env.NEXT_PUBLIC_BASEURL}/file/${imgSrc}`}
                        />
                    </S.IconWrapper>
                    <S.IntroWrapper>
                        <p>{description}</p>
                        <S.IntroIcon>
                            <S.FieldIconWrapper>
                                {tag.map((val,index) => {
                                    switch (val) {
                                        case "인공지능":
                                            return <span key={index}>{brainIc}</span>;
                                        case "웹":
                                            return <span key={index}>{earthIc}</span>;
                                        case "앱":
                                            return <span key={index}>{phonoeIc}</span>;
                                        case "정보보안":
                                            return <span key={index}>{shieldIc}</span>;
                                        case "임베디드":
                                            return <span key={index}>{embedIc}</span>;
                                        default:
                                            return <span key={index}>{etcIc}</span>;
                                    }
                                })}
                            </S.FieldIconWrapper>
                        </S.IntroIcon>
                    </S.IntroWrapper>
                </div>
            </S.ItemWrapper>
        </Link>
    );
};

