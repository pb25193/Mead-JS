let studentGrade = function (score, maxScore){
    let percent = score*100/maxScore;
    let grade;
    if(percent > 90){
        grade = 'A';
    } else if (percent > 80) {
        grade = 'B';
    } else if (percent > 70) {
        grade = 'C';
    } else if (percent > 60) {
        grade = 'D';
    } else {
        grade = 'F';
    }
    return `This student has scored ${percent}% on this test, and hence his grade is ${grade}`;
}

score = 11;
max = 20;

announcement = studentGrade(score, max);

console.log(announcement);