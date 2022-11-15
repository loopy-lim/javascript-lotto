const Lotto = require('../src/Lotto');
const MissionUtils = require('@woowacourse/mission-utils');
const LottoValidator = require('../src/Lotto.validator');

const mockQuestions = (answers) => {
  MissionUtils.Console.readLine = jest.fn();
  answers.reduce((acc, input) => {
    return acc.mockImplementationOnce((question, callback) => {
      callback(input);
    });
  }, MissionUtils.Console.readLine);
};

describe('로또 클래스 테스트', () => {
  test('로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow('[ERROR]');
  });

  test('로또 번호에 중복된 숫자가 있으면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow('[ERROR]');
  });
});

describe('Validator 클래스 테스트', () => {
  test('checkMoney는 숫자가 아니면 예외가 발생한다.', () => {
    expect(() => {
      LottoValidator.checkMoney('가나다');
    }).toThrow('[ERROR]');
  });
  test('checkMoney는 1000으로 나뉘지 못하면 예외가 발생한다.', () => {
    expect(() => {
      LottoValidator.checkMoney('1002');
    }).toThrow('[ERROR]');
  });

});
