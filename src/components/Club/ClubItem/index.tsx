import * as S from "./style";
import Link from "next/link";
import { CreateRoomAndGetRoomId } from "@/src/libs/function/chat";
import { useRouter } from "next/router";
import React, { FC, MouseEvent, useCallback } from "react";
import useSpread from "@/src/libs/hook/useSpread";
import { IClubData } from "@/src/libs/intefaces/Club";
import { ClubTag } from "./ClubTag";
interface Props extends IClubData{
    max: number;
    now: number;   
}

export const ClubItem : FC<Props> = ({clubbanner, clubdescription, clubid, clubimage, clubname, clubrecruitment, clubtag, now, max}) => {
    const router = useRouter();
    const thisElement = useSpread<HTMLDivElement>(now);
    const convertIdLinkChat = useCallback(async (e : MouseEvent<HTMLElement>) => {
        e.preventDefault();
        const chat_id: number = await CreateRoomAndGetRoomId(clubid);
        if(clubrecruitment) router.push(`/chat/${chat_id}`);
        else router.push(`/club/${clubid}`);
    },[clubid, router, clubrecruitment]);
    return (
        <Link href={`/club/${clubid}`}>
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
                            src={`${process.env.NEXT_PUBLIC_BASEURL}/file/${clubbanner}`}
                        />
                    </S.ItemImgWrap>
                    <S.ItemFontWrapper>
                        <S.ItemHeader>{clubname}</S.ItemHeader>
                        <S.ItemSubHeader>{clubdescription}</S.ItemSubHeader>
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
                            src={`${process.env.NEXT_PUBLIC_BASEURL}/file/${clubimage}`}
                        />
                    </S.IconWrapper>
                    <S.IntroWrapper>
                        <p>{clubdescription}</p>
                        <S.IntroIcon>
                            <ClubTag clubtag={clubtag}></ClubTag>
                        </S.IntroIcon>
                    </S.IntroWrapper>
                </div>
            </S.ItemWrapper>
        </Link>
    );
};

