/* eslint-disable import/no-unresolved */
/*
 * @Author: bruce.lc
 * @Date: 2019-09-22 23:09:20
 * @Last Modified by: bruce.lc
 */
import Link from 'next/link';

// style
import style from './index.less';

export default () => (
  <div>
    <span>Welc22ome to next.1j1111s!</span>
    <img className={style.img} src="/static/0920.jpg" alt="" />
    <Link href="/about">
      <a href="javascript:;">go to about</a>
    </Link>
  </div>
);
