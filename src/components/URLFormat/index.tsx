import { FC } from "react";
interface Props {
    content : string
}
export const URLFormat : FC<Props> = ({content}) => {
    return(
        <>
        {
            content.split(/( |\n)/).map((val, index) => {
                const regex = /^(http(s)?:\/\/|www.)([a-z0-9\w]+\.*)+[a-z0-9]{2,4}([\/a-z0-9-%#?&=\w])+(\.[a-z0-9]{2,4}(\?[\/a-z0-9-%#?&=\w]+)*)*/gi;
                if (regex.exec(val) !== null)
                    return (
                        <a key={index} target="blank" href={val}>
                            {val}
                        </a>
                    );
                else return `${val}`;
            })}
        </>
    )
}