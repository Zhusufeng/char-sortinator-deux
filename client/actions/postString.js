const postString = (input) => {
  const string = {
    // input: 'aa aaa aaaa1 aaaa2 bear cat chat cake dear eat1 eat2 a apple'
    // input: 'a aa aaa aaaa1 aaaa2'
    input
  };

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
  });
};