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
     url: "/:id"
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
   console.log("Hello");
   indexVM.constellations = Constellation.all;
 }

})();
