import {swapAnimation, paintCompleted} from '../algorithms/animate'

function swap(array, i, j){
  let temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

async function selectionSort(sortingArray, xArray){
  let length = sortingArray.length;
  let min = 0;
  for(let i = 0; i < length - 1; i++){
    min = i;
    for(let j = i+1; j < length; j++){
      if(sortingArray[min] > sortingArray[j])
      {
        min = j;
      }
    }
    if(min !== i){
      swap(sortingArray, i, min)
      await swapAnimation(i, min, xArray[i], xArray[min]);
    }
    paintCompleted(i);
  }
  paintCompleted(length - 1);
  return 1;
}

export {selectionSort};