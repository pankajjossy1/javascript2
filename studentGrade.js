//Student Grade
function testGrade(score){
    switch (true) {
      case score >= 90 && score < 100:
        console.log("Grade S");
        break;
      case score >= 80 && score < 90:
        console.log("Grade A");
        break;
      case score >= 70 && score < 80:
        console.log("Grade B");
        break;
      case score >= 60 && score < 70:
        console.log("Grade C");
        break;
      case score >= 50 && score < 60:
        console.log("Grade D");
        break;
      case score >= 40 && score < 50:
        console.log("Grade C");
      case score >= 0 && score < 40:
        console.log("Fail");
      default:
          console.log("Invalid Marks");
   }
}

testGrade(65);