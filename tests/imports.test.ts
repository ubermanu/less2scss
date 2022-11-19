import test from 'ava';
import { transformSync } from '../src/less2scss';

test('Imports should be transformed and extension changed', (t) => {
    t.is(transformSync('@import "test.less";'), '@import "test.scss";');
});
