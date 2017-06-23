import {Model} from 'backbone';
/**
 * Model of Article
 */
const  Article = Model.extend({
    defaults: {
        title : " ",
        url: " ",   
        urlToImage : " ",    
        description : " ",
        author : " ",
        publishedAt : " ",
    }
});

export default Article;