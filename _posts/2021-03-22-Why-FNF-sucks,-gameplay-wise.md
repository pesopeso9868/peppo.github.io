---
title: "Why FNF sucks, gameplay-wise"
date: 2021-03-22 19:29:00 -0400
mood: im fine
tune: The Caretaker - Stage 5 Synapse retrogenesis
---
Many people have heard of this game. It's on the title. It's [Friday Night at Freddy's](https://ninja-muffin24.itch.io/funkin), and it's a rhythm game made in Haxe using the HaxeFlixel library and OpenFL. It's well recieved by many for its artstyle, soundtrack and it being reminiscent of a Flash game. It's essentially a love letter to [Newgrounds](https://newgrounds.com).
People may ask, "What's Haxe?" or "What's HaxeFlixel? I see it when I play the game!" Well,
- [Haxe](https://haxe.org/) is an open-source programming language with a very diverse cross-compiler, similar to Java. It can even compile into Flash, Android and HTML5!
- [HaxeFlixel](https://haxeflixel.com/) is a 2D game engine for Haxe which, from its name, is based on Flixel, which was originally for ActionScript, Flash's scripting language. ActionScript is how many popular Flash games are made, such as Run, the World's Hardest Game, the Papa Louie series, and a lot more.
- [OpenFL](https://www.openfl.org/), despite its name, is not a way to get Adobe Flash back into your browser. It's a framework, also built for Haxe for "creative expression on the web", according to its GitHub page.

Now that we've went over what the game is in general, let's go further into the game itself. The gameplay.
It isn't good (at least, from my part).

We'll start with the charts and the controls. I've whipped up a short video that pretty much explains everything.

<video controls><source src="/assets/img/fnf.mp4" type="video/mp4"></video>
Sorry if the video's not playing, Jekyll doesn't like videos. You can download the video from this website's GitHub page and watch it yourself [here](https://github.com/furcorn/furcorn.github.io/blob/master/assets/img/fnf.mp4). Controls and the charting of the maps play a substantial part in a rhythm game's gameplay. In the video, I play Spookeez, Pico and Blammed. These maps (along with some others) are really badly charted. I prove this by modding the game to play a beeping noise whenever player 2 (or, referred to in the game's code, Dad) plays a note, along with player 1. (which is Boyfriend)

By adding the beeping noise, we can hear that in Spookeez, the spooky kids don't actually sing in sync with the songs's voice track. You can try this yourself by booting up the game, playing the map in question and look at the singing animations. In Pico, the chart seems out of sync with the voice track and in Blammed, there are multiple sections in which you have to double tap the right key (or the L key, because I play in ASKL. We'll get to that in a bit.) After double tapping the right key, the down input that comes after gets discarded for an unknown reason. This is bad, because rhythm games must accurately count each and every keypress, or else the player will:
1. Wonder why their inputs are not being taken
2. Get really fustrated with the game
3. Write a blog post on why the game is bad

Regarding the ASKL keyboard scheme, the base game binds the controls to the arrow keys. This isn't good because your fingers just get entangled while playing hard sections. You'd get way less misses with ASKL, DFJK or anything similar because it just works. The screen's arrow and your keyboard layout are both mapped horizontally so your monkey brain can just guess "this MUST be the right key because it's the nth arrow on the screen". 

The VS Whitty mod (and the Kade Engine) actually adresses these issues by being able to switch between WASD and DFJK, fixing the wonky inputs and increasing the FPS cap up to 120 (along with some other things). I don't know why this isn't in the base game yet.

Regarding the maps I just played, there might be some sampling bias here because I only played three, out of maybe ten or twenty tracks. There's probably a chart somewhere that's good. There's also some other stuff I want to talk about like the game's current code and charting UI, but that's out of the scope of this post.
In conclusion, the game's decent. Good art and music, bad gameplay. Just like what I said on the start of this post, it is just a love letter to Newgrounds.