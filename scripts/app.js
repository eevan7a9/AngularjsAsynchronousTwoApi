
let app = angular.module('myApp', []);
app.controller('mainCtrl', function($scope, apiS) {
   
    // apiS.getTodos().then(res => $scope.todos = res.data);
    apiS.getUsers().then(res => {
        $scope.users = res.data
        apiS.getTodos().then(res => {
            $scope.todos = res.data

            let usersTodos = []
            for (let i = 0; i < $scope.users.length; i++) {
                
                const user = $scope.users[i];
                let todosData = [];

                for (let x = 0; x < $scope.todos.length; x++) {
                    const todo = $scope.todos[x];
                    if (todo.userId == user.id) {
                        todosData.push({id:user.id, name:user.username, title:todo.title, status:todo.completed});
                    }   
                }
                usersTodos.push(todosData);
            }
            $scope.totalTodo = usersTodos;   
        });
    });
    
});