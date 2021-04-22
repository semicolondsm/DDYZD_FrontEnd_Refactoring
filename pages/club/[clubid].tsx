import { useInfiniteScroll } from "@/src/libs/hook/useInfiniteScroll";
import { IFeedData } from "@/src/libs/intefaces/Feed";
import { GetServerSidePropsContext } from "next";
import { ClubHeader, ClubRecruitment, ClubUtil } from '@/src/components/ClubView';
import Header from '@/src/components/Header';
import { useEffect, useState } from "react";
import { IClubInfo } from "@/src/libs/intefaces/Club";
import clubAPI from "@/src/libs/api/club";
import Feed from '@/src/components/Feed';
import SEO from "@/src/components/SEO";

export const getServerSideProps = (context : GetServerSidePropsContext)  => {
    
    return {
        props: {
            clubid: context.query.clubid
        }
    };
}

function club({clubid} : {clubid : number}){
    const [ clubData, setClubData ] = useState<IClubInfo>()
    const [data, loading] = useInfiniteScroll<IFeedData>((page)=>clubAPI.getFeed(clubid, page));
    useEffect(()=>{
        clubAPI.getInfo(clubid)
        .then((res)=>{
            setClubData(res.data);
        })
    },[clubid])
    return (
        <>
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
                    
                    <ClubRecruitment club_id={clubid}></ClubRecruitment>
                    <Feed loading={loading} data={data}></Feed>
                </>
                : null
            }
        </>
    )
}

export default club;