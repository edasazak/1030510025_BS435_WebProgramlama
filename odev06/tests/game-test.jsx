const React = require('react');
const {mount} = require('enzyme');
const  {Game} = require('../src/client/game');

test('kart sayısı', ()=> {
    const driver = mount(<Game/>);

    const cards = driver.find('.kart')
    expect(cards.length).toBe(3);
})
test('oyun oluşturuldu', ()=>{
    const driver = mount(<Game/>);
});

test("kart seç", ()=>{
    const driver = mount(<Game/>);

    let card = driver.find('.kart').at(0);
    card.simulate('click');
    card = driver.find('.kart').at(0);
    let srcName = card.find("img").prop("src")
    expect(srcName === 'img/cat.png' || srcName === 'img/dog1.png' || srcName === 'img/dog2.png').toBeTruthy();
})
test("kediyi bul", ()=>{
    const driver = mount(<Game/>);
    const kartlar = driver.find('.kart').at(0);
    card = driver.find('.kart').at(0);
    card.simulate('click');
    card = driver.find('.kart').at(0);

})