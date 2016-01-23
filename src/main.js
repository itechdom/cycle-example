import {run} from '@cycle/core';
import {makeDOMDriver, hJSX} from '@cycle/dom';
import List from './List';
import React from 'react';

function main(sources) {
  return List(sources);
}

run(main, {
  DOM: makeDOMDriver('#container')
});
