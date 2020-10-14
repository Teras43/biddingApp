// Variables
let all1Bids = [];
let all2Bids = [];
let totalBids = [];
let highestTotalBid = totalBids[0] || null;

// Functions
function addTotalBids() {
    let mathMaxBids = Math.max(...all1Bids, ...all2Bids);
    totalBids.push(mathMaxBids);
    function findHighest(totalBids) {
        let number = null;
        for (let i = 0; i < totalBids.length; i++) {
            number = totalBids[i];
            highestTotalBid = Math.max(highestTotalBid, number);
            }
            return highestTotalBid;
        }
    findHighest(totalBids);
    document.getElementById('totalBid').innerHTML = '$ ' + highestTotalBid;
    localStorageSave();
}
function localStorageSave() {
    localStorage.setItem("highestTotalBid", JSON.stringify(highestTotalBid));
}

function localStorageGet() {
    let dataGet = JSON.parse(localStorage.getItem("highestTotalBid"));
    highestTotalBid.push(dataGet);
    console.log("Grab successful!")
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

window.onload = localStorageGet;
// window.onload = localStorage.clear();