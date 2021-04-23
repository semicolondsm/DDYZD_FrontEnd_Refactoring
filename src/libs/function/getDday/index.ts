export default function getDday(rstart : Date, rend : Date){
    let start = new Date(rstart);
    let end = new Date(rend);
    let gap = start.getTime() - end.getTime();
    return Math.floor(gap / (1000 * 60 * 60 * 24)) * -1;
}