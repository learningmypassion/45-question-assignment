

let guest_list :string[]=['Asad', 'Umer','Ameen'];

for(let i=0; i<guest_list.length; i++){

    console.log('Dear Mr. '+ guest_list[i]+', \n\n  it is my pleasure to invite you in a dinner party at my place on 24 of april 2024.  \n\n  thank you')
}


let absent_Guest : string= 'Asad';
let new_Guest : string= 'kamran';
for(let i=0; i<guest_list.length; i++){
guest_list[0] = new_Guest;
console.log('Dear Mr. '+ guest_list[i]+', \n\n  it is my pleasure to invite you in a dinner party at my place on 24 of april 2024.  \n\n  thank you')
}

console.log(`mr. ${absent_Guest} is not coming to the party.`);


