//breakCamelCase


function solution(string) {
    var arr = string.split("");
    for(let i = 0; i < arr.length; i++){
      if(arr[i] === arr[i].toUpperCase()){
        arr.splice(i,0," ")
        i++
      }
    }
    return arr.join("")
  }


  console.log(solution('thisFuntionCouldBeHard'));
  