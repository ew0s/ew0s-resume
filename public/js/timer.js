(function iife () {
    window.addEventListener('load', () => {
        const timing = window.performance.timing;
        const pageLoadTime = timing.loadEventStart - timing.navigationStart;
        const newElement = document.createElement('section');

        const main = document.querySelector('.header_info');

        newElement.innerHTML = `<p>Page was loaded in ${pageLoadTime} milliseconds</p>`
        
        main.insertAdjacentElement('beforebegin', newElement);
    });
})();
