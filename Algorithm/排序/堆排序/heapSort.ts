/**
 * 堆是一棵顺序存储的完全二叉树。
 * 其中每个结点的关键字都不大于其孩子结点的关键字，这样的堆称为小根堆。
 * 其中每个结点的关键字都不小于其孩子结点的关键字，这样的堆称为大根堆
 * 举例来说，对于n个元素的序列{R0, R1, ... , Rn}当且仅当满足下列关系之一时，称之为堆：
 * (1) Ri <= R2i+1 且 Ri <= R2i+2 (小根堆)
 * (2) Ri >= R2i+1 且 Ri >= R2i+2 (大根堆)
 * 其中i=1,2,…,n/2向下取整; Math.floor(n/2);
 */
class HeapSort {
  constructor() {}
  /**
   * 排序
   * @param {Array<number>} array 
   */
  public sort(array: number[]): number[]{
    HeapSort.createMaxHeap(array);
    // 循环遍历调整堆；
    // 堆排序1. 堆顶与堆尾置换，调整，
    // 进行n-1次循环，完成排序
    for (let i = array.length - 1; i > 0; i--) {
      // 最后一个元素和第一元素进行交换
      [array[0], array[i]] = [array[i], array[0]];
      // 筛选 R[0] 结点，得到i-1个结点的堆
      HeapSort.adjustHeap(array, 0, i);
    }
    return array;
  }
  /**
   * 建立大顶堆
   * @param {Array<number>} array 
   */
  public static createMaxHeap(array: number[]): number[]{
    for (let i = Math.floor(array.length / 2); i >= 0; i--) {
      HeapSort.adjustHeap(array, i, array.length);
    }
    return array;
  }
  /**
   * adjustHeap() //调整堆, params: array, parentIndex(父节点index), surplusLength (需要调整堆数组长度即排除排序后剩余元素的个数)
   * 1. 默认父节点，和左节点下标
   * 开始循环 循环判定 子节点 < length / 父节点Index < 父节点number
   * 2. 判断是否存在右节点 && 右节点大于左节点 -- true 执行 选择右节点即子节点childIndex++
   * 3. 子节点小于父节点---true 执行 跳出循环
   * 4. 交换父子节点的值；
   * 5. 重新设置父节点和左节点的值
   * 
   * 调整堆结束 over；
   * @param array 
   * @param parentIndex 
   * @param surplusLength 
   */
  public static adjustHeap(array: number[], parentIndex: number, surplusLength: number) {
    while( parentIndex < Math.floor(surplusLength/2)) {
      let childIndex = 2 * parentIndex + 1; // 获取左子节点
      // 如果有右子结点，并且右子结点的值大于左子结点，则选取右子结点
      if (childIndex + 1 < surplusLength && array[childIndex] < array[childIndex + 1]) childIndex++;
      // 如果父节点的值大于或等于子节点的值，结束循环
      if (array[parentIndex] >= array[childIndex]) break;
      // 交换父子节点的值
      [array[parentIndex], array[childIndex]] = [array[childIndex], array[parentIndex]];

      // 设置新的父子节点，继续向下调整
      parentIndex = childIndex;
    }
  }
}
// const heap = new HeapSort();
// console.log(heap.sort([1,3,4,5,2,6,9,7,8,0]));