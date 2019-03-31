![GA Logo](https://camo.githubusercontent.com/6ce15b81c1f06d716d753a61f5db22375fa684da/68747470733a2f2f67612d646173682e73332e616d617a6f6e6177732e636f6d2f70726f64756374696f6e2f6173736574732f6c6f676f2d39663838616536633963333837313639306533333238306663663535376633332e706e67)

# jQuery calculator

Title: Calculator <br>
Type: Lab <br>
Creator: WDI-Remote Instructors<br>
Adapted by: Kristyn Bryan and then by Reuben Ayres<br>
Competencies: HMTL, CSS, Javascript functions, jQuery and DOM event listeners<br>
Prerequisites: JavaScript fundamentals, CSS, HTML, jQuery <br>

---

![vintage calc](https://i.imgur.com/oYTu4hC.png)

## User Stories

Hey! It's a new vocabulary word!

*User stories* are a great way to break down what the different features of the website are, and how to structure it. They are generally written out in this form "A user should be able to...". Here are the user stories for our lab:

1. A user should be able to select numbers so that they can do things with them.
2. A user should be able to add numbers together.
3. A user should be able to subtract numbers.
4. A user should be able to divide numbers.
5. A user should be able to multiply numbers together.
6. A user should be able to see the output.
7. A user should be able to clear errant input in the middle of a calculation.

![crank-calc](https://i.imgur.com/ozULSg3.png)

## Setup

1. Create a directory in today's folder called `calculator-lab`.

2. Create our usual setup and remember to include jQuery.

3. Use git and commit after each small step.

4. Make a calculator from scratch. Build it yourself. Yes, google is out there and lots of people have made calculators that you could check out. But first, try to do it using what we've learned: event listeners are all you need. Look back at your notes from event listeners for guidance.

![lotsa-calcs](https://www.nuvonium.com/_image_lib/blog/calculators.jpg)

## Wireframe: design your calculator.

1. Before you type out your HTML, draw out how you want your calculator to look and start thinking about how to structure your html. Don't spend more than 10 minutes thinking through this part, but put something on paper before you code.  It might seem silly, because we all know what a calculator looks like, but [wireframing](http://www.creativebloq.com/web-design/jargon-wireframes-mockups-prototypes-51514898) will make you think of important issues to consider.

2. Think about where the input and output needs to be (buttons and display screen).

## Write the html needed for the calculator

1. Now that you have your wireframe drawn, use it to write the html needed for your calculator.

2. **Don't use jQuery to build the calculator html**. Just code it into your html page.  In a calculator app, the calculator interface itself never changes, and therefore should just be static HTML.

3. Think about using ids and/or classes to help you select your elements.

## Things to think about: HTML

- You'll want to have a "screen" to display the results from your calculator. This could be as simple as just a div. Assign it an id to make it easy to grab!

- Thinking about your calculator, each of the number "buttons" should probably be divs. If you used a `button` tag, the styling would be a little difficult. Assigning ids is a possibility, but you could also grab them by their innerHTML!  Could you use classes as well?  Maybe one for "numbers" and one for "operators"?  There are many ways to set this up.

- Don't forget to make elements for your operators (`+`, `-`, `*`, `/`, `=`). You can give them ids to help grab them as well.  Remember you can have ids and classes, and you can use multiple classes if that's helpful.

- As mentioned above, hard code the HTML! Put the actual numbers for the calculator buttons into your HTML. There's no need to dynamically create the number and operator buttons; they won't be changing.

![you could make your calculator look like this if you want](https://i.pinimg.com/736x/52/48/0a/52480a432900c1315a9ab75dccd31af9--rockstars-etsy-vintage.jpg)


## Things to think about: (initial) CSS

**For now, don't spend too much time on your CSS. You will come back to it.**

1. Write your initial CSS to make a rough copy of what you want your calculator page to look like. This could be just placing a border around everything so that you can see where your numbers and operators are located (make it easier to click and test).

2. Make sure all of the interactive parts of the app are visible. This way, as you're building out the functions in your javascript file, you'll be able to test your code.

3. Make sure that, wherever you are going to show the output (the screen) is large enough to display the numbers that will be your output. A good way to do this is to temporarily hardcode somenumbers into the display in your html file (like the numbers "1234567890" inside the element) so that you know you can see it.

Need help?
- If you want to keep things simple, start by putting a border around all of your divs:

    ```css
    div {
        border: 1px solid black;
    }
    ```
- Set a height and width for your number buttons (maybe add a class to your html number elements?). You pick the height and width, but start out by testing them at 50px for both;

- Set a height and width to your operator elements and a separate height and width to your screen.

![calcWatches](https://img1.etsystatic.com/113/0/12286757/il_340x270.996728585_def9.jpg)

## Things to think about: programming/jQuery

#### User stories are a great way to break down exactly what needs to be done, so look back at them.
* In this app, *state* is very important.  What is state? Try to think about how you are going to store the state of the calculator. What kind of information do you need to track?  How does one _track_ information in a JavaScript app? Start by figuring out what information you need to store. You can revise this later as much as you like.
* When the user clicks a button, how are you going to get which number or operation they clicked? When they click a certain button, what code are you going to have to run?
* Events: How you will handle user input (pressing buttons). Start actually writing the event handlers. What needs to change when a user clicks a button?
* Always test event listeners with a `console.log()` before you write the logic to make them work.
* Functions: decide what functions need to be defined (think about what will have to be done once someone clicks a button. Hint: `add`, `subtract`, `multiply` are a few).
* Use the functions previously defined to preform operations on our data. Start using the functions defined above in the event handlers. What functions need to be called when they click a button?
* Test, fix, retest, fix, retest,...
* Look back on code written and think about better ways to implement it. Maybe something's not working at all, how can we restructure the code we have so that it does?


# Hungry for more?

1. Once you have the basics of the calculator working, look back at your code.  See any places where you have nearly identical code more than once? No problem, because it helped you build a working app. But you should make it **[DRY](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself)**.  Start to refactor (another vocabulary word) your code to take out unneeded parts or implement something in a better way.

2. Make it look nicer with CSS
    * Update the colors and layout. Be creative. Make it look like a calculator that you would be proud to show off!
    * Import a font from Google fonts and get it working on your page (there might be some sweet monospace fonts you could do the display with, for example).
    * Take a screenshot of your new calculator and show it to your classmates in Slack.

3. What other operations/features can you add?
    - Add an **AC** ("all clear") button that will clear your screen and reset your state and start the entire process over at zero.
    - Make it handle decimal input.
    - Show the previous entries in tiny letters on the top or bottom edge of the display. 
    - Look at pictures of actual calculators and add other features you see.  
        - Percentages?
        - Negative?
        - Exponents?
        - Roots?  
    - You could make it adding machine style, and have a ticker tape that comes out the top, showing the completed entries so far.  Then you'd need a reset button too, perhaps?
        - You could have this be a mode that is switched on and off with a button.
    - You could implement memory buttons. (MC/MR/MS/M+/M-)
    - Others? If you don't have time, but have some ideas, add comments/pseudocode describing the features you might. How might you implement them? Is your code friendly to adding in new operations if another developer came in to add something to your code? 

## Advanced

1. Add scientific calculator functions:
    * Parentheses
    * Factorials
    * sin/cos/tan and their inverses
        * make a "degrees" mode and a "radians" mode
    * log/ln and their inverses

2. Implement a "Scientific notation" mode.
