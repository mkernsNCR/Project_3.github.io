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
 .controller("indexCtrl", [
   "Constellation",
   indexCtrlFunction
 ])
 .controller("showCtrl",[
   "Constellation",
   "$stateParams",
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

 function indexCtrlFunction(Constellation){
   var indexVM = this;
   indexVM.constellations = Constellation.all;
   indexVM.newConstellation= new Constellation();

 }
function showCtrlFunction( Constellation,$stateParams){
  this.constellation = Constellation.get({id:$stateParams.id})
}

})();
