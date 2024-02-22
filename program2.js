function romanToInt(s) {
    const romanValues = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };
    let result = 0;
    for (let i = 0; i < s.length; i++) {
        if (i < s.length - 1 && romanValues[s[i]] < romanValues[s[i + 1]]) {
            result -= romanValues[s[i]];
        } else {
            result += romanValues[s[i]];
        }
    }
    return result;
}
console.log(romanToInt("III"));      
console.log(romanToInt("LVIII"));    
console.log(romanToInt("MCMXCIV")); 
