const appendData = (sortedInput) => {
  const sortTable = document.getElementById('sort-table');
  const tr = document.createElement("tr");
  tr.innerHTML = `<td>${sortFormInputValue}</td><td>${sortedInput}</td>`
  sortTable.appendChild(tr);
  return tr;
};

module.exports = appendData;