var v = prompt("Enter the character");

if(v =='a' || v == 'e' || v == 'i' || v == 'o' || v == 'u' || v == 'A' || v == 'E' || v == 'I' || v == 'O' || v == 'U')

{
  alert("The letter is vowel");

}

else if((v>='a' && v<= 'w') || (v>='A' && v<= 'W'))

{
 alert("The letter is consonant");
}

else{
 alert("You entered a symbol or a number");
}