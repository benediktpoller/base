casper.on("http.status.404", function(resource) {
        this.test.fail('404');
}); 
