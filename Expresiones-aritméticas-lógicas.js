//Expresiones aritméticas y lógicas

(7*(10-5)%3*4+9) // 7 por (10-5) mod 3 por 4 más 9.
/*En las expresiones hay operadores y operandos
Los operadores son símbolos para hacer operaciones como multiplicación, división, suma, resta. mod, etc. Mod es módulo y es el residuo de la división
Los operandos son los números, constantes o variables. 

Antes de evaluar la expresión debemos tener en cuenta las  llamadas reglas de precedencia, orden de las operaciones o reglas de prioridad 
( ) --parentésis ------- mayor
^ --potencia
*, /, mod, div-- multiplicación, división real, módulo, división entera (En javascript no existe la división real, solo entera y se usa el s{ímbolo /. Para el módulo se usa %)
+, - más y menos -----menor
Siempre se evalúa de izquierda a derecha

Ejercicio 1: (7*(10-5)%3*4+9)  
En la expresión primero resolvemos (10-5):
(7* 5 mod 3) * 4+9
Luego resolvemos la multiplicación dentro del paréntesis:
(35 mod 3) * 4+9
Después realizamos el módulo dentro del paréntesis 35/3=11 y su residuo es 2, esto es el módulo:
2 * 4+9
Hacemos la multiplicación:
8 + 9
Queda hacer la suma:
17 - Resultado
*/

10>5 and ( not (10<9)) or 3<=4 // 10 es mayor a 5 and not 10 menor a 9 or 3 menor o igual a 4. 
/* En esta expresión booleana hay que tomar en cuenta que hay operadores lógicos y relacionales.
Reglas de jerarquía: 
not ------------------------------- mayor. En javascript se usa !
> ,>=, < <= -- mayor, mayor igual, menor, menor igual que.
and -- y. En js se usa &&.
or -- o. En js se usa ||.-----------menor.

Para usar los operadores relacionales && y || es necesario conocer las tablas de verdad. 
Además es importante decir que al usar operadores lógicos falso es menor a verdadero. 
Ejemplo: 
f > v ---- falso es mayor que v --- falso. 

Ejercicio 2: 10>5 and ( not(10<9)) or 3<=4
En javascript se escribe así 10>5 && (!(10<9)) || 3<=4
Primero evaluamos si 10 > 5
verdadero.
Luego evaluamos si 10<9
falso
Y evaluamos si 3<=4
Entonces, la expresión va así: verdadero and (not falso) or verdadero. 
Not falso, según las tablas de verdad es verdadero, entonces la expresión sería:
verdadero && verdadero or verdadero.
Luego evaluamos a través de las tablas de verdad verdadero and verdadero:
Esto nos da verdadero. La expresión va así: verdadero or verdadero 
El resultado de verdadero or verdadero es:
Verdadero -- true.

Ejercicio 3: f > (30==30)
Se evalúa si 30 es igual a 30, esto es verdadero:
f > v
Evalúamos si falso es mayor que verdadero, esto es:
f
 */

//Eas por todo lo anterior  que debemos tener cuidado al escribir las expresiones, pues no tener a consideración la jerarquía podría darnos el resultado incorrecto

let average, score1 = 70, score2 = 80;

average = score1 + score2 / 2;
console.log(average);
//Aquí el resultado nos daría 110

//La declaración correcta es: 
average = (score1 + score2) / 2;
console.log(average);
//El resultado es 75.

//Ejercicios del canal de YouTube de Lupita Code. 