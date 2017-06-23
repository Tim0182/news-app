import {Collection} from 'backbone';
import Article from '../models/Article';

/**
 * Collection from Articles
 */
let newssource = ['bbc-news', 'the-wall-street-journal', 'metro', 'ign', 'espn', 'business-insider-uk', 'cnn', 'buzzfeed', 'google-news'];
let randomNews = newssource[Math.floor(Math.random() * newssource.length)];

const Articles = Collection.extend({
    model: Article,
    url: 'https://newsapi.org/v1/articles?source=' + randomNews + '&sortBy=top&apiKey=2237db9de21244eeaf2b503cde90fbc2',
    //Get only the data after articles in the api
    parse: function (response) {
        return response.articles
    }
});

export default Articles;