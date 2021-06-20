let todoAplication = angular.module("todoApp", [])
class ApplicationComponentCtrl {
    constructor($scope, $http) {
        this.$http = $http
        this.$scope = $scope
        self = this
    }

    $onInit() {
        this.loader = true
        this.$http.get("https://jsonplaceholder.typicode.com/todos/?_limit=10")
            .then(response => {
                this.todos = this.todos.concat(response.data)
                this.loader = false
            })
    }

    loader = false

    todos = []

    text = ''

    addTodo(title) {
        let currentId = self.todos.length
        self.todos.push({id: currentId + 1, title: title, complited: false})
        this.text = ''
    }

    removeTodo(id) {
        this.todos = this.todos.filter(todo => todo.id != id)
    }

    compliteTodo(el) {
        this.todos[el].complited = !this.todos[el].complited
    }

}

const ApplicationComponent = {
    bindings: {

    },
    templateUrl: "templates/application.html",
    controller: ApplicationComponentCtrl,
    controllerAs: "vm"
}

todoAplication.component("appTodos", ApplicationComponent)