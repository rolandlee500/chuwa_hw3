import { tableInfo, list, dropDownList } from "./data.js";

const table = document.getElementById("tableQ1");

//insert table header
let tableRow = document.createElement("tr");
// for (const item of tableInfo.tableHeader) {
//   const tableHeader = document.createElement("th");
//   tableHeader.textContent = item;
//   tableRow.appendChild(tableHeader);
// }

tableInfo.tableHeader.forEach(item => {
  const tableHeader = document.createElement("th");
  tableHeader.textContent = item;
  tableRow.appendChild(tableHeader);
})
table.appendChild(tableRow);

//insert table data
// for (const item of tableInfo.tableContent) {
//   tableRow = document.createElement("tr");
//   for (const data of Object.values(item)) {
//     const tableData = document.createElement("td");
//     tableData.textContent = data;
//     tableRow.appendChild(tableData);
//   }
//   table.appendChild(tableRow);
// }
tableInfo.tableContent.forEach(item => {
  tableRow = document.createElement("tr");
  for (const data of Object.values(item)) {
    const tableData = document.createElement("td");
    tableData.textContent = data;
    tableRow.appendChild(tableData);
  }
  table.appendChild(tableRow);
})

const ul = document.getElementById("ulQ2");
const ol = document.getElementById("olQ2");
// for (const item of list) {
//   const listItem = document.createElement("li");
//   listItem.textContent = item;
//   const listItem2 = document.createElement("li");
//   listItem2.textContent = item;
//   ul.appendChild(listItem);
//   ol.appendChild(listItem2);
// }
list.forEach(item => {
  const listItem = document.createElement("li");
  listItem.textContent = item;
  const listItem2 = document.createElement("li");
  listItem2.textContent = item;
  ul.appendChild(listItem);
  ol.appendChild(listItem2);
})

const select = document.getElementById("cities");
// for (const item of dropDownList) {
//   const option = document.createElement("option");
//   option.value = item.value;
//   option.text = item.content;
//   select.appendChild(option);
// }

dropDownList.forEach(({value, content}) => {
  const option = document.createElement("option");
  option.value = value;
  option.text = content;
  select.appendChild(option);
})