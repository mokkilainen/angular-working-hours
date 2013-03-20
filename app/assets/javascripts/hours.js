function HoursCtrl($scope, $http){
  $scope.hours      = [];
  $scope.date       = moment().format('DD.MM.YYYY');
  $scope.start_time = '9:00';
  $scope.end_time   = '17:00';
  $scope.plus_minus = 0;

  $http.get('load').success(function(json){
    $scope.hours = json;
  });

  $scope.addHours = function(){
    var json = {
      date:       $scope.date,
      start_time: $scope.start_time,
      end_time:   $scope.end_time,
      plus_minus: $scope.plus_minus
    };

    $scope.hours.push(json);

    $http.post('add', json);
  };

  $scope.removeHours = function(index){
    var new_hours = [];

    angular.forEach($scope.hours, function(value, i){
      if(i !== index){
        new_hours.push(value);
      }
    });

    $scope.hours = new_hours;

    $http.delete('remove/'+index);
  };

  $scope.totalHours = function(){
    var total = 0;

    angular.forEach($scope.hours, function(value, index){
      total = total + value.plus_minus;
    });

    return total;
  };

  $scope.plusMinus = function(){
    var start_time  = $scope.start_time.split(':');
    var end_time    = $scope.end_time.split(':');

    start_time  = moment().hour(start_time[0]).minutes(start_time[1]).seconds('00')
    end_time    = moment().hour(end_time[0]).minutes(end_time[1]).seconds('00')

    $scope.plus_minus  = (end_time - start_time) / 1000 / 60 / 60 - 8;
  };
}