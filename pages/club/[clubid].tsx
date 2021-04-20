import { useInfiniteScroll } from "@/src/libs/hook/useInfiniteScroll";
import { IFeedData } from "@/src/libs/intefaces/Feed";
import { GetServerSidePropsContext } from "next";
import { ClubHeader, ClubRecruitment, ClubUtil } from '@/src/components/ClubView';
import Header from '@/src/components/Header';
import { useEffect, useState } from "react";
import { IClubInfo } from "@/src/libs/intefaces/Club";
import clubAPI from "@/src/libs/api/club";
import Feed from '@/src/components/Feed';

export const getServerSideProps = (context : GetServerSidePropsContext)  => {
    
    return {
        props: {
            clubid: context.query.clubid
        }
    };
}

interface infiniteScrollType {
    page: number,
    last: boolean,
    loading: boolean,
    setLoading: () => boolean,
}

function club({clubid} : {clubid : number}){
    const [ clubData, setClubData ] = useState<IClubInfo>()
    const [ feedData, setFeedData ] = useState<IFeedData[]>([])

    const [ page, last, loading ] = useInfiniteScroll<infiniteScrollType>();
    const [ feedPage, setFeedPage ] = useState<any>(page);
    const [ feedLoading, setFeedLoading] = useState<any>(loading)
    const [ feedLast, setFeedLast] = useState<any>(last)

    useEffect(()=>{
        clubAPI.getInfo(clubid)
        .then((res)=>{
            setClubData(res.data);
        })
        console.log(clubData)
    },[clubid])

    useEffect(()=>{
        if(feedLoading && !feedLast){
            console.log(feedPage)
            setFeedPage(feedPage+1);
            clubAPI.getFeed(clubid,feedPage+1)
            .then((res)=>{
                if(res.data.length===0) {
                    setFeedLoading(false);
                setFeedLast(true);
                }
                setFeedData([...feedData, ...res.data])
                setFeedLoading(false);
                console.log("asdasdasd")
                
            })
          .catch((e)=>console.log(e))
        }
        console.log(feedData, "asdasd")
      },[feedLoading])
    
    return (
        <>
            <Header color="white"/>
            {
                clubData ? 
                <>
                    <div style={{backgroundColor: "#ffffff"}}>
                        <ClubHeader data={clubData}></ClubHeader>
                        <ClubUtil data={clubData}></ClubUtil>
                    </div>
                    
                    <ClubRecruitment club_id={clubid}></ClubRecruitment>
                    <Feed data={feedData}></Feed>
                </>
                : null
            }
        </>
    )
}

export default club;