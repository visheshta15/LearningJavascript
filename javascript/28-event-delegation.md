when there are large no of elements on the page, and each of them have one or more evenyt handler attached(ex: onclick), this may affect the proformance.
attaching every handler comes with a price:
1. in the form of heavier pages(more markup or js code)
2. in the form of runtime execution time.

the more Dom nodes u need to touch and modify, the slower ur application, espically because the event attaching phase usually happens at the `onload` [DOMContentReady] event, which is busy time for every interaction-rich web pages.
attaching events take processing time and in addition the browser needs to keep track of every handler, which takes up memory. And at the end great no of event handlers never might be needed, because the user will click one button or link not all 100 of them, so alot of work might be unnecessary.

# Event Delegation
elegant technique of handling Dom events.
it is based on the fact that event bubble up and handle by the parrent element.

# according to Dom standard , each event has three phases
1. capturing
2. target
3. bubling



# -------------------------------------------------------------------------

# event propgation
in  which order the elements recevived the input

# event bubbling
When an event happens on an element, it first runs the handlers on it, then on its parent, then all the way up on other ancestors.
 
# event capturing / trickling(down)
the process starts with capturing the event of the outermost element and then propagating to the inner most element

# event delegation
Event Delegation is basically a pattern to handle events efficiently. Instead of adding an event listener to each and every similar element, we can add an event listener to a parent element and call an event on a particular target using the .target property of the event object.
1. prons 
Memory
less code
Dom manupulation
2. cons
to let delegation work should not use stoppropagation and let the events bubble up

# data-* attributes