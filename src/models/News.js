import {Model} from 'backbone';

/**
 * Model of News
 */
const News = Model.extend({
    url: 'https://newsapi.org/v1/sources?language=en',
    defaults: {
        sources: {
			id: '',
	        name: '',
	        description: '',
	        url: '',
	        category: '',
	        language: '',
        }
    }
});

export default News;