const myPromise = new Promise(function (myResolve) {
    setTimeout(function () {
        myResolve("I love You !!");
    }, 3000);
});

myPromise.then(function (value) {
    document.getElementById("demo").innerHTML = value;
});
