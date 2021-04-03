$(() => {
    initFormEmptinessValidation('form input:not([class*="btn"]), form textarea', '#btn-contact');

    runStartAnimation();
});

function runStartAnimation() {
    const form = $('form');
    const initialFormHeight = form.height();
    const initialFormPadding = form.css('padding');
    form.css({height: 0, padding: 0});
    form.animate({height: initialFormHeight, padding: initialFormPadding}, 'medium');
}
