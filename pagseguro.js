PagSeguroDirectPayment.getBrand({
    cardBin: $scope.card,

    success: function(response) {
      console.log(response);
    },

    error: function(response) {
        console.log(response);
    }
