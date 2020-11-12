/**
 * 归并排序
 * @param {Array<number>} sortArray
 * @return {Array<number>}
 */
function mergeSort(sortArray) {
  let length = sortArray.length;
  if (length < 3)
      return sort(sortArray);
  let middleIndex = Math.floor(length / 2);
  let left = sortArray.slice(0, middleIndex);
  let right = sortArray.slice(middleIndex);
  return merge(mergeSort(left), mergeSort(right));
}
/**
* 合并有序数组
* @param {Array<number>} left
* @param {Array<number>} right
*/
function merge(left, right) {
  let leftPoint = 0, rightPoint = 0;
  let result = [];
  while (left.length > leftPoint && right.length > rightPoint) {
      // 注意--符号在后面，表示先进行计算再减1，这种缩写缩短了代码
      result.push(left[leftPoint] < right[rightPoint] ? left[leftPoint++] : right[rightPoint++]);
  }
  while (left.length > leftPoint) {
      result.push(left[leftPoint++]);
  }
  while (right.length > rightPoint) {
      result.push(right[rightPoint++]);
  }
  return result;
}
/**
* 最大长度为2的数组排序
* @param {Array<number>} array
*/
function sort(array) {
  if (array[0] > array[1])
      [array[0], array[1]] = [array[1], array[0]];
  return array;
}
console.log(mergeSort([111, 34, 23, 45, 6, 78, 9, 54]));
//# sourceMappingURL=mergeSort.js.map