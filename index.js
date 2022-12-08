function gradingStudents(grades) {
let grade = [];
  for(i = 0; i < grades.length; i++){
    let soma_1 = (grades[i]) + 1;
    let soma_2 = (grades[i]) + 2;
    
    if(grades[i] < 38){
      grade.push(grades[i]);
    } else if(soma_1 % 5 === 0 > 38){
      grade.push(soma_1);
    } else if(soma_2 % 5 === 0 > 38){
      grade.push(soma_2);
    } else {
      grades[i] != soma_1 && grades[i] != soma_2;
      grade.push(grades[i]);
    }
  
}
  return grade;
}
let resultado = gradingStudents([73, 67, 38, 33]);
console.log(resultado);