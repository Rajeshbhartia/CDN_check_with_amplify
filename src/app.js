if (process.env.NODE_ENV === "development") {
    document.addEventListener('DOMContentLoaded', function () {
        if (module.hot) {
            module.hot.accept('./components/index', function () {
                console.log('Accepting the updated mod--devlopment');
            });
        }
    });
} else {
    console.log('Accepting the updated mod--production');
}
