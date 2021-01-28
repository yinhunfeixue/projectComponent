"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var DAY_TO_HOUR = 24;
var HOUR_TO_MINUTE = 60;
var MINUTE_TO_SECOND = 60;
var SECOND_TO_MILLISECOND = 1000;
/**
 * 表示一个时间段
 * @author : xujunjie (yinhunfeixue@163.com)
 * @Date   : 2017-11-19 12:52:53
 */

var TimeSpan = /*#__PURE__*/function () {
  /**
   * 实例化TimeSpan.
   * @param {number} days 天数.
   * @param {number} hours 小时.
   * @param {number} minutes 分钟.
   * @param {number} seconds 秒数.
   * @param {number} milliseconds 毫秒.
   */
  function TimeSpan() {
    var days = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var hours = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    var minutes = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    var seconds = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
    var milliseconds = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;

    _classCallCheck(this, TimeSpan);

    this._milliseconds = milliseconds;
    this._milliseconds += seconds * SECOND_TO_MILLISECOND;
    this._milliseconds += minutes * MINUTE_TO_SECOND * SECOND_TO_MILLISECOND;
    this._milliseconds += hours * HOUR_TO_MINUTE * MINUTE_TO_SECOND * SECOND_TO_MILLISECOND;
    this._milliseconds += days * DAY_TO_HOUR * HOUR_TO_MINUTE * MINUTE_TO_SECOND * SECOND_TO_MILLISECOND;
  }
  /**
   * 此实例加上另一个TimeSpan
   * @param {TimeSpan} ts
   *
   * @return {TimeSpan} 此实例的值与 ts 的值之和的新的 TimeSpan，不改变当前实例.
   */


  _createClass(TimeSpan, [{
    key: "add",
    value: function add(ts) {
      return new TimeSpan(0, 0, 0, 0, this._milliseconds + ts._milliseconds);
    }
    /**
     * 返回新的 TimeSpan 对象，其值是当前 TimeSpan 对象的绝对值.
     * @return {TimeSpan} 新的 TimeSpan，其值是当前 TimeSpan 对象的绝对值.
     */

  }, {
    key: "abs",
    value: function abs() {
      return new TimeSpan(0, 0, 0, 0, Math.abs(this._milliseconds));
    }
    /**
     * 获取由当前 TimeSpan 结构表示的整天数
     * @type {number}
     */

  }, {
    key: "format",

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
    value: function format() {
      var formatStr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'hh:mm:ss';
      var o = {
        D: Math.floor(this.totalDays),
        H: Math.floor(this.totalHours),
        M: Math.floor(this.totalMinutes),
        S: Math.floor(this.totalSeconds),
        I: Math.floor(this.totalMilliseconds),
        d: this.days,
        h: this.hours,
        m: this.minutes,
        s: this.seconds,
        i: this.milliseconds
      };
      var result = formatStr;

      var _loop = function _loop(key) {
        result = result.replace(new RegExp('(' + key + '+)'), replacefun);

        function replacefun() {
          var arg = arguments;
          var number = o[key];
          var currentRegStr = arg[1].replace(new RegExp(key, 'g'), '0');
          var numberStr = number.toString();
          if (numberStr.length > currentRegStr.length) return numberStr;else return currentRegStr.substr(0, currentRegStr.length - numberStr.length) + numberStr;
        }
      };

      for (var key in o) {
        _loop(key);
      }

      return result;
    }
  }, {
    key: "days",
    get: function get() {
      if (this._milliseconds >= 0) return Math.floor(this.totalDays);else return Math.ceil(this.totalDays);
    }
    /**
     * 获取由当前 TimeSpan 结构表示的整小时数
     * @type {number}
     */

  }, {
    key: "hours",
    get: function get() {
      if (this._milliseconds >= 0) return Math.floor(this.totalHours) % DAY_TO_HOUR;else return Math.ceil(this.totalHours) % DAY_TO_HOUR;
    }
    /**
     * 获取由当前 TimeSpan 结构表示的整分钟数
     * @type {number}
     */

  }, {
    key: "minutes",
    get: function get() {
      if (this._milliseconds >= 0) return Math.floor(this.totalMinutes) % HOUR_TO_MINUTE;else return Math.ceil(this.totalMinutes) % HOUR_TO_MINUTE;
    }
    /**
     * 获取由当前 TimeSpan 结构表示的整秒数
     * @type {number}
     */

  }, {
    key: "seconds",
    get: function get() {
      if (this._milliseconds >= 0) return Math.floor(this.totalSeconds) % MINUTE_TO_SECOND;else return Math.ceil(this.totalSeconds) % MINUTE_TO_SECOND;
    }
    /**
     * 获取由当前 TimeSpan 结构表示的整毫秒数
     * @type {number}
     */

  }, {
    key: "milliseconds",
    get: function get() {
      if (this._milliseconds >= 0) return Math.floor(this._milliseconds) % SECOND_TO_MILLISECOND;else return Math.ceil(this._milliseconds) % SECOND_TO_MILLISECOND;
    }
    /**
     * 获取以整天数和天的小数部分表示的当前 TimeSpan 结构的值
     * @type {number}
     */

  }, {
    key: "totalDays",
    get: function get() {
      return this.totalHours / DAY_TO_HOUR;
    }
    /**
     * 获取以整小时数和小时的小数部分表示的当前 TimeSpan 结构的值
     * @type {number}
     */

  }, {
    key: "totalHours",
    get: function get() {
      return this.totalMinutes / HOUR_TO_MINUTE;
    }
    /**
     * 获取以整分钟数和分钟的小数部分表示的当前 TimeSpan 结构的值
     * @type {number}
     */

  }, {
    key: "totalMinutes",
    get: function get() {
      return this.totalSeconds / MINUTE_TO_SECOND;
    }
    /**
     * 获取以整秒数和秒的小数部分表示的当前 TimeSpan 结构的值
     * @type {number}
     */

  }, {
    key: "totalSeconds",
    get: function get() {
      return this._milliseconds / SECOND_TO_MILLISECOND;
    }
    /**
     * 获取以整毫秒数和毫秒的小数部分表示的当前 TimeSpan 结构的值
     * @type {number}
     */

  }, {
    key: "totalMilliseconds",
    get: function get() {
      return this._milliseconds;
    }
  }]);

  return TimeSpan;
}();

var _default = TimeSpan;
exports.default = _default;