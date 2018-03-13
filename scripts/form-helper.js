var Suls = Suls || {};

Suls.FormHelper = (function () {
    function disableSubmitButton (form) {
        $(form).find("input[type = 'submit']").attr('disabled', true);
    }

    function enableSubmitButton (form) {
        $(form).find("input[type = 'submit']").attr('disabled', false);
    }

    function hideForm(btn) {
        var form = $(btn).closest('form');
        form.remove();
    };

   function scrollToForm() {
        var updateId = $(this).data('ajax-update');
        $('html, body').animate({ scrollTop: $(updateId).offset().top }, 'slow');
    };

    function scrollToElement(data) {
        $(this).hide();

        var postId = $($.parseHTML(data)[1]).prop('id');
        $('html, body').animate({ scrollTop: $('#' + postId).offset().top }, 'slow');
    };

    function postActionFailure(data) {
        var errorMessage = JSON.parse(data.responseText).Message || 'Възникна неочаквана грешка. Моля, опитайте по-късно.';
        errorMessage = errorMessage.replace(/"[^"]*"/g, '');
        alert(errorMessage);
    };

    function onSubmitConfirmationAlert(selector, message) {
        $(selector).submit(function () {
            return $(this).valid() && confirm(message);
        });
    };

    return {
        disableSubmitButton: disableSubmitButton,
        enableSubmitButton: enableSubmitButton,
        hideForm: hideForm,
        scrollToForm: scrollToForm,
        scrollToElement: scrollToElement,
        postActionFailure: postActionFailure,
        onSubmitConfirmationAlert: onSubmitConfirmationAlert
    };
})();