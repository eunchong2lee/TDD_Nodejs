const utils = require('./utils');
const should = require('should');
// const assert = require('assert');

describe('utils.js모듈의 capitalize() 함수는', () =>{
    it('문자열의 첫번째 문자를 대문자로 변환한다.', () =>{
        // ...
        const result = utils.capitalize('hello');
        result.should.be.equal('Hello');
    })
})

//  Mocha
// https://mochajs.org/

// 모카는 테스트 코드를 돌려주는 테스트 러너
// 테스트 수트 : 테스트 환경으로 모카에서는 describe()으로 구현한다
// 테스트 케이스 : 실제 테스트를 말하며 모카에서는 it()으로 구현한다

// Should
// assert 말고 서드파티 라이버리를 사용하라 해서 테스트 코드에서 검증 라이브러리로 사용되는게 should이다
// https://shouldjs.github.io/

// SuperTest
// https://github.com/visionmedia/supertest
// 단위 테스트 : 함수의 기능 테스트
// 통합 테스트 : API의 기능 테스트
// 슈퍼 테스트는 익스프레스 통합 테스트용 라이브러리다.
// 내부적으로 익스프레스 서버를 구동시켜 실제 요청을 보낸 뒤 결과를 검증한다.
