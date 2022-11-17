void main() {
  String fName = "Sophia";
  String LName = "Lisa";
 
//  print("First Name: $fName \n Last name : $LName");
 // num, boolean, double

  num firstNumber = 80;
  num secondNumber =50;

  // print("first number is $firstNumber \n second number is $secondNumber");
  // print("the sum of the variables are {firstNumber + secondNumber} ");
  num add= firstNumber + secondNumber;
  // print("The sum of the $firstNumber and $secondNumber is $sum");
  // print("The sum of the $firstNumber and $secondNumber is ${firstNumber + secondNumber}");
  // print("The sum of the $firstNumber and $secondNumber is ${firstNumber - secondNumber}");
  // print("The sum of the $firstNumber and $secondNumber is ${firstNumber * secondNumber}");
  // print("The sum of the $firstNumber and $secondNumber is ${firstNumber / secondNumber}");

  bool valid = firstNumber > secondNumber;
  // print("the value is $valid");

 //single line comment

  /**
   * this 
   * is 
   * used for multi-line comment
   */

    ///This is a documentation line ///
    
   
   // Num1 += 2; 
   //Num1 = Num1 + 1;
  //shorcut to increase value by one is ++ and or +=
   // print(Num1++);
     var Num1 = 5;

    var preNum;
    var postNum;

    //prettium = ++1;

    postNum = Num1++;
   print(postNum);

    //printNum = ++1;

    preNum = Num1 ++;
     print(preNum);
  
  // create a program that will print all ur data.. First Name, Surname, Age , Gender, Height. Add 10 years to your age and add 3.2feet to ur height

  var festName = "Anisiuba";
  print("Hey, my first name is $festName" );

  var surName = "Mmesoma";
  print("and surname is $surName so that means my name is $festName $surName" );

  var age = 20;
 print("I am $age years old" );
    age += 10;
print("In ten years time I will be $age years old");

  var gender = 'F';
 print("My gender is $gender" );

  double height = 5.7;
  String word = 'feet';
  print("I am this tall : $height  $word");
  height += 3.2;
  print("But I want to be $height in height");

//var firstNumber;
  //var secondNumber;

  //5=firstNumber = 5;
  //secondNumber = 7;


 //print(firstNumber + secondNumber);
 //print(firstNumber);
//  print(secondNumber);
//  print("The first number is $firstNumber, while the second number is $secondNumber");
//  print("The first number is" + firstNumber);

// we are yet to do casting!!!
 
 int num1 = 10, num2 = 3;

 //performing maths calculation
 int sum = num1+num2;//addition
 int diff = num1-num2; //SUBTRACTION
 int unaryMinus = -num1; //unary minus
 int mul = num1*num2;//multiplication
 double div =num1/num2;//division
 int div2 =num1~/num2;//integer division
 int mod = num1%num2;//show remainder

 //Printing results
 print("The addition is $sum");
 print("The subtraction is $diff");
 print("The unary minus is $unaryMinus");
 print("The multiplication is $mul");
 print("The division is $div");
 print("The integer division is $div2");
 print("The modulus is $mod");
}