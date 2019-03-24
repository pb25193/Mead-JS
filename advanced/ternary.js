const age = 2;

const message = age>=18?"you can vote":"fuck you underage";

console.log(message);

const showPage = age>=18?"we are showing u the voting page":`sorry cannot show u any pages today.. come back in ${18-age} years`;

console.log(showPage);

const team = ["gabresh","pagresh","raavan","sukhi","naara"];

console.log(team.length<=4?`team size is: ${team.length}`:"too big, kick someone");