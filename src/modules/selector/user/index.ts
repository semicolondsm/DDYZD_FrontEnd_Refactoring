import { selector } from "recoil";
import { userAtom } from "../../atom/user";

export const userSelector = selector({
    key : 'userStateSelector',
    get : ({ get }) => {
        const data = get(userAtom);
        return data;
    },
    set : ({set}, userCache : string) => {
        
        return set(userAtom, JSON.parse(userCache));   
    }
})