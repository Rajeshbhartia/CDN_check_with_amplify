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

    var iframe = document.createElement('iframe');
    iframe.src = "https://main.d1rkp7h1wos0ov.amplifyapp.com/";
    iframe.width = "100%";
    iframe.height = "500";
    iframe.frameBorder = "0";
    document.body.appendChild(iframe);

}
