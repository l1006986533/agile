const chat = require("./chat.js")
const { add_element, add_emoji } = chat;
describe('Integration test', () => {
    test("Send mix messages(videos, images, emojis and texts)", () => {
        expect(() => {
            add_element('../img/avatar1.jpeg','../img/1.mp4','😊','and some texts');
        })
    });
})