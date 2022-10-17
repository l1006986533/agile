const chat = require("./chat.js")
const loginjs = require("./login.js")
const friend = require("./friend.js")
const { add_element, add_emoji } = chat;
const { login } = loginjs;
const {search_and_add_friend} = friend;
describe('Unit test', () => {
    test("Login", () => {
        expect(
            login('Iamuser', 'abc123')
        ).toBe('Login success.');
        expect(() => {
            login('', '');
        }).toThrow();
    });
    test("Send messages with videos", () => {
        expect(() => {
            add_element('../img/avatar1.jpeg');
        }) //no return
    });
    test("Send messages with images", () => {
        expect(() => {
            add_element('../img/1.mp4');
        })
    });
    test("Send messages with emojis", () => {
        expect(() => {
            add_emoji('😊');
        })
    });
    test("Search and add friend", () => {
        expect(search_and_add_friend('liao'))
          .toBe('Send friend request successfully!');
        expect(search_and_add_friend('12345678901234567890'))
          .toBe('Username can\'t be longer than 16 letters!');
    });
})
describe('Integration test', () => {
    test("Send mix messages(videos, images, emojis and texts)", () => {
        expect(() => {
            add_element('../img/avatar1.jpeg','../img/1.mp4','😊','and some texts');
        })
    });
})