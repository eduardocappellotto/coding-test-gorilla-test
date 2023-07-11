function minRemovalsForMexUpdate(N: number, ARR: number[]): number {
    ARR.sort((a, b) => a - b);

    let mex = findMexValue(ARR);

    if (mex > Math.max(...ARR)) {
        return -1
    }

    if (mex > 0) {
        // Means it got zeroes, so we should just delete them.
        return ARR.filter(num => num === 0).length;
    }

    if (mex === 0) {
        return 0;
    }
    return -1


}


function findMexValue(array: number[]): number {
    const set = new Set(array);

    let mex = 0;
    while (set.has(mex)) {
        mex++;
    }

    return mex;
}



// Since i was running plain ts in terminal with no tsconfig.json, ive added this 
declare var console: {
    log(message?: any, ...optionalParams: any[]): void;
};

// I dont remember 100% the challenge constraints, so ive tried to setup multiple examples.

const example = minRemovalsForMexUpdate(5, [0, 1, 2, 3, 4, 6]);
console.log(example, 'expected value: 1 (remove number 0)');

const example1 = minRemovalsForMexUpdate(5, [1, 2, 3, 4, 6]);
console.log(example1, 'expected value: 0 (MEX its already the smaller possible, 0)');

const example2 = minRemovalsForMexUpdate(5, [0, 0, 1, 2, 3, 4]);
console.log(example2, 'expected value: 2 (remove the 2 occurrences of number 0)');

const example3 = minRemovalsForMexUpdate(5, [0, 1, 1, 2, 3, 4, 6]);
console.log(example3, 'expected value: 1 (remove 1 occurrence of number 0)');

const example4 = minRemovalsForMexUpdate(5, [0, 1, 2, 3, 4, 5, 6]);
console.log(example4, 'expected value: -1 (current MEX greater than the biggest value)');