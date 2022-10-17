const chat = require("./chat.js")
const loginjs = require("./login.js")
const {add_element,add_emoji}=chat;
const {login}=loginjs;
test("Login", () => { 
    expect(
        login('Iamuser','abc123')
    ).toBe('Login success.');
    expect(() => {
        login('','');
    }).toThrow();
});
test("Send messages with videos", () => { 
    expect(() => {
        add_element('./1.jpg');
    })
});
test("Send messages with images", () => { 
    expect(() => {
        add_element('./1.mp4');
    })
});
test("Send messages with emojis", () => { 
    expect(() => {
        add_emoji('😊');
    })
});
test("Search and add friend", () => { 
    expect(() => {
        search_and_add_friend('liao');
    })
});