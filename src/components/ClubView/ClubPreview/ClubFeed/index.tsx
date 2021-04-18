import { IFeedData } from "@/src/libs/intefaces/Feed";
import Feed from '@/src/components/Feed'
import { useInfiniteScroll } from "@/src/libs/hook/useInfiniteScroll";
import feed from "@/src/libs/api/feed";

export const ClubFeed = ({club_id} : {club_id : number}) => {
    const [data, loading] = useInfiniteScroll<IFeedData>(feed.getFeed);

    return(
        <Feed club_id={}/>
    )
}
export default ClubFeed;