# Natural Time

Play with the interactive [Natural Time demo](https://rijuvenator.github.io/natural-time/)!

Come back here for the explanation, examples, and jokes!

## Introduction
_Ben-Hur_ (1959) is 212 minutes long. Quick: How many hours and minutes is that?

It probably wasn't all that quick to figure out. First, you divide 212 by 60. If you use a calculator, you get 3.533... and then you take the 0.533, maybe you round it for convenience, and you multiply by 60 to get 31.98, which is pretty close to 32, so you conclude that it's 3 hours and 32 minutes. Or you didn't use a calculator, so you're doing long division by hand, so you think about how 60 &times; 3 is 180 and 60 &times; 4 is 240, so it's going to be 3 something, then you do the subtraction and end up with 32. Great, so it's 3 hours, 32 minutes. But it's kind of annoying to _do_ that calculation, right?

Here are some more examples of time-related arithmetic that _should_ be a little simpler than they are:

  * How many seconds are in a day?
  * How many minutes pass between 7:53 am and 1:36 pm?
  * If it's currently 10:43 am, what time will it be in 3.75 hours?
  * How much time is 2/5 (40%) of four hours?

Now think about similar arithmetic with the metric system.

  * How many mL are in 2.12 L? Just move the decimal point: 2120 mL.
  * What is the difference between 75.3 cm and 13.6 cm? Just subtract: 61.7 cm.
  * If you have 10.43 kg, and you add 3.75 kg, how much mass do you have? Just add: 14.18 kg.
  * How much space is 2/5 (40%) of 4 GB? Just multiply: 1.6 GB.

Wouldn't it be nice if _time_ were as easy to work with as most of our other measurements?

Here, I'll offer and explain one simple solution: if you write time in base 60, its natural base, time becomes just as easy to work with.

## The Place Value System

### Base 10, a.k.a. Home Base

One reason the metric system is so easy to use is that its units are factors of 10, which happens to be the **base** we write all our numbers in. What this means is that we write numbers as a sequence of digits, or numerals, multiplied by powers of 10. This is home base, the most familiar and common way of writing numbers, and it's so ubiquitous we don't even think about it.

Let's say we have a number like 73.5. We don't think about this every day, but this is actually shorthand for

73.5 = 7 &times; 10 + 3 + 5 &times; 0.1

Remember the rules of exponents:

  * 10<sup>1</sup> = 10
  * 10<sup>0</sup> = 1
  * 10<sup>–1</sup> = 0.1

So another, completely equivalent way of writing the above is

73.5 = 7 &times; 10<sup>1</sup> + 3 &times; 10<sup>0</sup> + 5 &times; 10<sup>–1</sup>

Since we usually assume that the digits are multiplying powers of 10, we don't write that part out – good thing, too, or everyday numbers would be pretty hard to read. We just write the 7, 3, and 5, put down a . to mark where the 0 power is – the decimal point – and we know which power to start and end with. This is called the _place value_ system, and because the numbers are being multiplied by powers of 10, it's called **base 10**, or **decimal**. It's a pretty compact way of representing any number, especially when compared to other systems like Roman numerals.

### Bases Other Than 10

What's so special about base 10? **Nothing at all**. It's completely arbitrary. We could have picked any number. We're using to counting in 10's, so we picked 10, but there's nothing stopping us from picking something else. For example, here's 73.5, written as a sequence of _numbers multiplying powers of 2_:

1 &times; 2<sup>6</sup> + 0 &times; 2<sup>5</sup> + 0 &times; 2<sup>4</sup> + 1 &times; 2<sup>3</sup> + 0 &times; 2<sup>2</sup> + 0 &times; 2<sup>1</sup> + 1 &times; 2<sup>0</sup> + 1 &times; 2<sup>–1</sup>

It looks complicated, but it's really just some number (a 1 or 0) multiplying 2 to some power, in decreasing order from left to right. If you calculate that out, you'll find it's 64 + 8 + 1 + 0.5 = 73.5. And again, _if we already know that every digit is multiplying powers of 2_, we can just write the "multiplying numbers" out (they're called **coefficients**), and it looks simple:

1001001.1

This is called **base 2**, or **binary**, and it's used extensively in computers and electronics because it's the natural way of representing **digital information**, which is just a series of things being _on_ or _off_ (1 and 0). That's also why you see so many powers of 2 in computing terminology: 16 GB flash drives, or 32-bit vs. 64-bit processors, and more.

One really important thing I want to emphasize is that the **underlying number has not changed, only the way we are writing it has**. This is just notation that we're choosing for whatever purpose is most convenient for us. But as we'll see, the right notation often has the power to solve problems completely on its own.

### Privileged Arithmetic

Quick: what's 73.5 divided by 10? Easy: just move the decimal point one space to the left to get 7.35. Multiplying and dividing by 10, 100, 1000 is easy: you just move the decimal place the right number of spaces. There's those powers of 10 again: is that a coincidence? Nope. The general rule is: **it's easy to multiply and divide by powers of the base**. Since we write most of our numbers in base 10, it's easy to multiply and divide by powers of 10. Multiplying and dividing by the base and its powers is **privileged arithmetic**.

Does that mean multiplying and dividing by powers of 2 is easy when a number is written in base 2? **Yes**. If you follow the same logic, multiplying by 2 must mean that you move the . one space to the right. So to do 73.5 &times; 2, you just do

1001001.1 &rarr; 10010011.

That first 1 on the left now represents 1 &times; 2<sup>7</sup> and so on, all the way down, and you can verify that 128 + 16 + 2 + 1 = 147, which is 73.5 &times; 2.

Now we see why working with metric is so easy: it's because **conversions in metric involve multiplying and dividing by 10**. We write everything in base 10 and all the units are separated by factors of 10, so working with metric is as easy as working with any ordinary number.

So what other bases can we use to take advantage of Privileged Arithmetic? Maybe you see where this is going...

#### Why is Privileged Arithmetic Privileged? [Optional]
Without being too technical or formal, I'll sketch here a casual proof, but if the above is convincing enough, feel free to skip this part.

Every term in the place value expansion in base 10 looks like (a number) &times; 10<sup>something</sup>. If you multiply the whole thing by 10, the 10 distributes to every term, and you end up with every term looking instead like (a number) &times; 10<sup>something</sup> &times; 10. By exponent rules, this is just (a number) &times; 10<sup>something + 1</sup>. That means _every_ exponent of 10 has increased by 1. We remember that 73.5 starts with an exponent of 1, then 0, then -1 because of where the decimal point is; if all we wanted to do was remember that it should start with an exponent of 2, then 1, then 0 instead, we just need to move the decimal point over one place. Similarly, multiplying by 100 means every exponent of 10 has increased by 2, so we move 2 decimal places; dividing by 10 means every exponent of 10 has _decreased_ by 1, so we move the decimal point to the left, instead. It's _privileged_ to multiply and divide by 10 because 10 and its powers are the only numbers that can combine with the exponent in such a simple way, and it's a consequence of the base we write out numbers in. Finally, note that replacing every 10 in the above with whatever base you feel like – 2, for example, and replace the 100 with 2<sup>2</sup> = 4, none of the arguments change, which is why privileged arithmetic works in any base as long as you use the base the number is written in.

## Natural Time

Working with metric is easy because it's based on base 10, which is the base we use to write our numbers.

Time, on the other hand, _isn't_ easy to work with because it's not based on base 10. Instead, it's based on **base 60**. That is, there are 60 seconds in a minute, and 60 minutes in an hour, just like there are 10 millimeters in a centimeter, 100 centimeters in a meter, and so on. We inherited this system of timekeeping from the Babylonians, who also invented the first place value system, but later on most of the world switched over to using base 10 for everything. So we're left with awkward multiplying and dividing by 60 calculations, and converting time between units isn't intuitive.

Remember, the advantage of the metric system is that it's based on powers of 10, which is the base they're written in. So to improve time, we have two options:

  * **Use a system of time units that are based on base 10**. The French actually tried this in the late 18th century; most other attempts to decimalize actually did stick, and left us with the modern metric system, but making everyone use decimal seconds and decimal hours so that there would be 100 seconds in a minute and 100 minutes in an hour and 10 hours in a day proved unsuccessful.
  * **Write time in base 60, the base it's based on**. A base 60 system is called _sexagesimal_. If we wrote time in base 60 instead of base 10, it would be easy to work with, the way metric is easy to work with.

I call writing time in a base 60 system _natural time_, because time is expressed in its _natural_ base of 60.

### Digits in Base 60

In base 10, there are exactly 10 unique numerals used as digits: 0–9. In base 10, there are exactly 2 unique numerals: 0 and 1.

A base 60 system must therefore have **60 unique numerals**.

It's common in the computing world to use base 16; to get 6 extra numerals, we simply use letters, A–F. So A is 10, B is 11, etc. and the base 16 (hexadecimal) number 1A represents 16 + 10 = 36. I'll start with the same convention.

  * 0-9 represent 0-9 as in decimal; it would be too confusing otherwise
  * a-j represent 10-19
  * k-t represent 20-29
  * A-J represent 30-39
  * K-T represent 40-49
  * &alpha;-&kappa; represent 50-59

The intent is for this to be at least somewhat human-readable and human-useable, and I hoped that grouping into 10's and aligning with the order of the alphabet would help with that.

See the [Natural Time demo](https://rijuvenator.github.io/natural-time/) for the full, explicit conversion table.

### Natural Time Demo

The [Natural Time demo](https://rijuvenator.github.io/natural-time/) lets you put in a time of day, or a number of hours/minutes/seconds, and write it in base 60 natural time with the digits above. Using the arrow keys or clicking on the + and – buttons increments the time. Clicking on any of the times or the unit indicators cycles between units.

Converting between hours, minutes, and seconds is as easy as moving the decimal point (really, "sexagesimal point").

In natural time, every second, minute, and hour is represented by a single unique digit, and the representation works just like it works with base 10 numbers, ticking over when it gets to 59 instead of at 9. Reading a time in natural time tells you, transparently, what its structure is in hours, minutes, and seconds.

#### Cycling Units

The demo cycles between the following sets of units.

For standard time,

  * **12-hour** is 12-hour time, with colons (:), and an am/pm dividing the day in half
  * **24-hour** is 24-hours time, starting at 00:00:00 and ending at 23:59:59
  * **hrs, mins, secs** is some number of hours, minutes, and seconds, e.g. 2 h, 30 m, 0 s
  * **decimal hours** is hours with digits after the decimal point, e.g. 2.5 h
  * **mins, secs** is a number of minutes and seconds, e.g. 150 m, 0 s
  * **decimal minutes** is minutes with digits after the decimal point, e.g. 150.0 m
  * **seconds** is a number of seconds, e.g. 9000 s

For natural time,

  * **natural time** is the 3 digit time in base 60, with no units or points, here equal to seconds
  * **natural seconds** is natural time in seconds, with the decimal point at the end
  * **natural minutes** is natural time in minutes, with the decimal point one space to the left
  * **natural hours** is natural time in hours, with the decimal point two spaces to the left

### Examples

So, how long is _Ben-Hur_, really? Well, 212 minutes in natural time is **3C0**, which means it's

  * 3C0 seconds
  * 3C.0 minutes
  * 3.C0 hours

We can verify with the conversion table that, since C represents 32, 212 minutes = 12720 seconds = 3 hours 32 minutes.


If we used base 60 in our everyday life, we could even quickly do things like the number of minutes between 7:53 am and 1:36 pm: it's a simple subtraction of the pure natural time numbers **dG** (1:36 pm) and **7&delta;** (7:53 am) to yield **5N**, or 343 minutes.

Subtraction dG – 7&delta; works like it does in ordinary math

  * Start with the 1's place; G < &delta; so borrow 10 (60, in decimal!) from d and add to G
  * Then do 1G – &delta; to get the 1's place, N
  * Now the 10's place does c – 7 which is 5
  * Leaving us with a final answer of 5N.

### Natural Time Extensions and Jokes

One problem with this system is that we stop using base 60 as the basis for time after hours: we don't have 60 hours in a "day", but rather 24, and we don't have anywhere near a power of 60 days in a year or a week or a month.

If we used natural time, we could still use 60 hours as a basis for time measurement. It's about two and a half days, so I propose to call this new unit of time a **weekend**.

Then 1 day = 24 hours would, in natural time, simply be

  * **o** hours
  * **o0** minutes
  * **o00** seconds, or, my favorite,
  * **0.o** weekends

And 1 year = 365 days = 146 weekends would, in natural time, simply be

  * **2q** weekends
  * **2q0** hours
  * **2q00** minutes (which does in fact equal 525,600 minutes)

Finally, using letters in our everyday timekeeping opens us up to a _whole world_ of puns:

 * being back in a **jiff**, interpreted as natural time, is 48.26 days
 * being back in a **bit**, interpreted as natural time, is 11.31 hours

and so much more I haven't thought of yet.

## Conclusion

I hope this little demo and explanation made you think a little more about the history of timekeeping, how we write numbers, how we use and express time in our everyday life, and how little things like notation can lead to big changes in how you think and work with concepts. I would love to hear about other ideas for creative uses of bases to make things simpler or more transparent or more beautiful!
