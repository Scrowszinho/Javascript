"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Matematica = /*#__PURE__*/function () {
  function Matematica() {
    _classCallCheck(this, Matematica);
  }

  _createClass(Matematica, null, [{
    key: "soma",
    value: function soma(a, b) {
      return a + b;
    }
  }]);

  return Matematica;
}();

console.log(Matematica.soma(1, 2)); // Conceito de classe em JS
// Juntament com o static
// 

var list = /*#__PURE__*/function () {
  function list() {
    _classCallCheck(this, list);

    this.data = [];
  }

  _createClass(list, [{
    key: "add",
    value: function add(data) {
      this.data.push(data);
      console.log(this.data);
    }
  }]);

  return list;
}(); // Criação da classe pai, onde cria-se um array
// e adciona um elemento através da função add com 
// variavel data como parametro. 
//


var TodoList = /*#__PURE__*/function (_list) {
  _inherits(TodoList, _list);

  var _super = _createSuper(TodoList);

  function TodoList() {
    var _this;

    _classCallCheck(this, TodoList);

    _this = _super.call(this);
    _this.usuario = 'Gustavo';
    return _this;
  }

  _createClass(TodoList, [{
    key: "mostraUser",
    value: function mostraUser() {
      console.log(this.usuario);
    }
  }]);

  return TodoList;
}(list); // Criação da classe filha TodoList
// extendida da classe lista
// Que cria uma variavel e função de exibila
// e herda as as outras variaveis


var minhaLista = new TodoList(); // Criando uma variavél para executar a classe TodoList

document.getElementById('adcionar').onclick = function () {
  minhaLista.add('Novo Todo');
};

minhaLista.mostraUser(); // Passando valores e exibindo o usuario
// Operações com array

var arr = [1, 2, 3, 4, 5, 7]; // Criação de um array com números

var newArr = arr.map(function (item, index) {
  return item + index;
});
console.log(newArr); // map retorna a soma do número + o seu index

var soma = arr.reduce(function (total, next) {
  return total + next;
});
console.log(soma); // Soma o anterior + o posterior
// Começando com o index = 0 + item = 1

var filtro = arr.filter(function (item) {
  return item % 2 === 0;
});
console.log(filtro); // filter Filtra alguma operação e sempre retorna
// true ou false

var localiza = arr.find(function (item) {
  return item === 4;
});
console.log(localiza); // find roda o array em busca do teste logico realizado
//
