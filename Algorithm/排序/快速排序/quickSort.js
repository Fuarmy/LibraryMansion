/**
 * 快速排序
 * @param {Array<number>} sortArray
 * @param {Number} low
 * @param {Number} hight
 */
function quickSort(sortArray, low, hight) {
    if (low >= hight) return sortArray; // 左右指针相等，退出排序
    // 指定左右指针
    let left = low = low || 0, right = hight = hight || sortArray.length - 1;
    let pivot = sortArray[left]; // 用子表的第一个记录做基准
    while (left < right) { // 从表的两端交替向中间扫描
        while (left < right && sortArray[right] >= pivot)
            right--;
        if (left < right)
            sortArray[left++] = sortArray[right]; // 用比基准小的记录替换低位记录
        while (left < right && sortArray[left] < pivot)
            left++;
        if (left < right)
            sortArray[right--] = sortArray[left]; // 用比基准大的记录替换高位记录
    }
    sortArray[left] = pivot; // 将基准数值替换回 sortArray[i]
    quickSort(sortArray, low, left - 1); // 对低子表进行递归排序
    quickSort(sortArray, right + 1, hight); // 对高子表进行递归排序
    return sortArray;
}