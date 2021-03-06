/**
 * ?
 *
 * @namespace Lungo
 * @class Fallback
 *
 * @author Javier Jimenez Villar <javi@tapquo.com> || @soyjavi
 */

Lungo.Fallback = (function(lng, undefined) {

    var androidInputs = function(article_id, active) {
        environment = lng.Core.environment();
        if (environment.isMobile && environment.os.name === 'android' && environment.os.version < '4') {
            var selector = article_id + ' input, ' + article_id + ' textarea, ' + article_id + ' select';
            var input_elements = lng.dom(selector);
            for (var i = 0, len = input_elements.length; i < len; i++) {
                (active) ? _enableAndroidInput(input_elements[i]) : _disableAndroidInput(input_elements[i]);
            }
        }
    };

    var fixPositionInAndroid = function() {
        env = lng.Core.environment();

        var position = (env.isMobile && env.os.name === 'Android' && env.os.version < "3") ? "absolute" : "fixed";
        lng.Element.Cache.sections.style("position", position);
    };

    var _enableAndroidInput = function(input) {
        input.removeAttribute('disabled');
    };

    var _disableAndroidInput = function(input) {
        input.setAttribute('disabled', 'disabled');
    };

    return {
        androidInputs: androidInputs,
        fixPositionInAndroid: fixPositionInAndroid
    };

})(Lungo);
