import { atom } from 'recoil';
import { USER_STATE } from '../../keys/user';

export const userAtom = atom({
    key: USER_STATE,
    default: null
})