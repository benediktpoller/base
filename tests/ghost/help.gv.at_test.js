var url = 'http://help.gv.at';

casper
.start(url)

.then(function() {
    this.test.assertTitle('HELP.gv.at: Ihr Wegweiser durch die Ämter und Behörden in Österreich');
})

.run(function() {
    this.test.done();
});
