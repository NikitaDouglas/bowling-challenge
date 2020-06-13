
My Approach to Bowling Challenge
=================================

*Sat 13 Jun 2020 13:34:18 BST - Initial Thoughts*

I started by making a lot of notes about the logic behind a game of ten-pin bowling.
You can see pictures of my preliminary notes [here] and [here].
As promised by the challenge, it's vastly more complicated that one might initially expect, and I'll admit I have little-to-no
idea of how to go about building it. I'll break it down into small steps and just get something down that I
can always iterate on later.

*Sat 13 Jun 2020 14:38:37 BST - Project Setup*

Setting up this project was a bit hard. I'd installed Jasmine before so that was fairly straightforward, but
I had to download Node.js in order to install ESLint, and my frantic googling about the purpose of the `package.json` file proved unhelpful.
I'm still not entirely sure about the purpose of the various default settings when one runs `npm init`,
so I changed the obviously customisable options (`description`, `author` etc.) and left the rest.

Setting up ESLint itself was similarly obfuscated by my lack of knowledge about what exactly I wanted my linter to do. I went for the
"To check syntax, find problems, and enforce code style" option and then defined my style using the `Player.js` file provided by Jasmine.
Guess I'll be using ES5 syntax.
