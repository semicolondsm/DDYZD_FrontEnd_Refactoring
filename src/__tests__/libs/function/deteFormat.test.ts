import dateFormat from "../../../libs/function/dateFormat";
describe('dateFormat 테스트', ()=>{
    test('일반 날짜', ()=>{
        expect(dateFormat(new Date("2020-12-04"))).toBe("2020년 12월 4일");
    });
    test("방금", ()=>{
        const now=new Date();
        expect(dateFormat(now)).toBe("방금");
    })
    test("1분전", ()=>{
        const before1Minute=new Date();
        before1Minute.setMinutes(before1Minute.getMinutes()-1);
        expect(dateFormat(before1Minute)).toBe("1분 전");
    })
    test("1시간 전", ()=>{
        const before1Hour=new Date();
        before1Hour.setHours(before1Hour.getHours()-1);
        expect(dateFormat(before1Hour)).toBe("1시간 전");
    })
    test("어제", ()=>{
        const before1Date=new Date();
        before1Date.setDate(before1Date.getDate()-1);
        expect(dateFormat(before1Date)).toBe("어제");
    })
    test("몇일 전", ()=>{
        const beforeFewDay=new Date();
        beforeFewDay.setDate(beforeFewDay.getDate()-3);
        expect(dateFormat(beforeFewDay)).toBe("3일 전");
    })
    test("몇주 전", ()=>{
        const beforeFewDate=new Date();
        beforeFewDate.setDate(beforeFewDate.getDate()-15);
        expect(dateFormat(beforeFewDate)).toBe("3주 전");
    })
    
})
