class AddTodoComponentCtrl {
    constructor($scope) {
        this.$scope = $scope
        self = this
    }

}



const AddTodoComponent = {
    bindings: {
        addTodo: "=",
        text: "="
    },
    templateUrl: "templates/addTodo.html",
    controller: AddTodoComponentCtrl,
    controllerAs: "vm"
}

todoAplication.component("addTodo", AddTodoComponent)