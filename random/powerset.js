function powerSet(set, subset = [], allSets= [], start = 0) {
    for(let i = start; i < set.length; i++) {
        subset.push(set[i]);
        if(subset.length > set.length) return;
        allSets.push([...subset]);
        powerSet(set, subset, allSets, i+1);
        subset.pop();
    }
    return allSets;
}

function printAllCombinations(string) {
    const set = powerSet(string.split(''));
    console.log(set.length);
    console.log(set);
}

printAllCombinations('ksai');

// (choiceset, choice, solut)