class HtmlUtil {
  static plainHtml(htmlStr?: string) {
    if (!htmlStr) {
      return '';
    }
    const span = document.createElement('span');
    span.innerHTML = htmlStr;
    return span.innerText;
  }

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
