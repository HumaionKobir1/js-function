function getAverage (assignment1, assignment2, assignment3){
    const total = assignment1 + assignment2 + assignment3;
    const average = total / 3;
    return average;
}

const assign1Marks = 60;
const assign2Marks = 58;
const assign3Marks = 59;

var myAverage = getAverage(assign1Marks, assign2Marks, assign3Marks);
console.log('my average so far:', myAverage);