let N = 7;
let relation= [[1,2],[2,5],[2,6],[1,3],[1,4],[3,7]];
let dirname = ["root", "abcd", "cs", "hello","etc", "hello", "solution"];
let result = solution(N, relation, dirname);
console.log(result);
//1 => [ 2, 3, 4 ], 2 => [ 5, 6 ], 3 => [ 7 ]

function solution(N, relation, dirname) {
    var answer = 0;

    let map = new Map();
    for(let i=0; i< relation.length; i++){
        let key = relation[i][0];
        let val = relation[i][1];
        checkAdd(key, val, map);

    }
    console.log(map);

    let path = [dirname[0]];
    // map.forEach((ele, index, arr)=>{
    //     console.log(ele, index);
    // });

    // for(mm of map){
    //     console.log(mm[0]);//key
    //     console.log(mm[1]);//value
    // }
    // console.log("map typeof>>> ",typeof map);//object
    // console.log("map.length>> ",map.length);//undefined
    // console.log(map.size);//3


    // for(let i=1; i<=map.size; i++){
        
    //     // leng = map.get(i);
    //     // console.log("map[i]>>>>>"+ map[i]);//undefined
    //     // console.log("leng>>> ", leng);//[ 2, 3, 4 ]]
    //     // console.log("leng typeof>>> ",typeof leng);//object
    //     // console.log("leng.length>> ",leng.length);
    //     // console.log("leng.size>> ",leng.size);//작동안함
    
    //     for(let j=0; j<leng.length; j++){

    //         let addTemp = dirname[map[i]-1]+dirname[leng[j]-1];
    //         // let originTemp = path()
    //         path.push(addTemp);
    //     }
        
    // }

    for(key of map.keys()){//path 배열의 인덱스는 폴더번호이다. path의 값은 폴더의 이름값 누적이다
        let arr = map.get(key);
        // console.log(arr);
        for(let j=0; j<arr.length; j++){
            if(key==1){
                // 부모 + 자식
                path[arr[j]-1]= dirname[key-1] + dirname[arr[j]-1];
            }else{
                // 이전의 누적값 + 나
                path[arr[j]-1]= path[key-1] + dirname[arr[j]-1];
            }
            

        }
    }

     // let result = Math.max(...path);
     // 최대 값을 구함
    let max=0;
    for(pp of path){
        // console.log(pp.length);
        if(max<pp.length) max = pp.length;
    }

    // let max = path.reduce((pre, item)=>{ return Math.max(pre, item.length),0})

    return max;
}

function checkAdd(key, val, map){
    if(map.has(key)){
            let temp = map.get(key);
            // console.log('temp>>>>> ', temp);
            temp.push(val);
            map.set(key,temp);
        }else{
            let temp = new Array();
            temp.push(val);
            map.set(key,temp);
        }
}


