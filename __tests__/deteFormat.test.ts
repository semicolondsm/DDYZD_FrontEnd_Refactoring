import dateFormat from "../src/libs/function/dateFormat/index";
describe('dateFormat 테스트', ()=>{
    test('일반 날짜', ()=>{
        expect(dateFormat(new Date("2020-12-04"))).toBe("2020년 12월 4일");
    });
})
