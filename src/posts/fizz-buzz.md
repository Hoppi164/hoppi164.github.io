---
layout: post
title: Fizz Buzz
date: 2020-09-14
slug: 'fizz-buzz'
summary: 'The "Fizz-Buzz test" is an interview question designed to filter out 90% of candidates who cannot solve the simplest of problems. <ul><li> "Write a program that prints the numbers from 1 to 100. </li> <li>But for multiples of three print “Fizz” instead of the number</li> <li> and for the multiples of five print “Buzz”.</li><li> For numbers which are multiples of both three and five print “FizzBuzz”</li></ul>'
---

The "Fizz-Buzz test" is an interview question designed to filter out 90% of candidates who can't solve the simplest of problems.

> "Write a program that prints the numbers from 1 to 100. But for multiples of three print “Fizz” instead of the number and for the multiples of five print “Buzz”. For numbers which are multiples of both three and five print “FizzBuzz”."

This problem is difficult for many new developers as it requires some forward thinking.
It's a beneficial test for employers as it reveals each candidates approach to a problem.

Here is my recommended approach to the Fizz Buzz question:

Use a `message` variable which will allow you to solve this challenge in a very neat and readable way.

### Python

```python
for i in range(1, 100):
	message = ""
	if i % 3 == 0:
		message += "Fizz"
	if i % 5 == 0:
		message += "Buzz"
	if message == "":
		message = i
	print(message)
```

### Javascript

```javascript
for (var i = 1; i <= 100; i++) {
	var message = '';
	if (i % 3 == 0) message += 'Fizz';
	if (i % 5 == 0) message += 'Buzz';
	if (message == '') message = i;
	console.log(message);
}
```
