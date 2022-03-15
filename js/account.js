const historyList = document.querySelector(".history-list");
const amount = document.querySelector(".amount");
const memo = document.querySelector(".memo");
const totalAmount = document.querySelector(".total-amount");
const totalIncome = document.querySelector(".total-income");
const totalExpend = document.querySelector(".total-expend");
const typeSelect = document.querySelector("#type-select");
const typeIncome = document.querySelector("#type-income");
const typeExpand = document.querySelector("#type-expand");
const inputContents = document.querySelector(".input-contents");
const addList = document.querySelector(".add-list");
const addBtn = document.querySelector(".add-btn");
const saveBtn = document.querySelector(".save-btn");
const closeBtn = document.querySelector(".close-btn");

let icome = 0;
let expend = 0;
let total = icome + expend;

window.addEventListener("DOMContentLoaded", function () {
    createTotalContents();
});

addBtn.addEventListener("click", clickAddList);
closeBtn.addEventListener("click", closeOptionBoxes);
saveBtn.addEventListener("click", createHistoryList);

function createTotalContents() {
    totalAmount.insertAdjacentHTML("beforeend", total);
    totalIncome.insertAdjacentHTML("beforeend", icome);
    totalExpend.insertAdjacentHTML("beforeend", expend);
}

function countAccount() {}

function clickAddList() {
    addBtn.classList.add("d-none");
    inputContents.classList.remove("d-none");
}

function closeOptionBoxes() {
    addBtn.classList.remove("d-none");
    inputContents.classList.add("d-none");
}

function clickHistoryCategory() {}

function createHistoryList() {
    closeOptionBoxes();
    let list = ``;
    let amountVal = amount.value;
    let memoVal = memo.value;

    list += `<li><div class="list-amount">${amountVal}</div><div class="list-memo">${memoVal}</div><div class="btn delete"><i class="fas fa-trash-alt"></i></div></li>`;

    historyList.insertAdjacentHTML("beforeend", list);
}

function AmountCommas(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
