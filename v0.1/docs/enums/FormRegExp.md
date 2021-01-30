# FormRegExp

此类包含各种常用正则

<style>
td,th{
  border:1px solid #eee;
  padding:5px 20px
}
</style>

```tsx
import React from 'react';
import { FormRegExp } from 'fb-project-component';
export default () => {
  const pint = '1240';
  const pintError = 'a12d4';

  const pintZero = '01234';
  const pintZeroError = '01234';

  const nint = '-234';
  const nintError = 'a-234';

  const chinese = '我爱祖国天安门';
  const chineseError = '我爱123祖国天安门';

  const notChinese = 'abc@##';
  const notChineseError = '我爱123祖国天安门';

  const email = 'abc@163.com';
  const emailError = 'dsa.sdf.ds';

  const mobile = '18611111111';
  const mobileError = '1861111111';

  const phone = '027-22332222';
  const phoneError = '1861111111';

  const idCard = '372729183905202725';
  const idCardError = '372729183905202';

  const ip = '255.5.4.23';
  const ip6 = '2001:0db8:85a3:08d3:1319:8a2e:0370:7344';
  const ipError = '255.5.4';
  return (
    <table>
      <tbody>
        <tr>
          <th>正整数</th>
          <td>{pint}</td>
          <td>{FormRegExp.PINT.test(pint).toString()}</td>
          <td>{pintError}</td>
          <td>{FormRegExp.PINT.test(pintError).toString()}</td>
        </tr>
        <tr>
          <th>含零正整数</th>
          <td>{pintZero}</td>
          <td>{FormRegExp.PINT_AND_ZERO.test(pintZero).toString()}</td>
          <td>{pintZeroError}</td>
          <td>{FormRegExp.PINT_AND_ZERO.test(pintZeroError).toString()}</td>
        </tr>
        <tr>
          <th>负整数</th>
          <td>{nint}</td>
          <td>{FormRegExp.NINT.test(nint).toString()}</td>
          <td>{nintError}</td>
          <td>{FormRegExp.NINT.test(nintError).toString()}</td>
        </tr>

        <tr>
          <th>中文</th>
          <td>{chinese}</td>
          <td>{FormRegExp.CHINESE.test(chinese).toString()}</td>
          <td>{chineseError}</td>
          <td>{FormRegExp.CHINESE.test(chineseError).toString()}</td>
        </tr>

        <tr>
          <th>非中文</th>
          <td>{notChinese}</td>
          <td>{FormRegExp.NOT_CHINESE.test(notChinese).toString()}</td>
          <td>{notChineseError}</td>
          <td>{FormRegExp.NOT_CHINESE.test(notChineseError).toString()}</td>
        </tr>

        <tr>
          <th>邮箱</th>
          <td>{email}</td>
          <td>{FormRegExp.EMAIL.test(email).toString()}</td>
          <td>{emailError}</td>
          <td>{FormRegExp.EMAIL.test(emailError).toString()}</td>
        </tr>

        <tr>
          <th>手机号码</th>
          <td>{mobile}</td>
          <td>{FormRegExp.MOBILE.test(mobile).toString()}</td>
          <td>{mobileError}</td>
          <td>{FormRegExp.MOBILE.test(mobileError).toString()}</td>
        </tr>

        <tr>
          <th>座机</th>
          <td>{phone}</td>
          <td>{FormRegExp.PHONE.test(phone).toString()}</td>
          <td>{phoneError}</td>
          <td>{FormRegExp.PHONE.test(phoneError).toString()}</td>
        </tr>

        <tr>
          <th>身份证</th>
          <td>{idCard}</td>
          <td>{FormRegExp.IDCARD.test(idCard).toString()}</td>
          <td>{idCardError}</td>
          <td>{FormRegExp.IDCARD.test(idCardError).toString()}</td>
        </tr>

        <tr>
          <th>IP</th>
          <td>{ip}</td>
          <td>{FormRegExp.IPADRESS.test(ip).toString()}</td>
          <td>{ip6}</td>
          <td>{FormRegExp.IPADRESS.test(ipError).toString()}</td>
        </tr>
        <tr>
          <th>IP6</th>
          <td>{ip6}</td>
          <td>{FormRegExp.IPADRESS.test(ip6).toString()}</td>
        </tr>
      </tbody>
    </table>
  );
};
```
