verifyVotes=(votesCount)=>{
    if(votesCount.length===0){
        return 0;
    }else{
        return votesCount[0]+verifyVotes(votesCount.slice(1));
    }
}
const votes=[70000,50000,60000,80000];

console.log(verifyVotes(votes));