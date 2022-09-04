import {
  printError,
  printResult
} from './printResult.js';
import getDateDiff from './getDateDiff.js';

export default function () {
  document.getElementById('datecalc').addEventListener('submit', form);
}


const form = function (event) {

  event.preventDefault()

  const formData = new FormData(event.target)

  const firstInput = formData.get('firstDate')
  const secondInput = formData.get('secondDate')

  const dateDiff = getDateDiff(firstInput, secondInput)

  if (!firstInput || !secondInput) {
    printError('Oooppppsss - Введите дату!!!!')
  } else {
    printResult(dateDiff)
  }
};