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
}

export default HtmlUtil;
