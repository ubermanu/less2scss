import { test } from 'uvu';
import * as assert from 'uvu/assert';
import { transformSync } from '../src/less2scss';

test('Variables should be correctly transformed', () => {
    assert.is(transformSync('@color: #4D926F;'), '$color: #4D926F;');
    assert.is(
        transformSync('@primary__color: blue;'),
        '$primary__color: blue;'
    );
    assert.is(
        transformSync('@primary__color: @color;'),
        '$primary__color: $color;'
    );
});

test('Variables should be correctly transformed in selectors', () => {
    assert.is(
        transformSync('.test { color: @color; }'),
        '.test { color: $color; }'
    );
    assert.is(
        transformSync('.test { color: @primary__color; }'),
        '.test { color: $primary__color; }'
    );
});

test.run();
