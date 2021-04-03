function initFormEmptinessValidation(inputsSelector, buttonSelector) {
    const isEmptyInputs = [];
    const inputs = $(inputsSelector);

    inputs.on('blur', function () {
        const input = $(this);
        isEmptyInputs[input[0].name] = input.val() === '';
        setButtonEnabled(buttonSelector, Object.keys(isEmptyInputs).map(name => isEmptyInputs[name]).every(v => !v));
    });

    inputs.each(function () {
        const input = $(this);
        isEmptyInputs[input[0].name] = input.val() === '';
    });
}

function setButtonEnabled(selector, enabled) {
    if (enabled) {
        $(selector).removeClass('disabled');
        $(`${selector} input`).removeClass('disabled');
    } else {
        $(selector).addClass('disabled');
        $(`${selector} input`).addClass('disabled');
    }
}