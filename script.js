function maskEmail(email){
  let mail=email.indexOf('@')
  let newEmail =email.slice(mail);
  let firstWord= email[0]
  let lastWord=email[mail-1]
  
  let star ="*"
  let n =mail-2
  let rep = star.repeat(n)
    return firstWord +rep+lastWord + newEmail
}

let email ="apple.pie@example.com";
console.log(maskEmail(email));
email="freecodecamp@example.com"
console.log(maskEmail(email));
email="info@test.dev"
console.log(maskEmail(email));
email="user@domain.org"
console.log(maskEmail(email));


