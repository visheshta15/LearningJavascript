// HOF 
// they are the functions that takes other functions as arguments or return functions as their result 
//----------------------------------------------

const interviewQ = (name) => {
    if(name ==='vish'){
        return function(topic){
            console.log('my name is ', name, topic);
        }
    }else{
        return function(topic){
            console.log('my name is ', name, topic);
        }
    }
}


interviewQ('vish')('ui')
const candidate = interviewQ('kush')
candidate('reactjs')