export function isEmpty(value) {
  return value.trim() === "";
}

export function isInstagramId(value) {
  // start with    .       --> .fatima   fatima.                      no
  // have two dot  ..      --> ..fatima    fati..ma   fatima..        no
  // a-zA-Z0-9._   valid    ( .  between characters )  fati.71a   f.fs22   _fat.12_    ok

  const regex = /^(?!.*\.\.)(?!.*\.$)[a-zA-Z0-9][a-zA-Z0-9._]{0,29}$/;
  const result = regex.test(value);
  return result;
}

export function isText(value) {
  //   const regex = /^[a-zA-Z0-9\s]{4,}$/; // اینجا کاربر 4 تا اسپیس بزنه خطا نمیده بهش '    '   --> valid

  // حتما باید یک کاراکتر یا عدد بزنه  ' a ' , 'fati  ' , '  fati'   --> valid
  const regex = /^(?=.*[a-zA-Z0-9])[a-zA-Z0-9\s]{4,}$/;
  const result = regex.test(value);
  return result;
}
