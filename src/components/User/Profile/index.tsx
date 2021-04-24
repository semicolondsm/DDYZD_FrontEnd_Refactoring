import user from "@/src/libs/api/user";
import { IUser } from "@/src/libs/intefaces/User";
import Link from "next/link";
import React, { FC, useState } from "react";
import * as S from "./style"
interface Props extends IUser {}
export const UserProfile : FC<Props> = ({github_url, bio, name, gcn, image_path, clubs}) =>{
    return(
        <S.Container>
        <h2>프로필 정보</h2>
        <div>
          
          <div>
            <S.ForInfo>
              <h2>이름 </h2>
              <p>{name}</p>
            </S.ForInfo>

            <S.ForInfo>
              <h2>학번 </h2>
              <p>No.{gcn}</p>
            </S.ForInfo>

            {/**<S.ForInfo error={githubError}>
              <h2>Github 아이디</h2>
              <input
                type="text"
                maxLength={75}
                value={github}
                onChange={(e) => setGithub(e.target.value)}
              />
                 </S.ForInfo>**/}

            {/**<<S.ForInfo error={profileError}>
              <h2>자기소개 </h2>
              <textarea 
                maxLength={75}
                value={introduction}
                onChange={(e) => setIntroduction(e.target.value)}
              />
            </S.ForInfo>**/}
            <S.ForInfo>
                <h2>소속중인 동아리</h2>
                <S.MSlideUnderBar>
                <S.MSlideUnderBarContent>
                {clubs.map((e, index)=>{ 
                    return(
                        <React.Fragment key={index}>
                            <Link href={`/club/${e.club_id}`}>
                                <S.MClubProfileBox>
                                    <S.ClubProfile ><img src={`${process.env.NEXT_PUBLIC_BASEURL}/file/${e.club_image}`}></img></S.ClubProfile>
                                    <span>{e.club_name}</span>
                                </S.MClubProfileBox>
                            </Link>
                        </React.Fragment>
                    )
                })} 
                </S.MSlideUnderBarContent>
          </S.MSlideUnderBar>
            </S.ForInfo>
            {/**
              loading ? 
                <S.DisableBT>변경중...</S.DisableBT>
              :<button onClick={submit}>프로필 업데이트</button>
            **/}
          </div>
          <div>
            <S.ProfilePicture>
              <img src={image_path ? image_path : "null"} />
            </S.ProfilePicture>
          </div>
          </div>
      </S.Container>
    )
}