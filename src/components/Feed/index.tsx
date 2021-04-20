import FeedCard from "./FeedCard"
import * as S from "./styles"
import FeedSkeleton from "./FeedCard/FeedSkelton";
import FeedLoading from "./FeedLoading/FeedLoading";
import { IFeedData } from "@/src/libs/intefaces/Feed";
import { useEffect, useState } from "react";

  
function Feed({data} : {data : IFeedData[]}){
  console.log(data);
  const [ feedData, setFeedData ] = useState<IFeedData[]>(data)

  useEffect(()=>{
    setFeedData(data)
  },[data])

  return(
    <>
      <S.FeedList>
        {
          feedData.length !==0 ? 
          feedData.map((i)=>(<FeedCard key={i["feedId"]} props={i}></FeedCard>))
          : Array(30).fill(1).map((_i, index : number)=>(<FeedSkeleton key={index}></FeedSkeleton>))
        }
      </S.FeedList>
      {
        feedData ? 
          <FeedLoading></FeedLoading>
        : null
      }

    </>
  )
}
export default Feed;