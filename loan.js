let creditLimit = 155;

const loanOut = function(amount) {
  return new Promise((resolve, reject) => {
    if (creditLimit <= 0) {
      reject(`Insufficient funds!`);
    } else if (creditLimit < amount) {
      const approvedAmount = creditLimit;
      creditLimit = 0;
      resolve(approvedAmount);
    } else if (amount <= creditLimit) {
      creditLimit -= amount;
      resolve(amount);
    }
  });
};

console.log('Asking for $150, which should be ok...');
loanOut(150)
  .then((amountReceived) => {
    console.log(`\it-> I got $${amountReceived} loan from the bank! Remaining Credit Limit: $${creditLimit}`);
  })
  .catch((err) => {
    console.log(`\it-> Error: ${err}!`);
  });

