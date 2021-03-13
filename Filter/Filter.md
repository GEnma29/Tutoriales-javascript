# Metodo Filter 
filter es un método que nos permite tener otro arreglo de igual o menor 
al arreglo original como podemos imaginar podemos filtrar datos que no son relevantes para nuestra aplicación
## Primer Ejemplo
empecemos con el ejemplo más básico un arreglo de números del 1 al 10  
```javascript
    const numbers = [1,2,3,4,5,6,7,8,9,10]

```
El método crea un nuevo arreglo por lo cual necesitamos una nueva variable para así almacenar nuestro arreglo ya “filtrado”, el método filter recibe una función ya que esta le indica cuales condición tienen que cumplir los elementos que queremos seleccionar 
```javascript
   const numbersgreaterthan5 = numbers.filter(x => x > 5)// el arreglo resultante es  [6,7,8,9,10]

```
Bastante sencillo hasta ahora verdad, me imagino que ya estas viendo todo lo que podemos hacer con este método.

veamos algo más complejo si queremos todos los números divisible entre 2 de nuestro arreglo 

```javascript
    const numbersdivisiblethan2 = numbers.filter(x => x % 2 == 0)//[ 2, 4, 6, 8, 10 ]
```
 
 ahora veamos cómo filtrar los elementos de un arreglo “más complejo ”. 
 un arreglo de objetos en este caso veremos algunos personajes de la serie Friends los cuales tienen algunos atributos como su rol si es un protagonista o un personaje secundario.
 ```javascript
    const FriendsCharacters =[
      {name:'Rachel', lastname:'Green',role:'protagonist',gender:'feminine',},
      {name:'Ross', lastname:'Geller',role:'protagonist',gender:'male',},
      {name:'Joy',lastname:'Tribbiani',role:'protagonist',gender:'male',},
      {name:'Phoebe',lastname:'buffay',role:'protagonist',gender:'feminine',},
      {name:'Monica',lastname:'Geller',role:'protagonist',gender:'feminine',},
      {name:'Chandler',lastname:'Bing',role:'protagonist',gender:'male',},
      {name:'janice',lastname:'buffay',role:'secondary',gender:'feminine',},
      {name:'Mike',lastname:'Hannigan',role:'secondary',gender:'male',},
      {name:'Gunther',lastname:'',role:'secondary',gender:'male',},

]
```
 podemos seleccionar a los personajes secundarios de la siguiente manera:
 ```javascript
     const secondary = FriendsCharacters.filter(x => x.role=='secondary')
 ```
 tenemos de salida: 
  ```javascript
     [
  {
    name: 'janice',
    lastname: 'buffay',
    role: 'secondary',
    gender: 'feminine'
  },
  {
    name: 'Mike',
    lastname: 'Hannigan',
    role: 'secondary',
    gender: 'male'
  },
  { name: 'Gunther', lastname: '', role: 'secondary', gender: 'male' }
]
 ```
