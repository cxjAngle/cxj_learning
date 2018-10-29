let calClient = (function windowResizeHandler() {
    let client = {
        oldheight: window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight,
        step: 0,
        newheight: window.innerHeight ||  document.documentElement.clientHeight || document.body.clientHeight
    };
    return function () {
        client.newheight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
        client.step = client.newheight - client.oldheight;
        client.oldheight = client.newheight;
        return client;
    };
})();

module.exports = {
    calClient 
}