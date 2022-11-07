//- Input : a list of numbers (1,2,3 e.g.)
//- Output : print all permutations of these numbers
//  - 123/132/213/231/312/321
//- Conditions : 
// - We do not know the size of the list, it can be any
//- No duplicated number in the list
//- Fewer steps and less code is better

const permutations = (arr) => {
    let output = [];
    const buildCombination = (current, remaining) => {
        if (remaining.length === 0) {
            output.push(current);
            return
        }
        for (let i = 0; i < remaining.length; i++) {
            buildCombination([...current, remaining[i]], [...remaining.slice(0,i), ...remaining.slice(i + 1)])
        }
    }
    buildCombination([], arr)
    return output
}
