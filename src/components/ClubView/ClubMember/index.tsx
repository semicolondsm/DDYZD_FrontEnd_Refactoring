import React, { FC, Fragment, useEffect, useState } from "react";
import * as S from "./styles";
import club from "@/src/libs/api/club";
import { IClubInfo, IMemberData } from "@/src/libs/intefaces/Club";
import { MemberSkeleton } from "./MemberSkeleton";
import Link from "next/link";

interface Props{
  data: IClubInfo;
  clubId : number,
}

export const ClubMember: FC<Props> = ({data, clubId}) => {
  const [memberData, setMemberData] = useState<IMemberData[]>(null);

  useEffect(() => {
    club.getMembers(clubId).then((res) => {
      setMemberData(res.data);
    });
  }, []);

  return (
    <>
      {
        data && memberData ? 
        <S.ClubMemberContainer>
          <S.MemberHeader>
            <div>{data.clubname} 동아리원</div>
            <div>인원수: {memberData.length}명</div>
          </S.MemberHeader>
          <S.MemberContainer>
            {memberData.map((data, index) => {
              return (
                (
                  <React.Fragment key={index}>
                    <Link href={`/user/${data.gcn}`}>
                      <S.Member>
                        <S.Img src={data.profile_image} />
                        <div>
                          <S.MemberName>{data.user_name}</S.MemberName>
                          <S.MemberRole>{index === 0 ? "동아리장" : "동아리원"} ㆍ {data.gcn[0]}학년</S.MemberRole>
                        </div>
                      </S.Member>
                    </Link>
                  </React.Fragment>
                )
              );
            })}
          </S.MemberContainer>
          <S.Dummy/>
        </S.ClubMemberContainer>
      : <MemberSkeleton />
      }
    </>
  );
}