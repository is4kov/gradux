$().ready(function(){

    let $container = $(document).find('[data-elem="options-gradient1"]'),
        colorFrom = $container.find('[data-elem="from-color"]').val(),
        colorFromIsRGBA = $container.find('[data-elem="is-from-rgba"]').checked,
        opacityFrom = $container.find('[data-elem="from-opacity"]').val(),
        colorTo = $container.find('[data-elem="to-color"]').val(),
        colorToIsRGBA = $container.find('[data-elem="is-to-rgba"]').checked,
        opacityTo = $container.find('[data-elem="to-opacity"]').val(),

        getGradientDirection = function _getDirection() {
            let direction = $container.find('is-selected').data('value');
        }

    console.log('from: ' + colorFrom + '; to: ' + colorTo);

    let GradientCSS = 'background: linear-gradient(to top, ' + colorFrom + ', ' + colorTo + ')';

    $('#example').css(GradientCSS)
});