const text = "Я пишу ОКР у меня 5 вариант";

function countGlasny(str) {
    const glasny = "аеёиоуыэюяaeiouy";
    const result = {};
    const lowerStr = str.toLowerCase();

    for (let char of lowerStr) {
        if (glasny.includes(char)) {
            result[char] = (result[char] || 0) + 1;
        }
    }

    return result;
}
const vowelCounts = countGlasny(text);
console.log(vowelCounts);