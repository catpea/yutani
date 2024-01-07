export default class Observable {


  #cleanup = [];
  cleanup(...arg){
    this.#cleanup.push(...arg);
  }


	// Reactive Properties
	#properties = {};
	inherit(payload) {
		Object.entries(payload).forEach(([key, val]) => this.declare(key, val));
	}
	declare(key, val) {
		this.#properties[key] = val;
		Object.defineProperty(this, key, {
			get: () => this.#properties[key],
			set: (newValue) => {
        const debug = ['height'];
        if(debug.includes(key)) console.log(`${this.name}: SET ${key} to "${newValue}"`);
				const oldValue = this.#properties[key];
				if(newValue === oldValue) return; // this is on purpose we do nothing when the values are the sane (MEMOIZE/optimize)
				this.#properties[key] = newValue;
				this.notify(key, newValue, { newValue, oldValue });
			}
		});
	}
  dump(){
    console .log(this.#properties);
    return this.#properties;
  }

	// Observable Values
	#observers = {};

	// USER API
	// observeAll(...input){
  //
  //   const eventNames = input;
  //   const observerCallback = eventNames.pop();
  //
  //   const destroy = [];
  //
  //   for (const eventName of eventNames) {
  //     destroy.push(
  //       this.observe(eventName, ()=>observerCallback(eventNames.map(key=>this.#properties[key])), {autorun:false})
  //     )
  //   }
  //
  //   return () => {
  //     destroy.forEach(o=>o())
  //   };
  //
  // }
	observe(eventName, observerCallback, options = {autorun:true}) {

		if(options.autorun) {
			// NOTE: reactive properties (as opposed to other changes, get special treatment to allow for v=...c=v) these are setup via inherit/declare
      // NOTE: other changes means stuff that just uses notify, objects that inhetit from here implement their own notify calls, witht heir own data...
			const isReactiveProperty = this.#properties.hasOwnProperty(eventName);

			if(isReactiveProperty) {
				observerCallback(this.#properties[eventName]);
			} else {
				observerCallback({ data: this });
			}
		}

		return this.#subscribe(eventName, observerCallback);
	}

	// DEVELOPER API
	//NOTE: must be MANUALLY issued anytime something changes
	notify(eventName, eventData, ...extra) {
		if(Array.isArray(this.#observers[eventName]))
			this.#observers[eventName].forEach((observerCallback) => observerCallback(eventData, ...extra));
	}

	// INTERNAL API
	#subscribe(eventName, observerCallback) {
		if(typeof observerCallback !== "function") throw new TypeError("Observer must be a function.");
		if(!Array.isArray(this.#observers[eventName])) this.#observers[eventName] = []; // If there isn't an observers array for this key yet, create it
		this.#observers[eventName].push(observerCallback);
		return () => {
			this.#unsubscribe(eventName, observerCallback);
		};
	}
	#unsubscribe(eventName, observerCallback) {
		this.#observers[eventName] = this.#observers[eventName].filter((obs) => obs !== observerCallback);
	}
}
