let dogList = {
  name: "Dog List",
  items: [{item: "Feed the dog", done: false}, {item: "Walk the dog", done: false}]
}
let catList = {
  name: "Cat List",
  items: [{item: "Feed the cat", done: false}, {item: "Play with the cat", done: false}]
}

let todoLists = {
  lists: [dogList, catList]
}

function TodoList (name) {
  this.name = name
  this.items = []
  this.addItem = function (itemName) {
    this.items.push({item: itemName, done: false})
  }
  this.save = function() {
    let todoLists = localStorage.getItem("todoLists") || {lists: []}
    todoLists.lists.push(this)
    localStorage.setItem(todoLists, JSON.stringify(todoLists))
  }
}
let newDogList = new TodoList("my dog")
newDogList.addItem("Walk the dog")
newDogList.addItem("Feed the dog")
newDogList.save()


function saveList (list) {

}

function deleteItem 
console.log(todoLists)
localStorage.setItem("todoLists", JSON.stringify(todoLists))

let storedLists = JSON.parse(localStorage.getItem("todoLists"))
console.log(storedLists)