//create a variable and set it to either true or false
let isPrepared=true;
const check=new Promise(
    (reject,resolve)=>{
        if(isPrepared){
            const result={
                exam:"Passed",
                grade:"A"
            }
            resolve(result)
        }else{
            const fail=new Error("Failure")
            reject(fail)

        }
    }
);
//chaining a promise
const showOff=function(result){
    const message=`Hey i ${result.exam} my Exams and got grade${result.grade} which is a First Class`
    console.log(message);
    return Promise.resolve(message);
}
//consuming the promise
const checkResults=function(){
    willPass
    .then(showOff)
    .then(
        (fulfilled)=>{
            console.log(fulfilled)
        }
    ).catch(
        (error)=>{
            console.log(error.message);
        }
    )
}
checkResults();
    