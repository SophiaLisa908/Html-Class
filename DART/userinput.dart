import 'dart:io';
void main() {
  //string User Input
  // print("Enter your name:");
  // String? name = stdin.readLineSync();
  // print("The entered name is ${name}");

  // //Integer User Input
  // print("Enter first number: ");
  // int? intNumber = int.parse(stdin.readLineSync()!);
  // print("The entered integer is ${intNumber}");

  // print("Enter second number: ");
  // int? intnumber = int.parse(stdin.readLineSync()!);
  // print("The entered integer is ${intnumber}");

  // int sum2 = intNumber + intnumber;
  // print("The sum of the integers are ${sum2}");

// F =m(v-u)/t
print ("Enter a mass value:");
double m = double.parse (stdin.readLineSync()!);
print ("Enter an initial velocity value:");
double v = double.parse (stdin.readLineSync()!);
print ("Enter a final velocity value:");
double u = double.parse (stdin.readLineSync()!);
print ("Enter a time value:");
double t = double.parse (stdin.readLineSync()!);

double F = m *(v-u)/t;
print("The result of force is ${F}");

  //Floating Point Input
  // print("Enter a floating number");
  // double floatNumber = double.parse(stdin.readLineSync()!);
  //   print("The entered num is ${floatNumber}");

  
}
