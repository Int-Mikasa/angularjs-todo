class LogoComponentCtrl {
    constructor($scope) {
        this.$scope = $scope
        self = this
    }

    logo = "AngularJs Application"
    edit = false

    changeEdit() {
        this.edit = !this.edit
    }
}

const LogoComponent = {
    bindings: {

    },
    templateUrl: "templates/logo.html",
    controller: LogoComponentCtrl,
    controllerAs: "vm"
}

todoAplication.component("logoComponent", LogoComponent)