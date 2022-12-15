---
layout: post
title: 'Better "If Statements"'
date: 2021-08-23
slug: 'better-if-statements'
summary: 'Don''t use "if statements" with lots of possible outcomes!<br><br> It''s best to avoid this if possible, <ul> <li>"IF statements" can get very ugly and difficult to read</li> <li>"Switch statements" are better, but not by much.</li> <br> <li>The third option is much cleaner and exponentially more efficient.</li> </ul>'
---

Don't use "if statements" with lots of possible outcomes!
It's best to avoid this if possible, because "if statements" can get very ugly and difficult to read; "switch statements" are better, but not by much.
The third option is much cleaner and exponentially more efficient.

### Javascript - If Statement

```
var response = "error"
var color = ""

if (response == "success") {
	color = "text-green"
}
else if (response == "warning") {
	color = "text-orange"
}
else if (response == "error") {
	color = "text-red"
}
else {
	color = "text-black"
}
```

> 15 Lines and 235 characters to solve a simple problem.
> Not only is this code ugly but can also be very innefficient as the number of operations increases.
> IE: "error" will currently require 3 calculations to determine the color; if there was 15 possible colors this code could require 15 operations to determine the outcome.

In contrast the "switch statement" is far more efficient because it works on a map-based architecture.
This means that the operation will cost the same computationally no matter the number of possible colors.
However the "switch statement" is arguably ugly to read.

### Javascript - Switch Statement

```
var response = "warning"
var color = ""

switch(response) {
  case "success":
    color = "text-green"
    break;
  case "warning":
    color = "text-orange"
    break;
  case "error":
    color = "text-red"
    break;
}
```

> With 11 lines and 221 characters: this is an improvement over the multiple "if statements" however there is a third option that is much cleaner and very efficient.

If we store our "response" and "color" in a javascript object we can use it to quickly and neatly map our "input" to our "output"
In the below example we use the "response" variable as an object key to determine our "color" value.

### Javascript - Object Map

```
var response = "success"
var colorMap = {
	"success": "text-green",
	"warning": "text-orange",
	"error": "text-red",
	"": "text-black"
}
var color = colorMap[response]
```

> At 8 lines and 167 characters this is the shortest implementation.
> In a high performance situation this solution ranks much higher than the "if statement" option, the object map allows an `o1` constant performance.
> In my opinion this approach is much neater and tidier than both the "if statement" and "switch statement" options.
