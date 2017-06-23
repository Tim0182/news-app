import {Router} from 'backbone';
import $ from 'jquery';

import Articles from '../collections/Articles';
import Source from '../models/Source';

import ArticlesView from '../views/ArticlesView';
import ArticleView from '../views/ArticleView';
import SearchView from '../views/SearchView';
import SourceView from '../views/SourceView';

/**
 * Router for the URL's
 *
 * @constructor
 */
const AppRouter = Router.extend({
    routes: {
        '': 'list',
        'source': 'source'
    },
    list: function () {

        let articles = new Articles();
        let av = new ArticlesView({ collection: articles });
        let searchView = new SearchView({ collection: articles });

        //empty results and appent ArticlesView
        $("#results").empty().append(av.render().el);
        //Fetch articles
        articles.fetch({ reset: true })
    },
    source: function () {
        let source = new Source();
        let sv = new SourceView({ model: source });
        
        /**
         * Fetch everything from source
         * then empty the div with id: main
         * append that to StreamerView
         * @param  {true}} {reset
         */
        source.fetch({ reset: true }).then(() =>
            $("#main").empty().append(sv.render().el)
        );
    }
});


export default AppRouter;