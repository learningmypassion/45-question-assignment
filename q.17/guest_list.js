let guest_list = ['Asad', 'Umer', 'Ameen'];
// for(let i=0; i<guest_list.length; i++){
//     console.log('Dear Mr. '+ guest_list[i]+', \n\n  it is my pleasure to invite you in a dinner party at my place on 24 of april 2024.  \n\n  thank you')
// }
let absent_guest = 'Asad';
let new_guest = 'kamran';
guest_list[0];
// for(let i=0; i<guest_list.length; i++){
// guest_list[0] = new_guest;
// console.log('Dear Mr. '+ guest_list[i]+', \n\n  it is my pleasure to invite you in a dinner party at my place on 24 of april 2024.  \n\n  thank you')
// }
console.log(`mr. ${absent_guest} is not coming to the party.`);
console.log('good news!we have find a big table so we are inviting three more guests.');
//added three guests to array
guest_list.unshift('zia khan');
guest_list.splice(2, 0, 'bilawal');
guest_list.push('zardari');
//invitees guest list
for (let i = 0; i < guest_list.length; i++) {
    guest_list[0] = new_guest;
    console.log('Dear Mr. ' + guest_list[i] + ', \n\n  it is my pleasure to invite you in a dinner party at my place on 24 of april 2024.  \n\n  thank you');
}
//message of sorry for  guestlist
console.log('\nsorry we can not arrange big table,so only two people will be invited.');
//remove 4 guests ,only two should remain
while (guest_list.length > 2) {
    let remove_guest_list = guest_list.pop();
    console.log(`sorry mr.${remove_guest_list}, you are not invited for dinner.`);
}
//invite only two remaining
for (let i = 0; i < guest_list.length; i++) {
    guest_list[0] = new_guest;
    console.log('Dear Mr. ' + guest_list[i] + ', \n\n  you are still invited  \n\n  thank you');
}
//remove all guests from array
guest_list.splice(0, 2);
console.log(guest_list);
export {};
