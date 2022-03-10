const historyList = document.querySelector(".history-list");
const amount = document.querySelector(".amount");
const memo = document.querySelector(".memo");
const totalAmount = document.querySelector(".total-amount");
const totalIncome = document.querySelector(".total-income");
const totalExpend = document.querySelector(".total-expend");
const typeSelect = document.querySelector("#type-select");
const typeIncome = document.querySelector("#type-income");
const typeExpand = document.querySelector("#type-expand");
const incomeOption = ["월급", "용돈", "지원금", "저축", "기타"];
const expendOption = ["쇼핑", "여가생활", "교통/차량", "식비", "기타"];
let amountVal = amount.value;
let memoVal = memo.value;
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

function countAccount() {}

function chooseTypeAndOption() {
    const options = ``;
    if (typeIncome.checked) {
        for (let i = 0; i <= incomeOption.length; i++) {
            options += `<option value="${incomeOption[i]}">${incomeOption[i]}</option>`;
        }
    } else if (typeExpand.checked) {
        for (let i = 0; i <= expendOption.length; i++) {
            options += `<option value="${expendOption[i]}">${expendOption[i]}</option>`;
        }
    }
    typeSelect.insertAdjacentHTML("afterend", options);
}

function clickHistoryCategory() {}

function createHistoryList() {
    const list = ``;
    list += `<li><div class="list-amount">${amountVal}</div><div class="list-memo">${memoVal}</div><button class="btn delete"></button></li>`;

    historyList.insertAdjacentHTML("afterend", list);
}

function AmountCommas(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
