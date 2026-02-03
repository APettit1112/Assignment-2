const fs = require('fs');

// Count the total amount of words in a file
function countWords(filepath) {
    const data = fs.readFileSync(filepath, 'utf8');
    const matches = data.match(/[A-Za-z']+/g);
    return matches ? matches.length : 0;
}

// Find the longest word in the file (returns the first longest, lowercased)
function findLongestWord(filepath) {
    const data = fs.readFileSync(filepath, 'utf8');
    const matches = data.match(/[A-Za-z']+/g);
    if (!matches || matches.length === 0) return '';
    let longest = matches[0];
    for (const word of matches) {
        if (word.length > longest.length) longest = word;
    }
    return longest.toLowerCase();
}

// Count the number of lines in the file (total lines)
function countLines(filepath) {
    const data = fs.readFileSync(filepath, 'utf8');
    if (data === '') return 0;
    const lines = data.split(/\r?\n/);
    return lines.length;
}

module.exports = { countWords, findLongestWord, countLines };

// Self-verification: when run directly, print analysis for sample files
if (require.main === module) {
    const files = ['data/quotes.txt', 'data/sample-text.txt'];
    for (const file of files) {
        console.log(`File: ${file}`);
        console.log('  Words:', countWords(file));
        console.log('  Longest:', findLongestWord(file));
        console.log('  Lines:', countLines(file));
        console.log('');
    }
}
