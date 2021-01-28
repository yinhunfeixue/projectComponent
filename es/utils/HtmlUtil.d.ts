declare class HtmlUtil {
    /**
     * 富文本转换为纯文件
     * @param htmlStr 富文本
     */
    static plainHtml(htmlStr?: string): string;
    /**
     * 从blob中导出文件
     * @param blob blob实例
     * @param fileName 文件名
     */
    static exportBlob(blob: Blob, fileName?: string): void;
    /**
     * 判断是否是移动端
     */
    static isMobile(): RegExpMatchArray | null;
    /**
     * 设置系统粘贴板的文字
     * @param str 要复制的文本内容
     * @param completeHandler 设置结束的处理函数，格式为fun(result)。 result表示复制结果，true表示复制成功，false表示复制失败
     */
    static copyText(str: string): boolean;
}
export default HtmlUtil;
