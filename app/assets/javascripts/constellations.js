//= require angular
//= require angular-resource
//= require angular-ui-router.min

"use strict";

(function(){

  angular
  .module("starfax", [
    "ui.router",
    "ngResource"
  ])
 .config([
   "$stateProvider",
   RouterFunction
 ])
 .factory("Constellation", [
   "$resource",
   constFactoryFunction
 ])
 .factory("facts",[
   "$resource",
   factFactoryFunction
 ])
 .controller("indexCtrl", [
   "Constellation",
   indexCtrlFunction
 ])
 .controller("showCtrl",[
   "Constellation",
   "$stateParams",
   "facts",
   showCtrlFunction
 ]);

 function RouterFunction($stateProvider){
   $stateProvider
   .state("index", {
     url: "/",
     templateUrl: "/ng-views/constellation.index.html",
     controller: "indexCtrl",
     controllerAs: "indexVM"
   })
   .state("show", {
     url: "/:id",
     templateUrl:"/ng-views/constellation.show.html",
     controller: "showCtrl",
     controllerAs:"showVM"
   });
 }

 function constFactoryFunction($resource){
   var Constellation = $resource("/constellations/:id.json", {}, {
     update: {method: "PUT"}
   });
   Constellation.all = Constellation.query();
   return Constellation;
 }
 function factFactoryFunction($resource){
   var Fact = $resource("/constellations/:id/facts.json", {}, {
     update: {method: "PUT"}
   });
   return Fact;
 }

 function indexCtrlFunction(Constellation){
   var indexVM = this;
   indexVM.constellations = Constellation.all;
   indexVM.newConstellation= new Constellation();

 }
function showCtrlFunction( Constellation, $stateParams, facts){
  this.constellation = Constellation.get({id:$stateParams.id})
  this.facts = facts.query({id: $stateParams.id})
}

})();
