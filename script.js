const sentence = "I love learning JavaScript"
const words = sentence.split(" ");
console.log(words);

for (let i = 0; i < words.length ; i++) {
    console.log(words[i].length);
    
}

for (let i = 0; i < words.length ; i++) {
    if (words[i].length >=5) {
    words[i] = "long word";
} else {
   words[i] = "small word";
    
}
}
console.log(words.join(" "));






count = 0

while (words.includes("a")) {
    console.log(`${count}`); 
    count++
    
}






words1 = '';

do {
    words1 = words
    
} while (words <=4 );
console.log(words1);