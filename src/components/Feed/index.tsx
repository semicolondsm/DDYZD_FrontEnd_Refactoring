import FeedCard from "./FeedCard"
import * as S from "./styles"
import FeedSkeleton from "./FeedCard/FeedSkelton";
import FeedLoading from "./FeedLoading/FeedLoading";
import { IFeedData } from "@/src/libs/intefaces/Feed";
import { FC, useEffect, useState } from "react";

interface Props{
  data : IFeedData[];
  loading : boolean;
}
const Feed : FC<Props> = ({data, loading}) => {
  return(
    <>
      <S.FeedList>
        {
          data.length !==0 ? 
          data.map((i)=>(<FeedCard key={i["feedId"]} props={i}></FeedCard>))
          : Array(30).fill(1).map((_i, index : number)=>(<FeedSkeleton key={index}></FeedSkeleton>))
        }
      </S.FeedList>
      {
        loading ? 
          <FeedLoading></FeedLoading>
        : null
      }

    </>
  )
}
export default Feed;