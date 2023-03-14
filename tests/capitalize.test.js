import { capitalize } from './project-one/src/capitalize.js'

if (capitalize('hello') !== 'Hello') {
    throw new Error('Функция работает неверно!');
  }
  
  if (capitalize('') !== '') {
    throw new Error('Функция работает неверно!');
  }
  
  console.log('Все тесты пройдены!');

  
  //node project-one/tests/capitalize.test.js




  //что то не работает ))
