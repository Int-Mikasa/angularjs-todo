class TodoComponentCtrl {
    constructor($scope) {
        this.$scope = $scope
        self = this
    }

    checkElement(el) {
        console.log(el)
    }

}

const TodoComponentBlock = {
    bindings: {
        todos: '=',
        removeTodo: "="
    },
    templateUrl: "templates/todo.html",
    controller: TodosComponentCtrl,
    controllerAs: "vm"
}

todoAplication.component("todoComponent", TodoComponentBlock)