const appendData = (sortedInput) => {
  const tr = document.createElement("tr");
  tr.innerHTML = `<td>${sortFormInputValue}</td><td>${sortedInput}</td>`
  sortTable.appendChild(tr);
};

module.exports = appendData;