class FactsController < ApplicationController

  def index
    @constellation = Constellation.find(params[:id])
    @facts = @constellation.facts
    render json: @facts
  end

=begin
function FactFactory($resource){
  return $resource("/constellation/:id/facts");
}

function ConstellationShowController(ConstellationFactory, FactFactory, $stateParams){
  var vm = this;
  // Wait until all consts are loaded, then...
  ConstellationFactory.all.$promise.then(function(){
    // ...loop through all the consts, then...
    ConstellationFactory.all.forEach(function(constellation){
      // ...if a const has the ID matching the ID in the URL, then...
      if(constellation.id === $stateParams.id){
        // ...make that constellation show up in the view.
        vm.constellation = constellation;
        getAllFacts();
      }
    });
  });

  function getAllFacts(){
    
  }
}
=end

end
