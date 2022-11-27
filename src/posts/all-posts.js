/**
 * @typedef {Object} post
 * @property {String} title - Title of the post displayed to a user
 * @property {String} date - The date the post was created
 * @property {String} slug - The slug of the post
 * @property {String} url - The relative url of the post
 */

/** @type {Array<post>} */
export const allPosts = [
	{
		title: 'Hello World!',
		date: '2020-09-13',
		slug: 'hello-world',
		url: '/blog/hello-world'
	},
	{
		title: 'Fizz Buzz',
		date: '2020-09-13',
		slug: 'fizz-buzz',
		url: '/blog/fizz-buzz'
	},
	{
		title: `Better "If Statements"`,
		date: '2021-08-23',
		slug: 'better-if-statements',
		url: '/blog/better-if-statements'
	},

	{
		title: 'Paper Scissors Rock',
		date: '2021-08-26',
		slug: 'paper-scissors-rock',
		url: '/blog/paper-scissors-rock'
	},
	{
		title: 'The Power Of Ellipsis',
		date: '2021-11-02',
		slug: 'the-power-of-ellipsis',
		url: '/blog/the-power-of-ellipsis'
	}
];
