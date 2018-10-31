'use strict';

var _createClass = (function() {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ('value' in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  return function(Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
})();

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError('Cannot call a class as a function');
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  }
  return call && (typeof call === 'object' || typeof call === 'function')
    ? call
    : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== 'function' && superClass !== null) {
    throw new TypeError(
      'Super expression must either be null or a function, not ' +
        typeof superClass
    );
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass)
    Object.setPrototypeOf
      ? Object.setPrototypeOf(subClass, superClass)
      : (subClass.__proto__ = superClass);
}

customElements.define(
  'compodoc-menu',
  (function(_HTMLElement) {
    _inherits(_class, _HTMLElement);

    function _class() {
      _classCallCheck(this, _class);

      var _this = _possibleConstructorReturn(
        this,
        (_class.__proto__ || Object.getPrototypeOf(_class)).call(this)
      );

      _this.isNormalMode = _this.getAttribute('mode') === 'normal';
      return _this;
    }

    _createClass(_class, [
      {
        key: 'connectedCallback',
        value: function connectedCallback() {
          this.render(this.isNormalMode);
        }
      },
      {
        key: 'render',
        value: function render(isNormalMode) {
          let tp = lithtml.html(
            '<nav>\n    <ul class="list">\n        <li class="title">\n            \n                <a href="index.html" data-type="index-link">binck documentation</a>\n            \n        </li>\n\n        <li class="divider"></li>\n        ' +
              (isNormalMode
                ? '<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>'
                : '') +
              '\n        <li class="chapter">\n            <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>\n            <ul class="links">\n                \n                    <li class="link">\n                        <a href="overview.html" data-type="chapter-link">\n                            <span class="icon ion-ios-keypad"></span>Overview\n                        </a>\n                    </li>\n                    <li class="link">\n                        <a href="index.html" data-type="chapter-link">\n                            <span class="icon ion-ios-paper"></span>README\n                        </a>\n                    </li>\n                \n                \n                \n                    <li class="link">\n                        <a href="dependencies.html"\n                            data-type="chapter-link">\n                            <span class="icon ion-ios-list"></span>Dependencies\n                        </a>\n                    </li>\n                \n            </ul>\n        </li>\n        \n        \n        <li class="chapter modules">\n            <a data-type="chapter-link" href="modules.html">\n                <div class="menu-toggler linked" data-toggle="collapse"\n                    ' +
              (isNormalMode
                ? 'data-target="#modules-links"'
                : 'data-target="#xs-modules-links"') +
              '>\n                    <span class="icon ion-ios-archive"></span>\n                    <span class="link-name">Modules</span>\n                    <span class="icon ion-ios-arrow-down"></span>\n                </div>\n            </a>\n            <ul class="links collapse"\n            ' +
              (isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"') +
              '>\n                \n                    <li class="link">\n                        <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>\n                        \n                            <li class="chapter inner">\n                                <div class="simple menu-toggler" data-toggle="collapse"\n                                    ' +
              (isNormalMode
                ? 'data-target="#components-links-module-AppModule-4ea5288f19f663e8d8f015f3e32fe1e9"'
                : 'data-target="#xs-components-links-module-AppModule-4ea5288f19f663e8d8f015f3e32fe1e9"') +
              '>\n                                    <span class="icon ion-md-cog"></span>\n                                    <span>Components</span>\n                                    <span class="icon ion-ios-arrow-down"></span>\n                                </div>\n                                <ul class="links collapse"\n                                    ' +
              (isNormalMode
                ? 'id="components-links-module-AppModule-4ea5288f19f663e8d8f015f3e32fe1e9"'
                : 'id="xs-components-links-module-AppModule-4ea5288f19f663e8d8f015f3e32fe1e9"') +
              '>\n                                    \n                                        <li class="link">\n                                            <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppComponent</a>\n                                        </li>\n                                    \n                                </ul>\n                            </li>\n                        \n                        \n                        \n                        \n                        \n                    </li>\n                \n                    <li class="link">\n                        <a href="modules/AppRoutingModule.html" data-type="entity-link">AppRoutingModule</a>\n                        \n                        \n                        \n                        \n                        \n                    </li>\n                \n                    <li class="link">\n                        <a href="modules/CoreModule.html" data-type="entity-link">CoreModule</a>\n                        \n                        \n                        \n                        \n                        \n                    </li>\n                \n                    <li class="link">\n                        <a href="modules/MaterialModule.html" data-type="entity-link">MaterialModule</a>\n                        \n                        \n                        \n                        \n                        \n                    </li>\n                \n                    <li class="link">\n                        <a href="modules/SharedModule.html" data-type="entity-link">SharedModule</a>\n                        \n                        \n                        \n                        \n                        \n                    </li>\n                \n            </ul>\n        </li>\n        \n        \n            \n                <li class="chapter">\n                    <div class="simple menu-toggler" data-toggle="collapse"\n                    ' +
              (isNormalMode
                ? 'data-target="#components-links"'
                : 'data-target="#xs-components-links"') +
              '>\n                        <span class="icon ion-md-cog"></span>\n                        <span>Components</span>\n                        <span class="icon ion-ios-arrow-down"></span>\n                    </div>\n                    <ul class="links collapse"\n                    ' +
              (isNormalMode
                ? 'id="components-links"'
                : 'id="xs-components-links"') +
              '>\n                        \n                            <li class="link">\n                                <a href="components/H1.html" data-type="entity-link">H1</a>\n                            </li>\n                        \n                    </ul>\n                </li>\n            \n        \n        \n        \n            \n                <li class="chapter">\n                    <div class="simple menu-toggler" data-toggle="collapse"\n                    ' +
              (isNormalMode
                ? 'data-target="#directives-links"'
                : 'data-target="#xs-directives-links"') +
              '>\n                        <span class="icon ion-md-code-working"></span>\n                        <span>Directives</span>\n                        <span class="icon ion-ios-arrow-down"></span>\n                    </div>\n                    <ul class="links collapse"\n                    ' +
              (isNormalMode
                ? 'id="directives-links"'
                : 'id="xs-directives-links"') +
              '>\n                        \n                            <li class="link">\n                                <a href="directives/UnderlineDirective.html" data-type="entity-link">UnderlineDirective</a>\n                            </li>\n                        \n                    </ul>\n                </li>\n            \n        \n        \n        \n            \n                <li class="chapter">\n                    <div class="simple menu-toggler" data-toggle="collapse"\n                        ' +
              (isNormalMode
                ? 'data-target="#injectables-links"'
                : 'data-target="#xs-injectables-links"') +
              '>\n                        <span class="icon ion-md-arrow-round-down"></span>\n                        <span>Injectables</span>\n                        <span class="icon ion-ios-arrow-down"></span>\n                    </div>\n                    <ul class="links collapse"\n                    ' +
              (isNormalMode
                ? 'id="injectables-links"'
                : 'id="xs-injectables-links"') +
              '>\n                        \n                            <li class="link">\n                                <a href="injectables/AppErrorHandler.html" data-type="entity-link">AppErrorHandler</a>\n                            </li>\n                        \n                            <li class="link">\n                                <a href="injectables/CustomSerializer.html" data-type="entity-link">CustomSerializer</a>\n                            </li>\n                        \n                    </ul>\n                </li>\n            \n        \n        \n        <li class="chapter">\n            <div class="simple menu-toggler" data-toggle="collapse"\n            ' +
              (isNormalMode
                ? 'data-target="#interceptors-links"'
                : 'data-target="#xs-interceptors-links"') +
              '>\n                <span class="icon ion-ios-swap"></span>\n                <span>Interceptors</span>\n                <span class="icon ion-ios-arrow-down"></span>\n            </div>\n            <ul class="links collapse"\n            ' +
              (isNormalMode
                ? 'id="interceptors-links"'
                : 'id="xs-interceptors-links"') +
              '>\n                \n                    <li class="link">\n                        <a href="interceptors/Interceptor.html" data-type="entity-link">Interceptor</a>\n                    </li>\n                \n            </ul>\n        </li>\n        \n        \n        \n        <li class="chapter">\n            <div class="simple menu-toggler" data-toggle="collapse"\n                ' +
              (isNormalMode
                ? 'data-target="#interfaces-links"'
                : 'data-target="#xs-interfaces-links"') +
              '>\n                <span class="icon ion-md-information-circle-outline"></span>\n                <span>Interfaces</span>\n                <span class="icon ion-ios-arrow-down"></span>\n            </div>\n            <ul class="links collapse"\n            ' +
              (isNormalMode
                ? ' id="interfaces-links"'
                : 'id="xs-interfaces-links"') +
              '>\n                \n                    <li class="link">\n                        <a href="interfaces/AppState.html" data-type="entity-link">AppState</a>\n                    </li>\n                \n                    <li class="link">\n                        <a href="interfaces/RouterStateUrl.html" data-type="entity-link">RouterStateUrl</a>\n                    </li>\n                \n            </ul>\n        </li>\n        \n        \n            \n                <li class="chapter">\n                    <div class="simple menu-toggler" data-toggle="collapse"\n                    ' +
              (isNormalMode
                ? 'data-target="#pipes-links"'
                : 'data-target="#xs-pipes-links"') +
              '>\n                        <span class="icon ion-md-add"></span>\n                        <span>Pipes</span>\n                        <span class="icon ion-ios-arrow-down"></span>\n                    </div>\n                    <ul class="links collapse"\n                    ' +
              (isNormalMode ? 'id="pipes-links"' : 'id="xs-pipes-links"') +
              '>\n                        \n                            <li class="link">\n                                <a href="pipes/ReverseStrPipe.html" data-type="entity-link">ReverseStrPipe</a>\n                            </li>\n                        \n                    </ul>\n                </li>\n            \n        \n        \n        <li class="chapter">\n            <div class="simple menu-toggler" data-toggle="collapse"\n            ' +
              (isNormalMode
                ? 'data-target="#miscellaneous-links"'
                : 'data-target="#xs-miscellaneous-links"') +
              '>\n                <span class="icon ion-ios-cube"></span>\n                <span>Miscellaneous</span>\n                <span class="icon ion-ios-arrow-down"></span>\n            </div>\n            <ul class="links collapse"\n            ' +
              (isNormalMode
                ? 'id="miscellaneous-links"'
                : 'id="xs-miscellaneous-links"') +
              '>\n                \n                \n                \n                \n                    <li class="link">\n                      <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>\n                    </li>\n                \n            </ul>\n        </li>\n        \n        \n            \n            <li class="chapter">\n                <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>\n            </li>\n            \n        \n        \n        <li class="chapter">\n            <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>\n        </li>\n        \n        \n        \n        <li class="divider"></li>\n        <li class="copyright">\n                Documentation generated using <a href="https://compodoc.app/" target="_blank">\n                    \n                        \n                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">\n                        \n                    \n                </a>\n        </li>\n        \n    </ul>\n</nav>'
          );
          this.innerHTML = tp.strings;
        }
      }
    ]);

    return _class;
  })(HTMLElement)
);
