const postString = () => {
  const testObj = {
    input: 'apple bear cat chat cake dear'
  };

  fetch('/sort', {
    method: 'POST',
    headers: new Headers({
      'Content-Type': 'application/json'
    }),
    body: JSON.stringify(testObj)
  })
  .then(data => {
    return data.json();
  })
  .then(data => {
    console.log(data);
  });
};