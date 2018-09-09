
$(function() {

    "use strict"; // use strict to start

    // resize window

    function resizeWindow() {

        var timesRun = 0;
        var interval = setInterval(function(){
            timesRun += 1;
            if(timesRun === 5){
                clearInterval(interval);
            }
            window.dispatchEvent(new Event('resize'));
        }, 62.5);
    }

    //for lobicard

    $('.lobicard-custom-icon').lobiCard({
        reload: {
            icon: 'ti-reload'
        },
        editTitle: {
            icon: 'ti-pencil-alt',
            icon2: 'ti-save-alt'
        },
        unpin: {
            icon: 'ti-move'
        },
        minimize: {
            icon: 'ti-angle-up',
            icon2: ' ti-angle-down'
        },
        close: {
            icon: 'ti-close'
        },
        expand: {
            icon: 'ti-fullscreen',
            icon2: 'ti-fullscreen'
        }
    });

    $('.lobicard-custom-control').lobiCard({
        reload: false,
        editTitle: false,
        unpin: false,
        minimize: {
            icon: 'ti-angle-up',
            icon2: ' ti-angle-down'
        },
        close: {
            icon: 'ti-close'
        },
        expand: {
            icon: 'ti-fullscreen',
            icon2: 'ti-fullscreen'
        }
    });


    //popover
    $('[data-toggle="popover"]').popover();

    //tooltip
    $('[data-toggle="tooltip"]').tooltip()

});
