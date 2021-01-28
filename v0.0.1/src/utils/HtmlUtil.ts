class HtmlUtil {
  /**
   * 富文本转换为纯文件
   * @param htmlStr 富文本
   */
  static plainHtml(htmlStr?: string) {
    if (!htmlStr) {
      return '';
    }
    const span = document.createElement('span');
    span.innerHTML = htmlStr;
    return span.innerText;
  }

  /**
   * 从blob中导出文件
   * @param blob blob实例
   * @param fileName 文件名
   */
  static exportBlob(blob: Blob, fileName?: string) {
    let url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    if (fileName) {
      link.download = fileName;
    }
    link.click();
  }

  /**
   * 判断是否是移动端
   */
  static isMobile() {
    const ua = navigator.userAgent;
    const ipad = ua.match(/(iPad).*OS\s([\d_]+)/);
    const isIphone = !ipad && ua.match(/(iPhone\sOS)\s([\d_]+)/);
    const isAndroid = ua.match(/(Android)\s+([\d.]+)/);
    return isIphone || isAndroid;
  }

  /**
   * 设置系统粘贴板的文字
   * @param str 要复制的文本内容
   * @param completeHandler 设置结束的处理函数，格式为fun(result)。 result表示复制结果，true表示复制成功，false表示复制失败
   */
  static copyText(str: string): boolean {
    let element = document.createElement('textarea');
    element.value = str;
    element.style.visibility = 'false';
    element.style.width = '0';
    element.style.height = '0';
    document.body.appendChild(element);
    element.select();

    let result = true;
    try {
      document.execCommand('Copy');
    } catch (error) {
      result = false;
    } finally {
      document.body.removeChild(element);
    }
    return result;
  }
}

export default HtmlUtil;
