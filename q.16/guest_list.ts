let guest_list: string[] = ["Asad", "Umer", "Ameen "];

// for (let i = 0; i < guest_list.length; i++) {
//   console.log(
//     "Dear Mr. " +
//       guest_list[i] +
//       ", \n\n  it is my pleasure to invite you in a dinner party at my place on 24 of april 2024.  \n\n  thank you"
//   );
// }

let absent_Guest: string = "Asad";
let new_Guest: string = "kamran";
guest_list[0]= new_Guest;

for (let i = 0; i < guest_list.length; i++) {
  
  console.log(
    "Dear Mr. " +
      guest_list[0] +
      ", \n\n  it is my pleasure to invite you in a dinner party at my place on 24 of april 2024.  \n\n  thank you"
  );
}

console.log(`mr. ${absent_Guest} is not coming to the party.\n\n`);

console.log('good news !we have arranged a bigger space so we are inviting three more guests.');

guest_list.unshift('zia khan');
guest_list.splice(2, 0, 'Alam');
guest_list.push('bilawal')

for (let i = 0; i < guest_list.length; i++) {
    
    console.log(
      "Dear Mr. " +
        guest_list[i] +
        ", \n\n  it is my pleasure to invite you in a dinner party at my place on 24 of april 2024.  \n\n  thank you\n\n"
    );
  }
