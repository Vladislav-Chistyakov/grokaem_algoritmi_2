const myList = [1, 3, 5, 7, 9, 11, 13]

function mathFlor (num) {
    return Math.floor(num)
}

function binarySearch (arr, item) {
    let step = 1
    let low = 0
    let high = arr.length - 1
    while (low <= high) {
        let mid = mathFlor((low + high) / 2)
        let guess = arr[mid]
        if (guess === item) {
            return guess
        } else if (guess > item) {
            high = mid - 1
        } else if (guess < item) {
            low = mid + 1
        } else {
            return null
        }
        step++
    }
}

console.log(binarySearch(myList, 9))