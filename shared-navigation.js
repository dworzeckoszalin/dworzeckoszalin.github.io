(function () {
    function getCurrentPage() {
        const path = window.location.pathname.split('/').pop();
        return path || 'main.html';
    }

    window.initSharedNavigation = function () {
        const currentPage = getCurrentPage();
        document.querySelectorAll('.bottom-nav .nav-item').forEach(function (item) {
            const link = item.getAttribute('href');
            const isCurrent = link === currentPage ||
                (currentPage === '' && link === 'main.html');

            item.classList.toggle('active-nav', isCurrent);

            if (isCurrent) {
                item.setAttribute('aria-current', 'page');
            } else {
                item.removeAttribute('aria-current');
            }
        });
    };
})();
