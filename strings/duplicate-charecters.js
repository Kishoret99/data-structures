function checkDuplicate(word) {
    let wArray = word.split("");
    let wDistinctArray = Array.from(new Set(wArray));
    wDistinctArray.map(ele => {
        if(wArray.indexOf(ele) > -1) {
            
            wArray.splice(wArray.indexOf(ele, 1))
            console.log(wArray)
        }
    })
    console.log(wDistinctArray)
    console.log(wArray)
}

function printDuplicates(word) {
    let wArray = word.split('');
    wArray.map(ele => {
        wArray.indexOf(ele) > -1 ? wArray
    })
}
checkDuplicate('abacdded');
