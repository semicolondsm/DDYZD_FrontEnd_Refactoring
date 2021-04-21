import * as S from '../styles'
import { useSlider } from '@/src/libs/hook/useSlider';
import {IFeedData} from '@/src/libs/intefaces/Feed'
import next from '@/src/assets/images/next'
import prev from '@/src/assets/images/prev'
import { FC, useEffect } from 'react';
interface Props{
    media : string[]
}
const FeedSlider = ({ media } : {media : string[]}) => {

    const {sliderRef ,page, Prev, Next ,Swipe, TouchEnd, TouchMove} = useSlider({media})

    useEffect(()=>{
        console.log(page)
    },[page])
    
    return (
        <>
            <S.Slider>
                <S.SliderImages
                    onTouchStart={Swipe}
                    onTouchMove={TouchMove}
                    onTouchEnd={TouchEnd}
                    ref={sliderRef}
                    style={{ width: `${media.length * 100}%` }}
                >
                    {media.map((i, index) => (
                        <img
                            key={index}
                            style={{
                                width: `calc( 100% / ${media.length} )`,
                                transform: `translateX(${
                                    100 * index
                                }%)`,
                            }}
                            src={`${process.env.NEXT_PUBLIC_BASEURL}/file/${i}`}
                        ></img>
                    ))}
                </S.SliderImages>
                {
                    media.length !== 1 ?
                    <>
                        <S.Prev onClick={Prev}>
                            {prev}
                        </S.Prev>
                        <S.Next onClick={Next}>
                            {next}
                        </S.Next>
                    </>
                    : null
                }
            </S.Slider>
            <S.SliderState>
                {media.map((_i, index) => (
                    <S.StateButton
                        key={index}
                        style={
                            page == index
                                ? { background: "#713EFF" }
                                : undefined
                        }
                    ></S.StateButton>
                ))}
            </S.SliderState>
        </>
    )
}

export default FeedSlider