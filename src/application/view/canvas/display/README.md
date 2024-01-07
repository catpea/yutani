- Component
  - Container
    - HBox
    - VBox
  - Control
    - Label
    - Button


## Ideas

Monitoring .height is a reliable way to calculateY for both containers and controls

## Snippets

this.root.observe('height', height=> {
  this.y = this.calculateY()
});
