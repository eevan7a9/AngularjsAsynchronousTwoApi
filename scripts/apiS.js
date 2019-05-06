app.service('apiS', function($http) {
    this.getTodos = function() {
        return  $http.get('https://jsonplaceholder.typicode.com/todos');
    }
    this.getUsers = function(){
        return  $http.get('https://jsonplaceholder.typicode.com/users');
    }    
});