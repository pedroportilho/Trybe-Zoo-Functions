const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  const hours = {
    Tuesday: { open: 8, close: 6 },
    Wednesday: { open: 8, close: 6 },
    Thursday: { open: 10, close: 8 },
    Friday: { open: 10, close: 8 },
    Saturday: { open: 8, close: 10 },
    Sunday: { open: 8, close: 8 },
    Monday: { open: 0, close: 0 },
  };

  it('Se faltar parametros, deve retornar todos os horarios', () => {
    expect(getOpeningHours()).toEqual(hours);
  });

  it('Se a string não for um dia, vai ser jogado um erro', () => {
    expect(() => getOpeningHours('Segunda')).toThrow(/^The day must be valid. Example: Monday$/);
  });

  it('Se a abreviação estiver errada, deve ser retornado um erro', () => {
    expect(() => getOpeningHours('Monday', '14:15')).toThrow(/^The abbreviation must be 'AM' or 'PM'$/);
  });

  it('Se a hora estiver errada, deve ser retornado o erro ou null', () => {
    expect(() => getOpeningHours('Monday', 'se:15-AM')).toThrow(/^The hour should represent a number$/);
    expect(() => getOpeningHours('Monday', '10:se-AM')).toThrow(/^The minutes should represent a number$/);
    expect(() => getOpeningHours('Monday', '14:15-AM')).toThrow(/^The hour must be between 0 and 12$/);
    expect(() => getOpeningHours('Monday', '10:75-AM')).toThrow(/^The minutes must be between 0 and 59$/);
    expect(getOpeningHours('Monday', '0:0-AM')).toEqual('The zoo is closed');
  });

  it('Se o dia e a hora estiverem de acordo, o zoo vai estar aberto', () => {
    expect(getOpeningHours('Tuesday', '9:15-AM')).toEqual('The zoo is open');
  });
});
