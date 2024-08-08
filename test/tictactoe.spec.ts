import {add} from "../src";

describe('Tic Tac Toe Should', () => {
    test("make 'X' do something", () => {
        expect(add(2,3)).toBe(5);
    })
});
