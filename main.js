// Variables
let all1Bids = [];
let all2Bids = [];
let totalBids = [];
let highestTotalBid = totalBids[0] || [];

// Functions
function findHighest(totalBids) {
    let number = null;
    for (let i = 0; i < totalBids.length; i++) {
        number = totalBids[i];
        highestTotalBid = Math.max(highestTotalBid, number);
        }
    return highestTotalBid;
}

function addTotalBids() {
    let mathMaxBids = Math.max(...all1Bids, ...all2Bids);
    totalBids.push(mathMaxBids);
    findHighest(totalBids);
    document.getElementById('totalBid').innerHTML = '$ ' + highestTotalBid;
    localStorageSave();
};

function localStorageSave() {
    localStorage.setItem("highestTotalBid", JSON.stringify(highestTotalBid));
};

function localStorageGet() {
    let dataGet = JSON.parse(localStorage.getItem("highestTotalBid"));
    highestTotalBid.push(dataGet);
    document.getElementById('totalBid').innerHTML = '$ ' + highestTotalBid;
};

function user1Bids(event) {
    if (event.type === "keydown" && event.keyCode !== 13) return;
    let bid1Amount = document.getElementById("user1Bids").value;
    all1Bids.push(bid1Amount);
    document.getElementById("user1Bids").value = '';
    addTotalBids();
};

function user2Bids(event) {
    if (event.type === "keydown" && event.keyCode !== 13) return;
    let bid2Amount = document.getElementById("user2Bids").value;
    all2Bids.push(bid2Amount);
    document.getElementById("user2Bids").value = '';
    addTotalBids();
};

localStorageGet();