/// <reference types="react" />
interface ICountUpProps {
    /**
     * 服务器时间戳，如果不传，以客户端时间为准
     */
    serverTimestamp?: number;
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
declare const CountUp: (props: ICountUpProps) => JSX.Element;
export default CountUp;
