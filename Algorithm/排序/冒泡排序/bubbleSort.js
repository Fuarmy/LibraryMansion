/**
 * 冒泡排序
 * @param {Array} sortArray
 * @return {Array} 排序后的数组
 */
function bubbleSort(sortArray) {
  for(let i = 0; i < sortArray.length; i++) {
    for(let j = 0; j < sortArray.length-i-1; j++) {
      if(sortArray[j] > sortArray[j+1]) {
        [sortArray[j],sortArray[j+1]] = [sortArray[j+1],sortArray[j]];
      }
    }
  }
  return sortArray;
}