let guest_list = ['Asad', 'Umer', 'Ameen'];
// for(let i=0; i<guest_list.length; i++){
//     console.log('Dear Mr. '+ guest_list[i]+', \n\n  it is my pleasure to invite you in a dinner party at my place on 24 of april 2024.  \n\n  thank you')
// }
let absent_guest = 'Asad';
let new_guest = 'kamran';
guest_list[0];
for (let i = 0; i < guest_list.length; i++) {
    guest_list[0] = new_guest;
    console.log('Dear Mr. ' + guest_list[i] + ', \n\n  it is my pleasure to invite you in a dinner party at my place on 24 of april 2024.  \n\n  thank you');
}
console.log(`mr. ${absent_guest} is not coming to the party.`);
console.log('good news!we have find a big table so we are inviting three more guests.');
guest_list.unshift('zia khan');
guest_list.splice(2, 0, 'bilawal');
guest_list.push('zardari');
for (let i = 0; i < guest_list.length; i++) {
    guest_list[0] = new_guest;
    console.log('Dear Mr. ' + guest_list[i] + ', \n\n  it is my pleasure to invite you in a dinner party at my place on 24 of april 2024.  \n\n  thank you');
}
export {};
