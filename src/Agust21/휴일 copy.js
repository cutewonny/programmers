function solution(n)
{
    var answer = [];
    let min =0;
    let max = 0;

    let rest = n%7;
    let share = parseInt(n/7);
    console.log(rest, share);//6 0

    if(rest==0){
        min = share*2;
        max = share*2;

    }else if(rest == 1){
        min = share*2;
        max = share*2+1;

    }else if(rest==6){
        min = share*2 +1;
        max = (share+1)*2;

    }else{
        min = share*2;
        max = (share+1)*2;
    }

    answer= [min,max];
   
    
    return answer;
}