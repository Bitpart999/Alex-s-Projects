//Initial guest list provided
const guests = {
  ANTONY: {
    title: "General",
    region: "Rome",
    dietaryPreference: "Vegetarian",
    pastGifts: ["Golden Laurel", "Chariot"]
  },
  CICERO: {
    title: "Orator",
    region: "Arpinum",
    dietaryPreference: "Omnivore",
    pastGifts: ["Scroll of Proverbs", "Quill"]
  },
  //Step 1: Adding Brutus to the object
  BRUTUS: {
    title: "Senator",
    region: "Rome",
    dietaryPreference: "Vegan",
    pastGifts: ["Silver Dagger", "Marble Bust"]
  }
};
//Step 2: Add another gift called "Golden Lyre" to Cicero pastGifts
guests.CICERO.pastGifts.push("Golden Lyre");

//Step 3: getting the region of Antony and storing it in the const antonyRegion
const antonyRegion = guests.ANTONY.region;

//Step 4: Deleting Cicero from the guest list
delete guests.CICERO;

//Step 5: Setting Antony's profile to generalProfile and setting the region to Egypt
const generalProfile = guests.ANTONY;
generalProfile.region = "Egypt";

//Question 1: The region will be updated to Egypt as we changed the value since the values can be changed but the reference cannot