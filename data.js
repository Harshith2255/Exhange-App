const account1 = {
    username: "Anil",
    amount: [5000,7300,6900],
    share: [3300,3650,2700],
    peerShare:[1700,3650,4200],
    peer:["Bhanu","Chaitanya","Dinesh"]
  };

const account2 = {
    username: "Bhanu",
    amount: [5000],
    share: [1700],
    peerShare:[3300],
    peer:["Anil",]
  };

const account3 = {
    username: "Chaitanya",
    amount: [7300],
    share: [3650],
    peerShare:[3650],
    peer:["Anil"]
  };

const account4 = {
    username: "Dinesh",
    amount: [6900],
    share: [4200],
    peerShare:[2700],
    peer:["Anil"]
  };


module.exports = [account1, account2, account3, account4]

