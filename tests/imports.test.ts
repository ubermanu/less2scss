import { test } from 'uvu';
import * as assert from 'uvu/assert';
import { transformSync } from '../src/less2scss';

test('Imports should be transformed and extension changed', () => {
    assert.is(transformSync('@import "test.less";'), '@import "test.scss";');
});

test.run();
