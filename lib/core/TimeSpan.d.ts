/**
 * 表示一个时间段
 * @author : xujunjie (yinhunfeixue@163.com)
 * @Date   : 2017-11-19 12:52:53
 */
declare class TimeSpan {
    private _milliseconds;
    /**
     * 实例化TimeSpan.
     * @param {number} days 天数.
     * @param {number} hours 小时.
     * @param {number} minutes 分钟.
     * @param {number} seconds 秒数.
     * @param {number} milliseconds 毫秒.
     */
    constructor(days?: number, hours?: number, minutes?: number, seconds?: number, milliseconds?: number);
    /**
     * 此实例加上另一个TimeSpan
     * @param {TimeSpan} ts
     *
     * @return {TimeSpan} 此实例的值与 ts 的值之和的新的 TimeSpan，不改变当前实例.
     */
    add(ts: TimeSpan): TimeSpan;
    /**
     * 返回新的 TimeSpan 对象，其值是当前 TimeSpan 对象的绝对值.
     * @return {TimeSpan} 新的 TimeSpan，其值是当前 TimeSpan 对象的绝对值.
     */
    abs(): TimeSpan;
    /**
     * 获取由当前 TimeSpan 结构表示的整天数
     * @type {number}
     */
    get days(): number;
    /**
     * 获取由当前 TimeSpan 结构表示的整小时数
     * @type {number}
     */
    get hours(): number;
    /**
     * 获取由当前 TimeSpan 结构表示的整分钟数
     * @type {number}
     */
    get minutes(): number;
    /**
     * 获取由当前 TimeSpan 结构表示的整秒数
     * @type {number}
     */
    get seconds(): number;
    /**
     * 获取由当前 TimeSpan 结构表示的整毫秒数
     * @type {number}
     */
    get milliseconds(): number;
    /**
     * 获取以整天数和天的小数部分表示的当前 TimeSpan 结构的值
     * @type {number}
     */
    get totalDays(): number;
    /**
     * 获取以整小时数和小时的小数部分表示的当前 TimeSpan 结构的值
     * @type {number}
     */
    get totalHours(): number;
    /**
     * 获取以整分钟数和分钟的小数部分表示的当前 TimeSpan 结构的值
     * @type {number}
     */
    get totalMinutes(): number;
    /**
     * 获取以整秒数和秒的小数部分表示的当前 TimeSpan 结构的值
     * @type {number}
     */
    get totalSeconds(): number;
    /**
     * 获取以整毫秒数和毫秒的小数部分表示的当前 TimeSpan 结构的值
     * @type {number}
     */
    get totalMilliseconds(): number;
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
    format(formatStr?: string): string;
}
export default TimeSpan;
