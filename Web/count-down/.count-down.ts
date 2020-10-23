import dataType from '../dataType/.dataType';

class CountDown {
  private _typeCode: Map<string,Function> = new Map([
    ['String', (time): number | string => {
      let timestamp: number = new Date(time.replace(/-/g,'/')).getTime();
      return timestamp === timestamp ? timestamp : '时间格式不正确！';
    }],
    ['Number', (time) => {
      return time && time.toString().length === 10 ? time *= 1000 : time && time.toString().length === 13 ? time : '时间戳格式不正确';
    }],
    ['Date', (time) => {
      return time.getTime();
    }],
    ['Other', () => {
      return '参数类型不符！';
    }]
  ]);
  constructor(time: any, callback: Function) {
    let typeCode = dataType(time) === 'String'|| dataType(time) === 'Number'|| dataType(time) === 'Date' ? dataType(time) : 'Other';
    let timestamp = this._typeCode.get(typeCode).call(this,time);
    if(dataType(timestamp) === 'Number') {
      let timer: number;
      timer = setInterval(() => {
        callback(this.computerTime(timestamp,timer));
      }, 1000, timestamp, timer);
    } else {
      callback(timestamp);
    }
  }
  public computerTime(timestamp, timer): object | string {
    let currentTimestamp = new Date().getTime(); //当前时间距离1970年的毫秒数
    if (timestamp - currentTimestamp < 0) {
      clearInterval(timer);
      return '目标时间小于当前时间，倒计时结束！';
    }
    let second = Math.floor((timestamp - currentTimestamp) / 1000);//未来时间距离现在的秒数
    let day = Math.floor(second / 86400); //整数部分代表的是天；一天有24*60*60=86400秒 ；
    second %= 86400;//余数代表剩下的秒数；
    let hour = Math.floor(second / 3600);//整数部分代表小时；
    second %= 3600; //余数代表 剩下的秒数；
    let minute = Math.floor(second / 60);
    second %= 60;
    return {day,hour,minute,second};
  }
}

export default CountDown;
