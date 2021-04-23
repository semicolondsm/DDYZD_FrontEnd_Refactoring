import Skeleton from 'react-loading-skeleton';
import * as S from '../styles'

export const MemberSkeleton = () => {
    return(
        <li>
            <S.ClubMemberContainer>
                <S.MemberHeader>
                    <Skeleton height={20} width={150} />
                    <Skeleton height={20} width={50} />
                </S.MemberHeader>
                <S.MemberContainer>
                    {
                        Array(12).fill(-1).map((_, index) => (
                            <S.Member key={index}>
                                <Skeleton height={40} width={40} circle style={{marginRight: "15px"}} />
                                <Skeleton height={40} width={60} />
                            </S.Member>
                        ))
                    }
                </S.MemberContainer>
                <S.Dummy/>
            </S.ClubMemberContainer>
        </li>
    )
}