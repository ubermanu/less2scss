import { test } from 'uvu';
import * as assert from 'uvu/assert';
import { transformSync } from '../src/less2scss';

test('Mixins should be transformed with correct arguments', () => {
    const input = `
.test {
    .mixin(@arg1, @arg2);
}`;

    const expected = `
.test {
    @include mixin($arg1, $arg2);
}`;

    assert.is(transformSync(input), expected);
});

test('Mixins declarations should be transformed', () => {
    const input = `
.mixin(@arg1, @arg2) {
    color: @arg1;
    background: @arg2;
}`;

    // TODO: Somehow the space between the closing parenthesis and the opening curly brace is missing
    const expected = `
@mixin mixin($arg1, $arg2){
    color: $arg1;
    background: $arg2;
}`;

    assert.is(transformSync(input), expected);
});

test.run();
