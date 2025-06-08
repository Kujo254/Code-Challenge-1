function estimateTransactionFee(amountToSend) {
  const minimumFee = 10;
  const maximumFee = 70;
  const percentageRate = 0.015;

  // Calculate the raw fee
  let fee = amountToSend * percentageRate;

  // Enforce minimum and maximum bounds
  fee = Math.max(minimumFee, Math.min(fee, maximumFee));

  const totalDebited = amountToSend + fee;

  console.log(`Sending KES ${amountToSend}:`);
  console.log(`Calculated Transaction Fee: KES ${fee}`);
  console.log(`Total amount to be debited: KES ${totalDebited}`);
  console.log("\nSend Money Securely!");
}

// Prompt and validate input
const userInput = prompt("Unatuma Ngapi? (KES):");
const amountToSend = parseFloat(userInput);

if (isNaN(amountToSend) || amountToSend <= 0) {
  console.log("Tafadhali ingiza kiasi halali.");
} else {
  estimateTransactionFee(amountToSend);
}
