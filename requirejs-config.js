var config = {
    paths: {
        slick: 'js/lib/slick.min',
        initSlick: 'js/init-slick'
    },
    shim: {
        slick: {
            deps: ['jquery']
        }
    },
    deps: [
        'initSlick'
    ]
};