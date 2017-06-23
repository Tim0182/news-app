import _ from 'underscore';
import {Events} from 'backbone';
import $ from 'jquery';

import Article from './models/Article';
import Articles from './collections/Articles';

import ArticlesView from './views/ArticlesView';
import ArticleView from './views/ArticleView';
import SearchView from './views/SearchView';

import AppRouter from './routers/AppRouter'

(function () {
    let setGlobalVariables = function () {
        window.App = {};
        App.events = _.clone(Events);
    };

    /**
     * Run after dom is ready
     */
    let init = function () {
        setGlobalVariables();

        let router = new AppRouter();
        //Start the router with the root
        Backbone.history.start({ pushState: true, root: '/serious-javascript/' });
    };

    window.addEventListener('load', init);
})();
