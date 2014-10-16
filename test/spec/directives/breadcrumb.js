'use strict';

describe('Unit: La directiva breadcrumb', function () {

  beforeEach(module('infoturismoApp'));

  var element, scope, locations, crumbs;

  beforeEach(inject(function ($rootScope, $compile) {
    element = angular.element(
      '<breadcrumb navigation="navegacion"></breadcrumb>'
    );

    scope = $rootScope.$new();

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
    crumbs = element.find("li");
  }));

  it('debe de contar con el numero de elementos correcto', function () {
    expect(crumbs.length).toBe(4);
  });

  it('debe de mostrar el icono correcto para cada ubicacion', function() {
    crumbs.each(function (i, crumb) {
      expect($(crumb).find("i").first().attr("class"))
        .toBe("fa " + locations[i].icon);
    });
  });

  it('de de contar con la url correcta para cada ubicacion', function() {
    crumbs.each(function (i, crumb) {
      if(locations[i].next) {
        expect($(crumb).children(':nth-child(2)').attr("href"))
          .toBe(locations[i].href);
      }
      else {
        expect($(crumb).find('a').length)
          .toBe(0);
      }
    });
  })

  it('debe de mostrar el nombre correcto para cada ubicacion', function () {
    crumbs.each(function (i, crumb) {
      expect($(crumb).text()).toBe(' ' + locations[i].name);
    });
  });

  it('debe de mostrar la ubicacion correcta como activa', function () {
    expect(crumbs.last().hasClass("active")).toBe(true)
  });
});
