import test from 'ava';
import { transformSync } from '../src/less2scss';

test('Variables should be correctly transformed', (t) => {
    t.is(transformSync('@color: #4D926F;'), '$color: #4D926F;');
    t.is(transformSync('@primary__color: blue;'), '$primary__color: blue;');
    t.is(transformSync('@primary__color: @color;'), '$primary__color: $color;');
});

test('Variables should be correctly transformed in selectors', (t) => {
    t.is(transformSync('.test { color: @color; }'), '.test { color: $color; }');
    t.is(
        transformSync('.test { color: @primary__color; }'),
        '.test { color: $primary__color; }'
    );
});
