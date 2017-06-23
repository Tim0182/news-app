import _ from 'underscore';
import {View} from 'backbone';
import $ from 'jquery';

/**
 * The SourceView holds the layout for the sources
 */
const SourceView = View.extend({
    initialize: function () {
        this.model.on('reset', this.render, this);
    },
    template: _.template($("#SourceTemplate").html()),
    render: function () {
        $('#main').empty();
        this.el.innerHTML = this.template(this.model.toJSON());
        return this;
    }
});


export default SourceView;