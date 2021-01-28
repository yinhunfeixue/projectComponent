declare const FormRegExp: {
    /**
     * 正整数
     */
    PINT: RegExp;
    /**
     * 正整数含0
     */
    PINT_AND_ZERO: RegExp;
    /**
     * 负整数
     */
    NINT: RegExp;
    /**
     * /中文
     */
    CHINESE: RegExp;
    /**
     * 非中文
     */
    NOT_CHINESE: RegExp;
    /**
     * 邮箱
     */
    EMAIL: RegExp;
    /**
     * /m n 需要自定义,判断是否是2位/3位或4位数字
     */
    NUMBER: RegExp;
    /**
     * 正负整数或者正负小数
     */
    NUMBER_OR_FLOAT: RegExp;
    /**
     * 手机号码
     */
    MOBILE: RegExp;
    /**
     * 电话
     */
    PHONE: RegExp;
    /**
     * 带区号的电话
     */
    /**
     * 非零开头的最多带4位小数的数字
     */
    INT_OR_FLOAT: RegExp;
    /**
     * /社会统一信用代码,18位 数字或大写英文字母组成
     */
    SOCIALCREDITCODE: RegExp;
    /**
     * 精准的社会统一信用代码,比如这个就是对的:A1430111MA4L16JQ9B
     */
    SOCIALCREDITCODE_PRECISE: RegExp;
    /**
     * 工商注册号:15位数字
     */
    BUSLICENSE: RegExp;
    /**
     * 组织机构代码:9位数字或大写英文字母
     */
    ORGCODE: RegExp;
    /**
     * /纳税人识别号:15位、18或者20位数字或字母
     */
    TAXID: RegExp;
    /**
     * 身份证号码为15位或者18位，15位时全为数字，18位前17位为数字，最后一位是校验位，可能为数字或字符X
     */
    IDCARD: RegExp;
    /**
     * 港澳身份证
     */
    HK_IDCARD: RegExp;
    /**
     * 台湾身份证
     */
    TW_IDCARD: RegExp;
    /**
     * 军官证
     */
    OFFICERCARD: RegExp;
    /**
     * 户口本
     */
    ACCOUNTCARD: RegExp;
    /**
     * 护照
     */
    PASSPORTCARD: RegExp;
    /**
     * 驾驶证
     */
    DRIVERCARD: RegExp;
    /**
     * ip地址
     */
    IPADRESS: RegExp;
    /**
     * 传真,
     */
    FAX: RegExp;
    /**
     * ICP备案号
     */
    ICP: RegExp;
};
export default FormRegExp;
