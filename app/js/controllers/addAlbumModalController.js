function addAlbumModalController($scope, $uibModalInstance) {
  console.log('addAlbumModalCtrl');

  $scope.createAlbum = () => {
    console.log('$scope.album: ', $scope.album);
    let album = angular.copy($scope.album);
    $uibModalInstance.close(album);
  };

  $scope.cancel = () => {
    $uibModalInstance.dismiss();
  };
};

angular.module('fullStackTemplate').controller('addAlbumModalController', addAlbumModalController);
