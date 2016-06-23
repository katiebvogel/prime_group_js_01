var atticus = ["Atticus", "2405", "47000", 3];
var jem = ["Jem", "62347", "63500", 4];
var boo = ["Boo", "11435", "54000", 3];
var scout = ["Scout", "6243", "74750", 5];

var employees = [atticus, jem, boo, scout];

var finalArray= [];
  function addArray(empArray) {
    var finalArray= [];
    for (var i = 0; i < employees.length; i++) {
      finalArray.push(createEmp(empArray[i]));
    }

  for (var i = 0; i < finalArray.length; i++) {
    console.log(finalArray[i]);
  }
  return finalArray;
}
addArray(employees);


  function createEmp(nameArray) {
    var newEmpArray = [];
    newEmpArray[0] = nameArray[0];
    newEmpArray[1] = bonus(nameArray);
    newEmpArray[3] = Math.round(newEmpArray[1]*nameArray[2]);
    newEmpArray[2] = newEmpArray[3] + parseInt(nameArray[2]);
    newEmpArray[1] = newEmpArray[1]*100 + '%';

    return newEmpArray;
  }

  function bonus(nameArray) {
    var totalBonus = 0;
    if(nameArray[3] <= 2) {
      totalBonus += 0;
    } else if (nameArray[3] ===3){
      totalBonus +=.04;
    } else if (nameArray[3]=== 4){
      totalBonus += .06;
    } else if(nameArray[3] === 5) {
      totalBonus += .1;
    }
    return totalBonus;
  }
