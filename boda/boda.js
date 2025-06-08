function calculateBodaFare(distanceInKm) {
  const baseFare = 50;
  const chargePerKm = 15;

  const distanceFare = distanceInKm * chargePerKm;
  const totalFare = baseFare + distanceFare;

  console.log(`Uko kwote? Io ni ${distanceInKm} km:`);
  console.log(`Ukikalia Pikipiki: KES ${baseFare}`);
  console.log(`Mpaka Uko: KES ${distanceFare}`);
  console.log(`Total: KES ${totalFare}`);
  console.log("\nPanda Pikipiki!");
}

// ✅ Prompt appears when you open index.html in browser
const userInput = prompt("Unafika wapi Mkubwa? Kilometer ngapi?");
const distanceInKm = parseFloat(userInput);

if (isNaN(distanceInKm) || distanceInKm <= 0) {
  console.log("Tafadhali ingiza umbali halali kwa kilomita.");
} else {
  calculateBodaFare(distanceInKm);
}
