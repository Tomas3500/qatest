const Page = require('../../test/pageobjects/Page')

class FullScreen extends Page {
    get elementsImg() { return $('.zoom-image-cover') }
    get icon() { return $('.inline-gallery-wrapper .gallery-close-icon use') }

    async clickImg() {


        this.elementsImg.waitForDisplayed({ timeout: 3000 });
        await this.elementsImg.click()
    }

    async screen() {
        await browser.saveScreenshot('./screenshot.png');
        await this.icon.click()

    }
}
module.exports = new FullScreen()

