const Page = require('../../test/pageobjects/Page')


class Scroll extends Page {
    get elemScroll() {
        return $('.n2-temp-class')
    }

    open() {
        return super.openScroll();
    }

    moveToElement(elem) {
        elem.waitForDisplayed({ timeout: 1000 });
        elem.moveTo();
    }

}

module.exports = new Scroll();