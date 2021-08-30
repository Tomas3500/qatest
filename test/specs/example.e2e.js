const FullScreen = require('../pageobjects/fullscreen.page');
const ElemScroll = require('../pageobjects/scroll.page');

describe('a test suite', () => {
    it('a test case_fullSreen', async function () {
        await FullScreen.open();
        await FullScreen.clickImg();
        await FullScreen.screen();
        await expect(FullScreen.elementsImg).toBeEnabled();
    });


    it('a test case_ElemScroll', async function () {
        await ElemScroll.open();
        await ElemScroll.elemScroll.isDisplayedInViewport();
        await ElemScroll.elemScroll.scrollIntoView();
        await ElemScroll.moveToElement(ElemScroll.elemScroll)
        await browser.pause(5000)


    });
});

