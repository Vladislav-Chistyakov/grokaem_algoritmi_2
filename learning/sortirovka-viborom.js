function findSmallest(arr) {
    let smallest = arr[0]
    let smallestIndex = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < smallest) {
            smallest = arr[i]
            smallestIndex = i
        }
    }
    return smallestIndex
}

function selectionSort(arr) {
    const newArr = []
    const copiedArr = [...arr]
    for (let i = 0; i < arr.length; i++) {
        const smallestIndex = findSmallest(copiedArr)
        newArr.unshift(copiedArr[smallestIndex])
        copiedArr.splice(smallestIndex, 1)
    }
    return newArr
}

const test = [3, 4, 1, 51, 41, 2]

console.log(selectionSort(test))