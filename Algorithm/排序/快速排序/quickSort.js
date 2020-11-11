/**
 * 快速排序
 * @param {Array} sortArray 
 * @param {int} low 
 * @param {int} hight 
 */
function quickSort(sortArray, low = 0, hight = sortArray.length-1) {
  if(low >= hight) return; // 左右指针相等，退出排序
  // 指定左右指针
  let i = low, j = hight;
  let key = sortArray[low]; // 用子表的第一个记录做基准
  while (i < j) { // 从表的两端交替向中间扫描
      while (i < j && sortArray[j] >= key) j--;
      if (i < j) sortArray[i++] = sortArray[j];// 用比基准小的记录替换低位记录
      while (i < j && sortArray[i] < key) i++;
      if (i < j) sortArray[j--] = sortArray[i]; // 用比基准大的记录替换高位记录
  }
  sortArray[i] = key;// 将基准数值替换回 sortArray[i]
  quickSort(sortArray, low, i - 1); // 对低子表进行递归排序
  quickSort(sortArray, j + 1, hight); // 对高子表进行递归排序
}