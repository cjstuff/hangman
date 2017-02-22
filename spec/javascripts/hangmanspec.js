/**
 * Created by htiwari on 21/02/2017.
 */


it("should execute the callback function on success", function () {
    spyOn($, "ajax").and.callFake(function(options) {
        options.success();
    });
    var successcallback = jasmine.createSpy();
    var failcallback = jasmine.createSpy();
    getProduct(successcallback, failcallback);
    expect(successcallback).toHaveBeenCalled();
});


function getProduct(successcallback, failcallback) {
    // creates random valid IMDB movie ID
    var movie = pad(Math.floor((Math.random() * 2155529) + 1), 7);
    $.ajax({
        type: "GET",
        url: "http://www.omdbapi.com/?i=tt" + movie,
        data: "",
        success: successcallback,
        error: failcallback
    });
}



