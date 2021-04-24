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

export const getServerSideProps = (context : GetServerSidePropsContext)  => {
    
    return {
        props: {
            id: context.query.id
        }
    };
}


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
            <Header color="white"/>
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
                    
                    <div style={{width: "100vw",display: "flex", backgroundColor: "#f5f5f5", margin: "0 auto", flexWrap:"nowrap"}}>
                        <ClubMember data={clubData}/>
                        <ClubRecruitment club_id={id}></ClubRecruitment>
                        <Feed loading={loading} data={data} last={last}></Feed>
                    </div>
                    
                </>
                : null
            }
        </>
    )
}

export default club;