import Skeleton from 'react-loading-skeleton';
import * as S from '../styles';

const RecruitmentSkeleton = () => {

    return (
        <S.Wrapper>

                <S.HeaderWrapper>
                    <Skeleton width={150} height={30}/>
                </S.HeaderWrapper>

                <S.MajorWrapper>
                    <Skeleton width={150} height={30} style={{marginBottom: "10px"}}/>
                    <S.TagList>
                        {
                            Array(5).fill(-1).map((_, index)=>(<Skeleton key={index} width={15} height={15} border-radius={30}/>))
                        }
                    </S.TagList>
                </S.MajorWrapper>
            
                <S.DdayWapper>
                    <Skeleton width={50} height={23}/>
                    <S.Dday>
                        <Skeleton width={40} height={40} circle/>
                        <Skeleton width={160} height={50} style={{marginLeft: "20px"}} />
                    </S.Dday>
                </S.DdayWapper>

                <S.ButtonWapper>
                    <Skeleton width={130} height={40} border-radius={20} />
                </S.ButtonWapper>

            </S.Wrapper>
    )
}

export default RecruitmentSkeleton;