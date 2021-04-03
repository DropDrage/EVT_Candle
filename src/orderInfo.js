$(() => {
    const materialInputs = $('.material-input input');
    initFormEmptinessValidation('.material-input input', '#btn-continue');

    materialInputs.on('focus', function () {
        $(this).addClass('active');
    });

    materialInputs.on('blur', function () {
        const input = $(this);
        if (input.val() === '') {
            input.removeClass('active');
        }
    });

    materialInputs.each(function () {
        const input = $(this);
        if (input.val() !== '') {
            input.addClass('active');
        }
    });

    runStartAnimation();
});

function runStartAnimation() {
    $('.material-input').each(function (i) {
        const input = $(this);
        input.css({opacity: 0, left: `-1${i}rem`});

        ++i;
        const timeout = (i + (i % 2)) * (25 + (i % 2) * 30);
        setTimeout(() => input.animate({opacity: '1', left: '0'}, 'medium'), timeout);
    });
}