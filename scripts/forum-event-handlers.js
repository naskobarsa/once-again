'use strict';

var forum = forum || {};

forum.eventHandlers = (function () {
    var _getNewPostVoteForm = function _getNewPostVoteForm(data) {
        var newVoteForm;
        $($.parseHTML(data)).each(function (index, node) {
            var currentNode = $(node);
            if (currentNode.is('form')) {
                newVoteForm = currentNode;
                return false;
            }
        });

        return newVoteForm;
    }

    var _getPostPrefix = function _getPostPrefix(postIdFormat) {
        var prefix = '';
        if (postIdFormat.indexOf('question') === 0) {
            prefix = 'question';
        } else if (postIdFormat.indexOf('answer') === 0) {
            prefix = 'answer';
        } else if (postIdFormat.indexOf('comment') === 0) {
            prefix = 'comment';
        }

        return prefix;
    }

    var updatePostVotes = function updatePostVotes(data) {
        var newVoteForm = _getNewPostVoteForm(data);

        var postId = newVoteForm.data('postId');
        var postIdFormat = newVoteForm.data('postIdFormat');
        var prefix = _getPostPrefix(postIdFormat);

        var newVotes = newVoteForm.data('votes');
        var oldVotes = parseInt($(this).data('votes'));

        $('#' + prefix + '-votes-count-' + postId).text(newVotes);

        if (oldVotes === 0) {
            $('#' + prefix + '-votes-icon-' + postId).html('<i class="fa fa-hand-o-' + (newVotes > 0 ? 'up' : 'down') + '"></i>');
        } else if (newVotes === 0) {
            $('#' + prefix + '-votes-icon-' + postId).html('<i class="fa fa-hand-o-right"></i>');
        }
    };

    var postReportSuccess = function postReportSuccess(data) {
        var successMessage = data.Message || '';
        successMessage = successMessage.replace(/"[^"]*"/g, '');

        var form = $(this);

        var successMessageContainerId = form.data('successMessageContainerId');
        form.hide();

        var successMessageContainer = $('#' + successMessageContainerId);
        successMessageContainer.html(successMessage);

        setTimeout(function () {
            successMessageContainer.html('');
        }, 3000);
    };

    var postActionFailure = function postActionFailure(data) {
        var errorMessage = JSON.parse(data.responseText).Message || 'Възникна неочаквана грешка. Моля, опитайте по-късно.';
        errorMessage = errorMessage.replace(/"[^"]*"/g, '');
        $(this).find('.post-action-errors').html(errorMessage);
    };

    var hideForm = function hideForm(btn) {
        var form = $(btn).closest('form');
        var ckeditorInstances = form.find('.cke');
        if (ckeditorInstances) {
            sulsControls.Editors.ckeditor.resetCKEditor(ckeditorInstances);
        }

        form.remove();
    };

    var reloadPage = function reloadPage() {
        window.location.reload();
    };

    var showNotEnoughForumPointsTooltip = function showNotEnoughForumPointsTooltip() {
        var tooltipSelector = '.insufficient-forum-points-tooltip';

        var allTooltips = $(tooltipSelector);
        allTooltips.hide();
        allTooltips.click(function () {
            allTooltips.hide();
        });

        var tooltipContainer = $(this).find(tooltipSelector)[0];
        $(tooltipContainer).show();
    };

    return {
        updatePostVotes: updatePostVotes,
        postActionFailure: postActionFailure,
        postReportSuccess: postReportSuccess,
        hideForm: hideForm,
        reloadPage: reloadPage,
        showNotEnoughForumPointsTooltip: showNotEnoughForumPointsTooltip
    };
}());
