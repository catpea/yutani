export default class Movable {

  parent;
  control;

  #container;
  #handle;
  #read;
  #write;
  #scale; // NOTE: set by a setter in this class, it is externaly set as view scale may change
  // local variables
  #dragging = false;
  #initialPosition = { x: 0, y: 0 };
  // handlers for cleanup
  #mouseDownHandler;
  #mouseMoveHandler;
  #mouseUpHandler;

  #removeTransformObserver;
  #removeStartedObserver;

  constructor(control){
    this.control = control;
  }

  start(){
    this.#removeStartedObserver = this.control.observe('started', started=>{
      if(started){
        this.begin({
            container: window,  // <g> element representing an SVG scene
               handle: this.control.el.Surface, // <rect> that is the caption of a window meant to be dragged
                 read: (property) => this.parent.data[property],
                write: (property, value) => this.parent.data[property] = value,
        })
      }// is started
    })// observe

  }


  begin({ container, handle, read, write, view }) {

    this.#removeTransformObserver = this.parent.root.view.observe('transform', v=>this.#scale = v.scale);

    this.#container = container;
    this.#handle = handle;
    this.#read = read;
    this.#write = write;

    this.#mouseDownHandler = (e) => {

      // Remember where mouse touched down
      this.#initialPosition.x = e.clientX;
      this.#initialPosition.y = e.clientY;
      // Enable dragging
      this.#dragging = true;
      this.#container.addEventListener('mousemove', this.#mouseMoveHandler);
    };
    this.#mouseMoveHandler = (e) => {
      if(this.#scale == undefined) console.error('you must correctly configure scale',this.#scale );
      // NOTE: this code has been tested and it works. //
      // Start from beginning, using "" to have dx available throughout
      let dx = 0;
      let dy = 0;
      // Substract initial position from current cursor position to get relative motion, motion relative to initial touchdown
      dx = e.clientX - this.#initialPosition.x;
      dy = e.clientY - this.#initialPosition.y;
      // Add a scaled version of the node
      dx = dx + (this.#read('x') * this.#scale);
      dy = dy + (this.#read('y') * this.#scale);
      // Apply Scale Transformation To Everything
      dx = dx / this.#scale;
      dy = dy / this.#scale;
      // Final Asignment
      this.#write('x', dx);
      this.#write('y', dy);
      // End
      dx = 0;
      dy = 0;
      // Reset, because the cursor has moved and is in a new position now.
      this.#initialPosition.x = e.clientX;
      this.#initialPosition.y = e.clientY;
     };

    this.#mouseUpHandler = (e) => {
      this.#dragging = false;
      this.#container.removeEventListener('mousemove', this.#mouseMoveHandler);
    };

    this.#handle.addEventListener('mousedown', this.#mouseDownHandler);
    this.#container.addEventListener('mouseup', this.#mouseUpHandler);
  }
  set scale(value){
    this.#scale = value;
  }
  stop() {
    this.#removeStartedObserver();
    this.#removeTransformObserver();
    this.#handle.removeEventListener('mousedown', this.#mouseDownHandler);
    this.#container.removeEventListener('mousemove', this.#mouseMoveHandler);
    this.#container.removeEventListener('mouseup', this.#mouseUpHandler);

  }
}
