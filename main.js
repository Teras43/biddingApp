// Variables
let all1Bids = [];
let all2Bids = [];

// Functions
function addTotalBids() {
    let totalBids = [];
    let mathMaxBids = Math.max(...all1Bids, ...all2Bids);
    totalBids.push(mathMaxBids);
    console.log(totalBids);
    document.getElementById('totalBid').innerHTML = '$ ' + totalBids;
}

function user1Bids() {
    let bid1Amount = document.getElementById("user1Bids").value;
    all1Bids.push(bid1Amount);
    document.getElementById("user1Bids").value = '';
    addTotalBids();
}

function user2Bids() {
    let bid2Amount = document.getElementById("user2Bids").value;
    all2Bids.push(bid2Amount);
    document.getElementById("user2Bids").value = '';
    addTotalBids();
}