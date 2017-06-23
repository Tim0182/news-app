import _ from 'underscore';
import {View} from 'backbone';
import ArticleView from '../views/ArticleView';
import $ from 'jquery';


/**
 * The ArticlesView holds the list layout for all the articles
 */
var ArticlesView = View.extend({

    initialize: function () {

        //Reset collection on a new render
        this.collection.on('reset', this.render, this);
    },

    //Get the template from the html
    template: _.template($("#ArticlesViewTemplate").html()),

    render: function () {
        let results = $('#results');
        results.empty();

        //Each loop in the the whole collection to render every item to the view
        this.collection.each(function (model) {
            let articleView = new ArticleView({ model: model });
            results.append(articleView.render().el);
        });
        return this;
    }
});

export default ArticlesView;