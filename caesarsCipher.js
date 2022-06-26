function caesarCipher(str) {

    let strArr = str.split("");
    //console.log(strArr);
    let strArrTrans = [];

    for(let i = 0; i < strArr.length; i++){
        if(str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 77 ){
           strArrTrans.push(String.fromCharCode(str.charCodeAt(i) + 13)) ;
        }else if(str.charCodeAt(i) >= 78 && str.charCodeAt(i) <= 90 ){
           strArrTrans.push(String.fromCharCode(str.charCodeAt(i) - 13));
        }else if(/\W/.test(strArr[i])){
            strArrTrans.push(strArr[i]);

        }
    }

    return strArrTrans.join("");
  }
  
 let result = caesarCipher("ZNA ZNQR");
 console.log(result);