jQuery(function ($) {
    $(document).on('click', '.dupli-dismissable-dismiss', function (e) {
        e.preventDefault();

        var $root = $(this).closest('.dupli-dismissable');
        if ($root.length === 0) {
            return;
        }

        var action = $root.data('dismiss-action');
        var nonce  = $root.data('dismiss-nonce');
        if (!action || !nonce) {
            return;
        }

        DupliJs.Util.ajaxWrapper(
            { action: action, nonce: nonce },
            function () { return ''; },
            null,
            { showProgress: false }
        );

        var $tr = $root.closest('tr');
        if ($tr.length > 0) {
            $tr.remove();
        } else {
            $root.hide().remove();
        }
    });
});
