 void main(List<String> args) {
   //Methods of strings
  //trim(): returns the string wihtout any leading and trailing wide space
  //compareTo(): compares one object to another
  //replaceAll(): Replaces all substrings that match the
  //split():
  //tostring():
  //substring():
  // single", double" and triple"

  //string properties
  String str = "Lagos State";
  print(str.isEmpty);
  print(str.isNotEmpty);
  print("The length of the string is: ${str.length}");


  String address1 = "Enugu";//here E is capital
  String address2 = "LaGos";//Here L and G are capital
  print("Address1 in uppercase: ${address1.toUpperCase()}");
  print("Address1 in lowercase: ${address1.toLowerCase()}");
  print("Address2 in uppercase: ${address2.toUpperCase()}");
  print("Address2 in lowercase: ${address2.toLowerCase()}");
 print("");

String item1 = "Book";
String item2 = "Water";
String item3 = "violated";
String item4 = "Violated";

print("Comparing item 1 to item2: ${item1.compareTo(item2)}");
print("Comparing item 2 to item3: ${item2.compareTo(item3)}");
print("Comparing item 3 to item2: ${item3.compareTo(item2)}");
print("Comparing item 3 to item4: ${item3.compareTo(item4)}");

//Assignment
//1.Write a program that reverses a string input(for example: a user enters "hello" and your program prints out 'oleh'
//Hint: you'll need split(), reversed and join())
//2. Write a program that capitalizes the first letter of a string input
//need uppercase and substring
}
 