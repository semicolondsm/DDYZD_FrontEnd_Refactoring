import { useInfiniteScroll } from "@/src/libs/hook/useInfiniteScroll";
import { IFeedData } from "@/src/libs/intefaces/Feed";
import { GetServerSidePropsContext } from "next";
import { ClubHeader, ClubRecruitment, ClubUtil, ClubMember } from '@/src/components/ClubView';
import Header from '@/src/components/Header';
import { FC, useEffect, useState } from "react";
import { IClubInfo } from "@/src/libs/intefaces/Club";
import clubAPI from "@/src/libs/api/club";
import Feed from '@/src/components/Feed';
import SEO from "@/src/components/SEO";
import styled from '@emotion/styled'

export const getServerSideProps = (context : GetServerSidePropsContext)  => {
    
    return {
        props: {
            id: context.query.id
        }
    };
}

const ClubContent = styled.div`
    max-width: 1290px;
    width: 100%;
    display: flex;
    background-color: #f5f5f5;
    margin: 0 auto;
    @media screen and (max-width: 1405px){
        flex-direction: column;
        align-items: center;
    }

`

interface Props {
    id : number
}
const club:FC<Props> = ({id})=>{
    const [ clubData, setClubData ] = useState<IClubInfo>()
    const [data, loading, last] = useInfiniteScroll<IFeedData>((page)=>clubAPI.getFeed(id, page));

    useEffect(()=>{
        clubAPI.getInfo(id)
        .then((res)=>{
            setClubData(res.data);
        })
    },[id])
    
    return (
        <>
            <Header/>
            {
                clubData ? 
                <>
                    <SEO 
                        title={clubData.clubname} 
                        description={clubData.description} 
                        image={clubData.clubimage}>
                    </SEO>
                    <div style={{backgroundColor: "#ffffff"}}>
                        <ClubHeader data={clubData}></ClubHeader>
                        <ClubUtil data={clubData}></ClubUtil>
                    </div>
                    
                    <ClubContent>
                        <ClubMember data={clubData}/>
                        <ClubRecruitment club_id={id}></ClubRecruitment>
                        <Feed loading={loading} data={data} last={last}></Feed>
                    </ClubContent>
                    
                </>
                : null
            }
        </>
    )
}

export default club;