const votes=[{
    candidateName:"Vamsi",
    votes:50
},
{
    candidateName:"Suresh",
    votes:40
},
{
    candidateName:"Jagan",
    votes:20
}
];
let threshold=20;
const filtercandidates=(candidateVotes,thresholdVotes)=>candidateVotes.filter(candidates=>candidates.votes>threshold).map(eachCandidate=>eachCandidate.candidateName)
console.log(filtercandidates(votes,threshold))

