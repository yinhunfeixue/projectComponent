class HtmlUtil {
  static plainHtml(htmlStr?: string) {
    if (!htmlStr) {
      return '';
    }
    const span = document.createElement('span');
    span.innerHTML = htmlStr;
    return span.innerText;
  }
}

export default HtmlUtil;
