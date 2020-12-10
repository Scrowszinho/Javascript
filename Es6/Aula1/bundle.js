"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

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
// 
// Aprendendo Arrow function

var arrowFunc = arr.map(function (item) {
  return item * 2;
});
console.log(arrowFunc); // Criando uma função utilizando seu propósito diretamente
// sem precisar declarar a função.

var test = function test() {
  return {
    nome: 'Gustavo'
  };
};

console.log(test()); // Criando uma função de maneira direta(Não recomendada)
// e retornando seu propósito de maneira direta.
// Valores padrão em constantes

var somaPad = function somaPad() {
  var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
  var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  return a + b;
};

console.log(somaPad(3));
console.log(somaPad()); // Passando um ou mais valores para substituir
// o padrão.
// Aprendendo o conceito de desestruturação

var user = {
  nome: 'Luis Gustavo',
  idade: 20,
  endereco: {
    cidade: 'Aparecida',
    uf: 'SP'
  }
}; // Cria-se um array com outro array dentro

function mostraUsuario(_ref) {
  var nome = _ref.nome,
      idade = _ref.idade,
      cidade = _ref.endereco.cidade;
  console.log(nome, idade, cidade);
} // E para obter a informação desejada, passa o nome
// e a variavel que deseja acessar.


mostraUsuario(user); //
// Conceito de Rest / Spread

var nome = user.nome,
    idade = user.idade,
    resto = _objectWithoutProperties(user, ["nome", "idade"]);

console.log(resto); // Utilizando o ...var retorna todos os valores do array user
// que não sejam definidos, no exemplo, todas do enderço.

function som() {
  for (var _len = arguments.length, params = new Array(_len), _key = 0; _key < _len; _key++) {
    params[_key] = arguments[_key];
  }

  return params.reduce(function (total, next) {
    return total + next;
  });
}

console.log(som(1, 3, 4)); // Outra maneira de entender o rest mas agora com
// arrow function.
// Conceito de spread

var user2 = _objectSpread(_objectSpread({}, user), {}, {
  nome: 'Gustavo'
});

console.log(user2); // Pega todas as variaveis e substitui apenas um valor
// desejado.
// Template Literals

var nome1 = 'Gustavo';
var idade1 = 20;
console.log('Meu nome é ' + nome1 + ' e tenho ' + idade1 + ' anos');
console.log("Meu nome \xE9 ".concat(nome1, " e tenho ").concat(idade1, " anos")); // Usando o template Literals para concatenar de maneira direta
// as variaveis desejadas.
// Object short syntax

var usuo = {
  nome1: nome1,
  idade1: idade1,
  faculdade: 'FATEC'
};
console.log(usuo); // Utilizando o short syntax para
// adcionar variaveis com valores ja existentes.
