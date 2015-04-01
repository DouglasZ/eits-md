angular.module('eits.controls.table.sample', [
    'ngMaterial',
    'eits-material-core',
    'eits.controls.table',
])
    .controller('AppCtrl', function ($scope, $log, $http) {

        $scope.content = [
            {
                id: 1,
                name: 'Bruno Mars',
                description: 'Human',
                last_modified: 'Jun 5, 2014'
            },
            {
                id: 2,
                name: 'AT-AT',
                description: 'Robot',
                last_modified: 'Jun 5, 2014'
            },
            {
                id: 3,
                name: 'Mark Ronson',
                description: 'Human',
                last_modified: 'Jun 5, 2014'
            },
            {
                id: 4,
                name: 'Daft Punk',
                description: 'Human-Robot',
                last_modified: 'Jun 5, 2014'
            },
            {
                id: 5,
                name: 'Lady Gaga',
                description: 'Undefined',
                last_modified: 'Jun 5, 2014'
            },
            {
                id: 6,
                name: 'Mark Ronson',
                description: 'Human',
                last_modified: 'Jun 5, 2014'
            },
            {
                id: 7,
                name: 'Mark Ronson',
                description: 'Human',
                last_modified: 'Jun 5, 2014'
            }];


        // Evento disparado pela directiva ao selecionar ou deselecionar um item da table
        $scope.updateSelectedItens = function (selectedItens) {
            $log.log(selectedItens);
        };

        // Evento disparado pela table ao clicar em um item da table
        $scope.openDetail = function (item) {
            $log.log(item);
        };

        // Evento disparado ao atingir o fundo da table através do scroll
        $scope.sendMoreData = function (page) {

            $log.log(page);
            $http.get('http://echo.jsontest.com/id/8/name/Henrique'+page+'/description/Cara_legal/last_modified/June')
                .success(function (data, status, headers, config) {
                	var size = 20;
                	var result = new Array();
                	for (var i = 0; i < size; i++) {
                		result.push( angular.copy(data) );
					}
                    $scope.content = $scope.content.concat(result);
                })
                .error(function (data, status, headers, config) {

                });

        }
    });