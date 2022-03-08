const totalAmount = document.querySelector(".total-amount");
const totalIncome = document.querySelector(".total-income");
const totalExpend = document.querySelector(".total-expend");
const typeIncome = document.querySelector("#type-income");
const typeExpand = document.querySelector("#type-expand");
const incomeOption = ["월급", "용돈", "지원금", "저축", "기타"];
const expendOption = ["쇼핑", "여가생활", "교통/차량", "식비", "기타"];
let icome = 0;
let expend = 0;
let total = icome + expend;

window.addEventListener("DOMContentLoaded", function () {
    createTotalContents();
});

function createTotalContents() {
    totalAmount.insertAdjacentHTML("beforeend", total);
    totalIncome.insertAdjacentHTML("beforeend", icome);
    totalExpend.insertAdjacentHTML("beforeend", expend);
}

function chooseTypeAndOption() {}

function clickHistoryCategory() {}

function createHistoryList() {}

function AmountCommas(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
