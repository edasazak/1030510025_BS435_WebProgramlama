const React = require('react');
const {mount} = require('enzyme');
const  {Game} = require('../src/client/Game');

const checkGame = (driver) => {
    const kartlar = driver.find('.kart').at(0);
    expect(srcName === 'img/cat.png' || srcName === 'img/dog1').toBeTruthy();
}
test('oyun oluşturuldu', ()=>{
    const driver = mount(<Game/>);
    checkGame(driver);
});

test("kart seç", ()=>{
    const driver = mount(<Game/>);
    let card = driver.find('.kart').at(0);
    card.simulate('click');
    checkGame(driver);
    card.find("img").prop("src")
})
test("kediyi bul", ()=>{
    card = driver.find('.kart').at(0);
    card.simulate('click');
    card = driver.find('.kart').at(0);
    srcName = card.find("img").prop("src")
})