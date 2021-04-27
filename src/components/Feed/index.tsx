import FeedCard from "./FeedCard"
import * as S from "./styles"
import FeedSkeleton from "./FeedCard/FeedSkelton";
import FeedLoading from "./FeedLoading/FeedLoading";
import { IFeedData } from "@/src/libs/intefaces/Feed";
import { FC } from "react";

interface Props{
  data : IFeedData[];
  loading : boolean;
  last : boolean;
}
const Feed : FC<Props> = ({data, loading, last}) => {
  return(
    <>
      <S.FeedList>
        {
          data.length !==0 || last? 
          data.map((i)=>(<FeedCard key={i.feedId} {...i}/>))
          : Array(30).fill(1).map((_i, index : number)=>(<FeedSkeleton key={index}/>))
        }
        {
          loading ? 
            <FeedLoading/>
          : null
        }
      </S.FeedList>
      

    </>
  )
}
export default Feed;