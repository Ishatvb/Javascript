function myFun(val){
    console.log("hello" + val);
}
function debounce(callback, val, delay){
    let timerId;
    return function(){
        clearTimeout(timerId);
        timerId= setTimeout(() => {
            function(){callback(val);}
        }, delay);
    }
}