/// <reference path="./../../typings/browser.d.ts" />

import { IsNullPipe } from './isnull-pipe';

describe('IsNullPipe', () => {    
    let pipe: IsNullPipe;

    beforeEach(() => {
        pipe = new IsNullPipe();
    });

    it('transforms null values', () => {
        expect(pipe.transform(null, 'foo')).toEqual('foo');
    });    

    it('preserves non-null values', () => {
        expect(pipe.transform('bar', 'foo')).toEqual('bar');
    });
});