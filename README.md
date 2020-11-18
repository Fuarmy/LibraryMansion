# LibraryMansion
一个收藏代码的地方

#### 类型判定
``` TypeScript
dataType(new Date()); // {String} Date
```

#### 倒计时
- 倒计时实现依赖于类型判定
``` TypeScript
/**
 * JavaScript 版本
 */
countDown('2021-12-31', function(res){
  // res:  {day,hour,minute,second};
})

/**
 * TypeScript 版本
 */
const countDown = new CountDown();
countDown.setCountDown('2021-12-31', (res) => {
  // res:  {day,hour,minute,second};
})
```

#### 排序
``` TypeScript
/**
 * 冒泡排序
 */
bubbleSort([1,3,4,5,2,6,9,7,8,0]);
// 0,1,2,3,4,5,6,7,8,9

/**
 * 快速排序
 */
quickSort([1,3,4,5,2,6,9,7,8,0]);
// 0,1,2,3,4,5,6,7,8,9

/**
 * 归并排序
 */
mergeSort([1,3,4,5,2,6,9,7,8,0]);
// 0,1,2,3,4,5,6,7,8,9

/**
 * 堆排序
 */
const heap = new HeapSort();
heap.sort([1,3,4,5,2,6,9,7,8,0]);
// 0,1,2,3,4,5,6,7,8,9
```
