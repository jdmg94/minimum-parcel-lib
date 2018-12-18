/**
 * @Author: JoseMunoz
 * @Date:   2018-12-18T14:20:08-06:00
 * @Last modified by:   JoseMunoz
 * @Last modified time: 2018-12-18T14:20:14-06:00
 */
import React, { Fragment } from 'react';
import { hydrate } from 'react-dom';

const Demo = () => (
  <Fragment>
    <span>Hello world!</span>
  </Fragment>
)

hydrate(<Demo />, document.getElementById('root'));