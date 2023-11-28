const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  const residents = [
    {
      name: 'Ilana',
      sex: 'female',
      age: 11,
    },
    {
      name: 'Orval',
      sex: 'male',
      age: 15,
    },
    {
      name: 'Bea',
      sex: 'female',
      age: 12,
    },
    {
      name: 'Jefferson',
      sex: 'male',
      age: 4,
    },
  ];

  it('sem parâmetros, retorna indefinido', () => {
    expect(handlerElephants()).toEqual(undefined);
  });

  it('Se o parametro não for uma string, ele retorna um erro', () => {
    const resposta = 'Parâmetro inválido, é necessário uma string';
    const huge = BigInt(9007199254740991);
    function teste() {}
    expect(handlerElephants(1)).toEqual(resposta);
    expect(handlerElephants({})).toEqual(resposta);
    expect(handlerElephants(true)).toEqual(resposta);
    expect(handlerElephants(Symbol('foo'))).toEqual(resposta);
    expect(handlerElephants(teste)).toEqual(resposta);
    expect(handlerElephants(huge)).toEqual(resposta);
  });

  it('Se pesquisar um parametro dos elefantes, ele deve ser retornado', () => {
    expect(handlerElephants('id')).toEqual('bb2a76d8-5fe3-4d03-84b7-dba9cfc048b5');
    expect(handlerElephants('name')).toEqual('elephants');
    expect(handlerElephants('popularity')).toEqual(5);
    expect(handlerElephants('location')).toEqual('NW');
    expect(handlerElephants('availability')).toEqual(['Friday', 'Saturday', 'Sunday', 'Tuesday']);
    expect(handlerElephants('residents')).toEqual(residents);
  });

  it('Se pesquisar parametros especificos, eles deve ser retornado', () => {
    expect(handlerElephants('count')).toEqual(4);
    expect(handlerElephants('names')).toEqual(['Ilana', 'Orval', 'Bea', 'Jefferson']);
    expect(handlerElephants('averageAge')).toEqual(10.5);
  });

  it('Se pesquisar algo que não é parametro, deve retornar null', () => {
    expect(handlerElephants(' ')).toEqual(null);
  });
});
