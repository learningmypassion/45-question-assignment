"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_Name = ['admin', 'bugs bunny', 'daffy duck', 'sylvester', 'twety'];
for (let i = 0; i < user_Name.length; i++) {
    if (user_Name[i] === 'admin') {
        console.log('hello admin, would you like to use a status report');
    }
    else {
        console.log(`Hello ${user_Name[i]},thank you for logging in again.`);
    }
}
