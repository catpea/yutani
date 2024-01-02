## TODO

- New Layout Manager that relies on the width of the main node, all sub-nodes are just fractional dimensions.
- Selection Manager should not be based on Reactive Array but a tidy class with its own API
- Add Node Resizing, it flips the Layout Manager to calculate not based on the widest sub-node but the width of the main.
- LOL, set primary button correctly for after JSON is loaded, default value ovveriding node value stored in json investigate
- Connectors are not removed from COnnectors array

, https://youtu.be/utrxk5_PeEY?t=104


- add boolean math for this.el.EditorValue to hide text overflow, currently substr is in place
- give view/menu/Dropdown.js .setData() support and make it generic
- finish load() in API
- break up Line in preparation for more UI complexity as onmouseDown foreignObject magic is introduced

- Ensure foreignObject data fields are created OnClick
  - on mouse over indicate that the propery is editable by shifting the background color
  - on mouse down create the foreignObject data editor, and on mouse leave (of xhtml field) destroy the edit field
  - upon completion, ensure the value is clearly displayed where the foreignObject field was

### Bug Fix

- No bugs atm

### Urgent!

- ANIMATE NODE EXECUTION, AND EDGE TRAVERSAL, add step by step feature that helps to visualise program execution
- select newly created node - on item creation select it
- concept of a main node that gets executed when run is clicked
- Instead of centering nodes on add (which calls for rendering and measuring, and thus EventEmitter) allow drag and drop from the toolbox, allowing user to pick the position
- Add File > Save
- Add File > Load
- Finish Toolbox
- Add Property Pane
- Live Data Output Bottom Debugger
- Add minimal previews to nodes (string, number color, etc...)
- Drag Connecting lines between entire Line.js not just Port, it is easier to hit the target
- default action for drag should be selection manager not panning, see NodeRED
- Prefer Api usage over manually interacting with collections: search for [A-Z][a-z]+\.create and replace with API methods


### Main
- Rewrite Pan (it seems to be too slow, only the scene needs to move)
- When deleting a Junction between two other junction reconnect them, investigate reconnecting of nodes as well
- Cable Type Sensitivity - Should be type sensitive numbers, strings, objects.
- Input/Output Line where both I/O ports visually align for neat programs (Line.js)
- ForeignObjects in ZUI Mode
- Give TODOM multiple code generation profiles
- Node Property Editor (YAML First)
- Add A Game Like Tutorial with Achievement unlocked
- documentaion must state that use cannot create id and type named fields on a node as those are reserved

### Unsure

- LOD: on scale 2+ show string preview in Line via FOreignObject
- Add Node Selection Manager (maybe groups, maybe lasso select with boolean math)
- Add Node Search And Canvas Scroll
- consider bounds padding to become a [0, 3, [0], [3]] with top right, bottom left like in CSS
- too hard to click on caption, at certain scale make the entire node draggable?
- Drag Cable at any point to take over XY of destination?
- Node Alignment, Aligh Tops of Nodes (via shortcut key)

## How It Works

- you define node types first
- then create a view, which is a UI, an SVG
- then you addNode(type) the view will update to show that node
- then you linkNodes to create a flow (see src/usage.js)
- then you .run(node), you have to specify a node you want to spider up and execute payload on

## How It Really Works

- System Is Reactive, Full Time Travel
- When defining Types, you really just specify Input Dots and Reply Dots.
- Input is the Property of a Node that you can link to
- Reply is the Function of a Node that gets executed via a downstream node
- Nodes are decorated as Panels
- Edges are decorated as Cables
- Reactivity Links everything together.

### Notes

```JavaScript
// centering a node, it requires an even emitter trigerring "rendered" and then measuring width and height of the rendered node
// using the calculation below as base, but then setting CX/XY (centerX, centerY) by substracting half with/height from below
// this means that cx/cy calls for use of event emitter, good idea but too early in development atm.
x:  (0-this.view.transform.x+((this.view.svg.getBoundingClientRect().width/2)))/this.view.transform.scale,
y:  (0-this.view.transform.y+((this.view.svg.getBoundingClientRect().width/2)))/this.view.transform.scale
```
