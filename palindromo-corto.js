function esPalindromo(cadena){
	cadena =cadena.replace(/ /gi, '');
  cadena = cadena.toLowerCase();
	return cadena === cadena.split('').reverse().join('');
  
}
document.write(esPalindromo('anitalavalatina')+ "<br/>");
document.write(esPalindromo('Anita lava la tina')+ "<br/>");
document.write(esPalindromo('hola mundo')+ "<br/>");
document.write(esPalindromo('a aaabbbbaaa a')+ "<br/>");
