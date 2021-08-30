module.exports = class Page {
    async open() {
        await browser.url('https://raminjshsdgadfaddasjhhbjkafaadfbjsd.stage.storied.co/components-test-app/smartimage')
    }

    async openScroll() {
        await browser.newWindow('https://raminjshsdgadfaddasjhhbjkafaadfbjsd.stage.storied.co/components-test-app/text-animations-scroll')


    }
}