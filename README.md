# CMPM 121 D1 Project

**Step 1: A button you can click**
Quite simple, just made a button element and inside of it placed the source image so that the image itself can act as a button rather than needing a seperate button to fulfill the role.

**Step 2: Clicking Increases a counter**
Created a counter variable that is what holds the actual number to manipulate in the code and then from there made it everytime it changed it would change a span element that I put into the HTML. Afterwards connected it so that when the button is pressed that it increases the counter variable and from there updated the element on the screen to reflect this change.

**Step 3: Automatic Clicking**
I set up a small function called autoclick that simply increments up by 1 and then updates the HTML span element. Afterwards used setInterval to run that small function once every second to create an automatic clicker.

**Step 4: Countinous Growth (with requestAnimationFrame)**
This step was a little tricky to do since I had a lot of issues with it just running super fast and not actually following the timing aspect. But after doing the appropriate math using a lastSecond variable and performance.now() I got it to actually increment by 1 second using the animation frames rather than an arbitrary 1 second.

**Step 5: Purchasing an upgrade**
Essentially I seperated the autoclicker into it's own standalone function that doesn't run automatically but instead behind an if statement asking if there is more than one of the variable totalGrind which represented how many of the upgrade the player owned. From there I set up the button so that for one, it isn't active until the player hits above 10 on the counter and then will deactivate again if the counter goes below 10. For another it will then activate the autoclicker since the upgrade essentially at the moment only has that to activate.

**Step 6: Multiple Upgrades and status**
This one was honestly pretty simple, I just copied the logic for the first item and made it two more times and then altered the numbers to reflect the new objects along with new names for them. As for the status that one I created an increment variable to hold how much the autoclicker increments based on the upgrade and how much of that upgrade was bought. From there it showed to a span element on the screen that displayed the current amount that the counter was incrememnting up by per second.

**Step 7: Price Increases**
All I really did for this step was make a small function that just increases a number, in this case the price of an upgrade, by a product of 1.15 (or 15%) then I switched some of the logic so that buttons were deactive for the price (that I placed into it's own variables) that it changed to and not still activating on the old price.

**Step 8: Consistent Narrative**
For this step very little had to change since I kept narrative in mind while making all parts of my code including the naming convention of all buttons and variables in the code. I went for a sword sharpening theme or more specifically a medieval theme with the game. You sharpen swords and eventually get a grindstone that makes the process easier but still manually doing it yourself (reasoning for the 0.1 increase rather than a full 1 upgrade). From there you get a blacksmith because for one it would be more expensive but also now producting 2, well of course, now there is 2 of you. As for the forge, logically a forge has lots of people working at them and also more people are sending you swords to sharpen since you are a more established buisness.

**Step 9: Data-Driven Design**
This step took the longest and was the hardest to do. My code up until this point was incredibly hard coded from the variables to button operation and checkers so I pretty much had to strip everything away and redesign the entire thing to adhere with the data-driven design. With help from Brace on how to redesign the buttons so that we can still keep the same aethetic but change it so that they run on a per item bases rather than hard code. Overall I made the changes adding the items and all of their stats to an interface that also took in the element (for button logic) so we can design it all. From there I made a function called updateDisplay that changes everything on the screen from the couinter to the increment counter to the pricing and amount owned. It does this each and everytime counter goes up or button logic is used other than that of the main button clicker.

**Step 10: Content Expansion**
For this step I added two new items using the new interface (which made adding items that much easier) and on each item added a description to each one. From there I added some logic to the setupUpgrade function so that the dsescription will show if you hover over the upgrade button for that item.
