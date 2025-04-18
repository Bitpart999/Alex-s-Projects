// Initial guest list
const guests = ["ANTONY", "CICERO", "CASSIUS", "CLEOPATRA"];

// Step 1: Add BRUTUS to the beginning
guests.unshift("BRUTUS"); // BRUTUS is now the most honored guest

// Step 2: Add two more guests to the end
guests.push("AUGUSTUS", "LUCIA");

// Step 3: Remove CASSIUS if present
const indexToRemove = guests.indexOf("CASSIUS");
if (indexToRemove !== -1) {
  guests.splice(indexToRemove, 1);
}

// At this point, guests = ["BRUTUS", "ANTONY", "CICERO", "CLEOPATRA", "AUGUSTUS", "LUCIA"]

// Step 4: Separate the honored guest (BRUTUS)
const honoredGuest = guests[0]; // BRUTUS
const guestsToSort = guests.slice(1); // everyone else

// Step 5: Sort the rest of the guests alphabetically
guestsToSort.sort();

// Step 6: Combine the honored guest with the sorted list
const finalGuestList = [honoredGuest, ...guestsToSort];

// Output result
console.log(finalGuestList);
