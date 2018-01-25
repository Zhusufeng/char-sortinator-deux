const sortDescendingLexicographically = (input) => {
  return input
    .split(' ')
    .sort(customSort)
    .join(' ');
};

const customSort = (a, b) => {
  console.log(a, b);
  if(a.charCodeAt(0) > b.charCodeAt(0)) {
    return -1;
  } else if (a.charCodeAt(0) === b.charCodeAt(0)) {
    let len;
    if (a.length < b.length) { // 'a' comes before 'aaa'
      len = b.length;
    } else {
      len = a.length;
    }
    console.log(len);
    for (let i = 1; i < len; i++) {
      if (a.charCodeAt(i) > b.charCodeAt(i)) {
        return -1;
      } else if (a.charCodeAt(i) === b.charCodeAt(i)) {
        if (!a[i + 1]) { // 'aa' comes before 'aaa'
          return 1;
        } else if (!b[i + 1]) {
          return -1;
        }
        continue;
      } else {
        return 1;
      }
    }
  } else {
    return 1;
  }
};

module.exports = sortDescendingLexicographically;