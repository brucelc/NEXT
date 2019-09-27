/*
 * @Author: bruce.lc
 * @Date: 2019-09-22 23:13:51
 * @Last Modified by: bruce.lc
 */
import React from 'react';
import Head from 'next/head';
// style
import style from './index.less';

export default class About extends React.PureComponent {
  render() {
    return (
      <div className={style.main}>
        <Head>
          <title>About2</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <span>About2</span>
      </div>
    );
  }
}
