function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var HtmlUtil = /*#__PURE__*/function () {
  function HtmlUtil() {
    _classCallCheck(this, HtmlUtil);
  }

  _createClass(HtmlUtil, null, [{
    key: "plainHtml",

    /**
     * 富文本转换为纯文件
     * @param htmlStr 富文本
     */
    value: function plainHtml(htmlStr) {
      if (!htmlStr) {
        return '';
      }

      var span = document.createElement('span');
      span.innerHTML = htmlStr;
      return span.innerText;
    }
    /**
     * 从blob中导出文件
     * @param blob blob实例
     * @param fileName 文件名
     */

  }, {
    key: "exportBlob",
    value: function exportBlob(blob, fileName) {
      var url = URL.createObjectURL(blob);
      var link = document.createElement('a');
      link.href = url;

      if (fileName) {
        link.download = fileName;
      }

      link.click();
    }
    /**
     * 判断是否是移动端
     */

  }, {
    key: "isMobile",
    value: function isMobile() {
      var ua = navigator.userAgent;
      var ipad = ua.match(/(iPad).*OS\s([\d_]+)/);
      var isIphone = !ipad && ua.match(/(iPhone\sOS)\s([\d_]+)/);
      var isAndroid = ua.match(/(Android)\s+([\d.]+)/);
      return isIphone || isAndroid;
    }
    /**
     * 设置系统粘贴板的文字
     * @param str 要复制的文本内容
     * @param completeHandler 设置结束的处理函数，格式为fun(result)。 result表示复制结果，true表示复制成功，false表示复制失败
     */

  }, {
    key: "copyText",
    value: function copyText(str) {
      var element = document.createElement('textarea');
      element.value = str;
      element.style.visibility = 'false';
      element.style.width = '0';
      element.style.height = '0';
      document.body.appendChild(element);
      element.select();
      var result = true;

      try {
        document.execCommand('Copy');
      } catch (error) {
        result = false;
      } finally {
        document.body.removeChild(element);
      }

      return result;
    }
  }]);

  return HtmlUtil;
}();

export default HtmlUtil;