import _ from 'underscore';
import {View} from 'backbone';
import $ from 'jquery';


/**
 * The ArticleView holds the layout for one Article
 */
const ArticleView = View.extend({
    template: _.template($("#ArticleTemplate").html()),
    // render with a tagName of "tr"
    tagName: 'tr',
    render: function () {
        // render template to view with the model.
        this.el.innerHTML = this.template(this.model.toJSON());
        return this;
    }
});


export default ArticleView;