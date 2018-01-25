const postString = (input) => {
  const string = {input};

  fetch('/sort', {
    method: 'POST',
    headers: new Headers({
      'Content-Type': 'application/json'
    }),
    body: JSON.stringify(string)
  })
  .then(data => {
    return data.json();
  })
  .then(data => {
    console.log(data);
    appendData(data.sortedString);
  });
};

module.exports = postString;