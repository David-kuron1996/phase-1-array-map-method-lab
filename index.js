const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  return tutorials.map(tutorial => {
    // Split the string into words
    const words = tutorial.split(' ');
    
    // Capitalize the first letter of each word
    const titleCasedWords = words.map(word => {
      // Handle empty strings or strings with one character
      if (word.length === 0) return word;
      if (word.length === 1) return word.toUpperCase();
      
      // Capitalize first letter and keep the rest as is
      return word.charAt(0).toUpperCase() + word.slice(1);
    });
    
    // Join the words back into a string
    return titleCasedWords.join(' ');
  });
};
