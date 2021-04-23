export default function yyyymmddFormat(rdate : Date){
    let date = new Date(rdate);
    let year = new Date(date).getFullYear();
    let month : number | string = (1 + date.getMonth());
    month = month >= 10 ? month : '0' + month;
    let day : number | string = date.getDate();
    day = day >= 10 ? day : '0' + day;
    return year + '-' + month + '-' + day;
}