import moment from 'moment';
import React, { useEffect, useState } from 'react';
import TimeSpan from '../core/TimeSpan';

const classnames = require('classnames');

interface ICountUpProps {
  /**
   * 计时开始时间
   */
  startTime: string;

  /**
   * 显示时间的格式，最大只能格式化到天
   * dd 表示天  hh 表示小时  mm表示分钟  ss表示秒
   * HH可超过60小时  MM和SS同理
   * 如 25小时20分钟10秒  可用HH:mm:ss表示为25:20:10  也可用dd hh:mm:ss 表示为01 01:20:10
   */
  format?: string;

  /**
   * 计时器显示的样式类名
   */
  countUpClassName?: string;
}

/**
 * 计时器
 * @param props
 */
const CountUp = (props: ICountUpProps) => {
  const { countUpClassName, startTime, format } = props;

  const [time, setTime] = useState(new TimeSpan());

  const updateTime = () => {
    const count = moment().valueOf() - moment(startTime).valueOf();
    setTime(new TimeSpan(0, 0, 0, 0, count));
  };

  useEffect(() => {
    updateTime();
    const countUp = setInterval(() => {
      updateTime();
    }, 1000);
    return function clear() {
      clearInterval(countUp);
    };
  }, [startTime]);
  return (
    <div className={classnames('countUpContent', countUpClassName)}>{time.format(format)}</div>
  );
};

export default CountUp;
