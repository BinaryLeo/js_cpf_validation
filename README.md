# js_cpf_validation
Validate a Brazilian CPF using javascript<br/>
Validando CPF - Cadastro de Pessoas Físicas

Github Page https://binaryleo.github.io/js_cpf_validation/


![image](https://user-images.githubusercontent.com/72607039/151735709-dcdbf395-54b6-4e76-9568-1e554f0c294a.png)



A CPF number is the Tax ID generated once you have been registered into the Brazilian Revenue.
 CPF stands for "Cadastro de Pessoas Físicas" (Natural Persons Register). 
 The CPF has 11 digits and it may be issued by the Brazilian revenue service in Brazil
  or Brazilian consulates and embassies abroad.

A CPF is required not only to purchase real estate in Brazil,
 but many other things such as paying your taxes, opening a bank account in Brazil, 
  opening a company in Brazil, getting utility services, and being able to enter into general 
  contracts drafted in Brazil.


705.484.450-52 Brazilian CPF = 11 Digits / 11 digitos

|1st|2nd|3rd|4th|5th|6th|7th|8th|9th|
|---|---|---|:-:|---|---|---|---|---|
| 7x| 0x| 5x| 4x| 8x| 4x| 4x| 5x| 0x|
| 10|  9|  8|  7|  6|  5|  4|  3|  2|
| 70|  0| 40| 28| 48| 20| 16| 15|  2|

multiply the first 9 digits by a regressive sequence of digits between 10 and 2 <br/>
multiplica-se os nove primeiros digitos por uma sequência regressiva  de digitos entre 10 e 2


| 10 | 9 | 8 | 7 | 6 | 5 | 4 | 3 | 2 |
|----|---|---|:-:|---|---|---|---|---|

result/ resultado

  11 - (237 % 11) = 5 is the tenth digit of the CPF / 5 é o décimo dígito do CPF
  

  Now we add the new digit to the process.<br/>
  Adicionamos o novo dígito ao processo


|1st|2nd|3rd|4th|5th|6th|7th|8th|9th|10th|
|---|---|---|:-:|---|---|---|---|---|---|
| 7x| 0x| 5x| 4x| 8x| 4x| 4x| 5x| 0x| 5x|
| 11| 10|  9|  8|  7|  6|  5|  4|  3|  2|
| 77|  0| 45| 32| 56| 24| 20| 20|  0| 10|

start the sequence from 11<br/>
iniciamos a sequencia a partir de 11 

| 77 | 0 | 45| 32| 56| 24| 20| 20| 0 | 10|
|----|---|---|:-:|---|---|---|---|---|---|

 77 0  45 32 56 24 20 20 0 10 -> result = 284<br/>

 11 - (284 % 11) = 2 is the eleventh digit of the CPF /2 é o décimo primeiro dígito do CPF<br/>
Final sequence - Full CPF / CPF Válido:  705.484.450  +  5  + 2  =  705.484.450-52 
