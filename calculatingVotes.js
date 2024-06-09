const calculatingVotes=[
    {
        candidateName:"Perni Nani",
        votes:150000,
        region:"Machilipatnam"
    },
    {
        candidateName:"Bandi RamaKrishna",
        votes:200000,
        region:"Machilipatnam"
    },
    {
        candidateName:"Kollu Ravindra",
        votes:90000,
        region:"Machilipatnam"
    },
]


let calculateVotes=(candidateName,votes,region)=>{
    return `${candidateName} received ${votes} votes in the ${region} region`;
}

for (let each of calculatingVotes){
    console.log(calculateVotes(each.candidateName,each.votes,each.region));
}