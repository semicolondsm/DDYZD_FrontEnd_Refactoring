import Skeleton from 'react-loading-skeleton';
import * as S from '../styles';

const RecruitmentSkeleton = () => {

    return (
        <S.Wrapper>

                <S.HeaderWrapper>
                    동아리 지원
                </S.HeaderWrapper>

                <S.MajorWrapper>
                    모집분야
                    <S.TagList>
                        {
                            Array().map((i, index)=>(<span key={index}>{i}</span>))
                        }
                    </S.TagList>
                </S.MajorWrapper>
            
                <S.DdayWapper>
                    모집기간
                    <S.Dday>
                        <div style={{alignItems: "center", width: '20px', height: '20px', border: "1px solid black", borderRadius: "50%", marginRight: "10px"}}></div>
                        <div style={{}}>
                            <div>
                                {data && yyyymmddFormat(data.startat)}
                                ~  
                                {data && yyyymmddFormat(data.closeat)} 
                            </div>
                            <div>
                                ( {data && getDday(data.startat, data.closeat)}일간 )
                            </div>
                        </div>
                    </S.Dday>
                </S.DdayWapper>

                <S.ButtonWapper>
                    <Skeleton width={130} height={40} border-radius={15} />
                </S.ButtonWapper>

            </S.Wrapper>
    )
}

export default RecruitmentSkeleton;