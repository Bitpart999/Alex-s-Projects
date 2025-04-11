const randomDecimal = Math.random(); // step 1
const range = 33 - 3 + 1; //step 2
//Question 1 : to offset the full range of possibilities from the difference 
const randomRange = randomDecimal * range;
//Question 2: its multiplying the range of numbers that we need by a random number from the Math.random
const roundedInt = Math.floor(randomRange);
//Question 3: we use floor because it rounds it down everytime instead of possibly rounding up
const shiftValue = roundedInt + 3; //step 5 
//Question 4: because the number is between 3 and 33 the numbers needed to be shifted up 3 to get from 0 to 3 floor
