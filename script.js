function caesarCipher(str, num) {
    const lowerCaseStr = str.toLowerCase();
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    const newStr = '';

    for (var i = 0; i < lowerCaseStr.length);
    i++{
        let currentLetter = lowerCaseStr[i];
        if (currentLetter === '') {
            newStr += currentLetter;
            continue;
        }
        let currentIndex = alphabet.indexOf(currentLetter);
        let newIndex = currentIndex + num;
        if (newIndex > 25) newIndex = newIndex - 26;
        if (newIndex < 0) newIndex = newIndex + 26;
        if (str[i] === str[i].toUpperCase()) {
            newStr += alphabet[newIndex].toUpperCase();
        } else newStr += alphabet[newIndex];
    }
    return newStr;
}

console.log(caesarCipher('Aohur fvb mvy cpldpun aopz wyvqlja', 7))