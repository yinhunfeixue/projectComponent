const DAY_TO_HOUR = 24;
const HOUR_TO_MINUTE = 60;
const MINUTE_TO_SECOND = 60;
const SECOND_TO_MILLISECOND = 1000;

/**
 * 表示一个时间段
 * @author : xujunjie (yinhunfeixue@163.com)
 * @Date   : 2017-11-19 12:52:53
 */
class TimeSpan {
  private _milliseconds: number;

  /**
   * 实例化TimeSpan.
   * @param {number} days 天数.
   * @param {number} hours 小时.
   * @param {number} minutes 分钟.
   * @param {number} seconds 秒数.
   * @param {number} milliseconds 毫秒.
   */
  constructor(days = 0, hours = 0, minutes = 0, seconds = 0, milliseconds = 0) {
    this._milliseconds = milliseconds;
    this._milliseconds += seconds * SECOND_TO_MILLISECOND;
    this._milliseconds += minutes * MINUTE_TO_SECOND * SECOND_TO_MILLISECOND;
    this._milliseconds += hours * HOUR_TO_MINUTE * MINUTE_TO_SECOND * SECOND_TO_MILLISECOND;
    this._milliseconds +=
      days * DAY_TO_HOUR * HOUR_TO_MINUTE * MINUTE_TO_SECOND * SECOND_TO_MILLISECOND;
  }

  /**
   * 此实例加上另一个TimeSpan
   * @param {TimeSpan} ts
   *
   * @return {TimeSpan} 此实例的值与 ts 的值之和的新的 TimeSpan，不改变当前实例.
   */
  add(ts: TimeSpan) {
    return new TimeSpan(0, 0, 0, 0, this._milliseconds + ts._milliseconds);
  }

  /**
   * 返回新的 TimeSpan 对象，其值是当前 TimeSpan 对象的绝对值.
   * @return {TimeSpan} 新的 TimeSpan，其值是当前 TimeSpan 对象的绝对值.
   */
  abs() {
    return new TimeSpan(0, 0, 0, 0, Math.abs(this._milliseconds));
  }

  /**
   * 获取由当前 TimeSpan 结构表示的整天数
   * @type {number}
   */
  get days() {
    if (this._milliseconds >= 0) return Math.floor(this.totalDays);
    else return Math.ceil(this.totalDays);
  }

  /**
   * 获取由当前 TimeSpan 结构表示的整小时数
   * @type {number}
   */
  get hours() {
    if (this._milliseconds >= 0) return Math.floor(this.totalHours) % DAY_TO_HOUR;
    else return Math.ceil(this.totalHours) % DAY_TO_HOUR;
  }

  /**
   * 获取由当前 TimeSpan 结构表示的整分钟数
   * @type {number}
   */
  get minutes() {
    if (this._milliseconds >= 0) return Math.floor(this.totalMinutes) % HOUR_TO_MINUTE;
    else return Math.ceil(this.totalMinutes) % HOUR_TO_MINUTE;
  }

  /**
   * 获取由当前 TimeSpan 结构表示的整秒数
   * @type {number}
   */
  get seconds() {
    if (this._milliseconds >= 0) return Math.floor(this.totalSeconds) % MINUTE_TO_SECOND;
    else return Math.ceil(this.totalSeconds) % MINUTE_TO_SECOND;
  }

  /**
   * 获取由当前 TimeSpan 结构表示的整毫秒数
   * @type {number}
   */
  get milliseconds() {
    if (this._milliseconds >= 0) return Math.floor(this._milliseconds) % SECOND_TO_MILLISECOND;
    else return Math.ceil(this._milliseconds) % SECOND_TO_MILLISECOND;
  }

  /**
   * 获取以整天数和天的小数部分表示的当前 TimeSpan 结构的值
   * @type {number}
   */
  get totalDays() {
    return this.totalHours / DAY_TO_HOUR;
  }
  /**
   * 获取以整小时数和小时的小数部分表示的当前 TimeSpan 结构的值
   * @type {number}
   */
  get totalHours() {
    return this.totalMinutes / HOUR_TO_MINUTE;
  }
  /**
   * 获取以整分钟数和分钟的小数部分表示的当前 TimeSpan 结构的值
   * @type {number}
   */
  get totalMinutes() {
    return this.totalSeconds / MINUTE_TO_SECOND;
  }
  /**
   * 获取以整秒数和秒的小数部分表示的当前 TimeSpan 结构的值
   * @type {number}
   */
  get totalSeconds() {
    return this._milliseconds / SECOND_TO_MILLISECOND;
  }
  /**
   * 获取以整毫秒数和毫秒的小数部分表示的当前 TimeSpan 结构的值
   * @type {number}
   */
  get totalMilliseconds() {
    return this._milliseconds;
  }

  /**
   * 按指定格式格式化
   * D——totalDays
   * H——totalHours
   * M——totalMinutes
   * S——totalSeconds
   * I——totalMilliseconds
   * d——天
   * h——时
   * m——分
   * s——秒
   * i——毫秒
   *
   * @param {string} formatStr 格式字符串
   * @return {string} 格式化之后的字符串
   *
   */
  format(formatStr = 'hh:mm:ss') {
    let o = {
      D: Math.floor(this.totalDays),
      H: Math.floor(this.totalHours),
      M: Math.floor(this.totalMinutes),
      S: Math.floor(this.totalSeconds),
      I: Math.floor(this.totalMilliseconds),
      d: this.days,
      h: this.hours,
      m: this.minutes,
      s: this.seconds,
      i: this.milliseconds,
    };
    let result = formatStr;
    for (let key in o) {
      result = result.replace(new RegExp('(' + key + '+)'), replacefun);

      function replacefun() {
        let arg = arguments;
        let number = (o as any)[key];
        let currentRegStr = arg[1].replace(new RegExp(key, 'g'), '0');

        let numberStr = number.toString();
        if (numberStr.length > currentRegStr.length) return numberStr;
        else return currentRegStr.substr(0, currentRegStr.length - numberStr.length) + numberStr;
      }
    }
    return result;
  }
}

export default TimeSpan;
