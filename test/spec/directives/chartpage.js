'use strict';

describe('Unit: La directiva chartpage', function () {

  beforeEach(module('infoturismoApp'));

  var element, scope, locations;

  beforeEach(module('templates'));

  beforeEach(inject(function ($rootScope, $compile, $sce) {
    element = angular.element(
      '<chartpage><div>Hello World</div></chartpage>');

    scope = $rootScope.$new();

    scope.title = $sce.trustAsHtml("main");
    scope.titleIcon = "fa-globe";

    locations = [{
      name: "main",
      href: "/main",
      icon: "fa-globe"
    },{
      name: "first",
      href: "/first",
      icon: "fa-taxi"
    },{
      name: 'second',
      href: '/second',
      icon: "fa-arrow-up"
    },{
      name: 'third',
      href: '/third',
      icon: 'fa-certificate'
    }];

    locations[0].next = locations[1];
    locations[1].next = locations[2];
    locations[2].next = locations[3];

    scope.navegacion = locations[0];

    element = $compile(element)(scope);
    scope.$apply();
  }));

  it('debe mostrar el titulo correcto', inject(function ($sce) {
    expect(element.find("h1").text().trim()).toBe($sce.getTrustedHtml(scope.title));
  }));

  it('debe mostrar el icono correcto', function() {
    expect(element.find("i").first().hasClass("fa " + scope.titleIcon)).toBe(true);
  });

  it('debe de contar con el contenido correcto', function() {
    expect(element.find(".panel-body").children().first().text()).toBe('Hello World');
  })
});
