function isValid(s) {
    const stack = [];
    const pairs = {
        '(': ')',
        '{': '}',
        '[': ']'
    };

    for (let char of s) {
        if (char in pairs) {
            stack.push(char);
        } else {
            const top = stack.pop();
            if (pairs[top] !== char) {
                return false;
            }
        }
    }

    return stack.length === 0;
}
console.log(isValid("()"));       
console.log(isValid("()[]{}"));   
console.log(isValid("(]"));      
