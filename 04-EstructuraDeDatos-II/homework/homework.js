'use strict'
// Implementa la clase LinkedList
// tiene metodos `add`, `remove`, y `search`
// add: Agrega un nuevo nodo en el final de la lista
// Ej:      Head --> null
// add(1):  Head --> 1 --> null
// add(2):  Head --> 1 --> 2 --> null
// remove:  Elimina el último nodo de la lista y devuelve su valor. (Tener en cuenta el caso particular de una lista de un solo nodo y de una lista vacía)
// Ej:         Head --> 1
// remove():   Head --> null y devuelve 1
// search: Busca un valor dentro de la lista. Puede recibir un valor o una función. Si no hubiera resultados, devuelve null.

function LinkedList() {
  this.head = null
  this._length = 0
}

function Node(value){
  this.next = null
  this.value = value
}
LinkedList.prototype.add = function(value) {
  var newNode = new Node(value)
  if (this.head == null) {
    this.head = newNode
  }
  else {
    var current = this.head
    while (current.next !== null) {
      current = current.next
    }
    current.next = newNode
  }
  this._length++
}
LinkedList.prototype.remove = function() {
  if (this.head == null) {
    return null
  }
  if (this.head.next == null) {
    this._length--
    let current = this.head.value
    this.head = null
    return current
  }
  else {
    var current = this.head
    while (current.next.next !== null) {
      current = current.next
    }    
    this._length--
    var current2 = current.next.value
    current.next = null    
    return current2
  }    
}
LinkedList.prototype.search = function(elemento) {
  var current = this.head
  while (current !== null && current.value !== elemento) { 
    if (typeof elemento === 'function') {
      if (elemento(current.value) === true) {
        return current.value
      }
    }   
    current = current.next    
  }
  if (current === null) {
    return null
  }
  else {
    return current.value
  }
}

// Hash Table( ver información en: https://es.wikipedia.org/wiki/Tabla_hash)
// Una Hash table contiene un arreglo de "contenedores" o buckets donde puede guardar información.
// Para este ejercicio, generar 35 buckets para la Hash Table, y realizar los métodos, get, hasKey
// Para almacenar un valor asociado a una key (string):
//    - Se pasa ese valor a la función hash(Pista: usar la función charCodeAt), que determina la posición en que debe ir en el arreglo. 
//    - Luego el elemento se inserta(llamando al método set) en la posición(índice) devuelta. 
// Para buscar el valor por su key:
//    - Sólo habrá que pasarle a la función hash la clave del elemento a buscar y ésta determinará la posición 
//      en que se encuentra.
//    - Usar el número obtenido, para buscar(llamando al método get) el contenedor o bucket donde está el valor.
//    - Retornar dicho valor.

function HashTable() {

}


// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  Node,
  LinkedList,
  HashTable
};
