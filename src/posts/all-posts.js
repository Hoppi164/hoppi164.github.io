/**
 * @typedef {Object} post
 * @property {String} title - Title of the post displayed to a user
 * @property {String} date - The date the post was created
 * @property {String} slug - The slug of the post
 * @property {String} summary - The summary of the post as an html string
 * @property {String} url - The relative url of the post
 */

/** @type {Array<post>} */
export const allPosts = [
	{
		title: 'Hello World!',
		date: '2020-09-13',
		slug: 'hello-world',
		summary: `I created this blog to act as a mini-repository of challenges, and solutions on my programming journey.<br><br>Check back regularily for new updates!`,
		url: '/blog/hello-world'
	},
	{
		title: 'Fizz Buzz',
		date: '2020-09-13',
		slug: 'fizz-buzz',
		summary: `The "Fizz-Buzz test" is an interview question designed to filter out 90% of candidates who can't solve the simplest of problems. <ul><li> "Write a program that prints the numbers from 1 to 100. </li> <li>But for multiples of three print “Fizz” instead of the number</li> <li> and for the multiples of five print “Buzz”.</li><li> For numbers which are multiples of both three and five print “FizzBuzz”</li></ul>`,
		url: '/blog/fizz-buzz'
	},
	{
		title: `Better "If Statements"`,
		date: '2021-08-23',
		slug: 'better-if-statements',
		summary: `Don't use "if statements" with lots of possible outcomes!<br><br> It's best to avoid this if possible, because "if statements" can get very ugly and difficult to read; <br>"switch statements" are better, but not by much. <br><br>The third option is much cleaner and exponentially more efficient.`,
		url: '/blog/better-if-statements'
	},

	{
		title: 'Paper Scissors Rock',
		date: '2021-08-26',
		slug: 'paper-scissors-rock',
		summary: `A silly childs game can pose an interesting challenge for software development.<br><br> Programming the game rules can be approached in many different ways`,
		url: '/blog/paper-scissors-rock'
	},
	{
		title: 'The Power Of Ellipsis',
		date: '2021-11-02',
		slug: 'the-power-of-ellipsis',
		summary: `Responsiveness is a concern that should be front and center for any modern front-end developer. Your site should look brilliant on all screens; large and small`,
		url: '/blog/the-power-of-ellipsis'
	}
];
