class TodosComponentCtrl {
    constructor($scope) {
        this.$scope = $scope
        self = this
    }

    checkElement(el) {
        console.log(el)
    }


}

const TodosComponentBlock = {
    bindings: {
        todos: '=',
        removeTodo: "="
    },
    templateUrl: "templates/todos.html",
    controller: TodosComponentCtrl,
    controllerAs: "vm"
}

todoAplication.component("todosList", TodosComponentBlock)