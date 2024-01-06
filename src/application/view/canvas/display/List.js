import Observable from "./Observable.js";

import Container from "./Container.js";
import Control from "./Control.js";

export default class List extends Observable {
	#list = [];

	addAll(...argv){this.add(...argv)}
	add(...items) {
		for(const item of items) {
			if(!((Container.prototype.isPrototypeOf(item)) || (Control.prototype.isPrototypeOf(item)))) throw new Error(`Must be a Container or Control.`);
			this.#list.push(item);
			this.notify("created", item);
			this.notify("changed", this);
		}
	}



	[Symbol.iterator]() {
		return this.#list[Symbol.iterator]();
	}
	find(callback) {
		if(typeof callback !== "function") throw new TypeError("Needs a function.");
		return this.#list.find(callback);
	}
	map(callback) {
		if(typeof callback !== "function") throw new TypeError("Needs a function.");
		return this.#list.map(callback);
	}
	reduce(callback, initialValue) {
		if(typeof callback !== "function") throw new TypeError("Needs a function.");
		return this.#list.reduce(callback, initialValue);
	}
	filter(callback) {
		if(typeof callback !== "function") throw new TypeError("Needs a function.");
		return this.#list.filter(callback);
	}
	forEach(callback) {
		if(typeof callback !== "function") throw new TypeError("Needs a function.");
		return this.#list.forEach(callback);
	}
	indexOf(item) {
		return this.#list.indexOf(item);
	}
	slice(...argv) {
		return this.#list.slice(...argv);
	}

	get length(){
		return this.#list.length
	}
	get raw(){
		return this.#list;
	}

	//
	// application = null;
	// autostart = true;
	// entity = null;
	//
	// create(data, options = {}) {
	//
	// 	// entity can be provided during object creation
	// 	const Entity = options.entity || this.entity;
	// 	const item = new Entity(data, this.application);
	//
	// 	if(!item.id) throw new Error('Item requires an .id')
	//
	// 	const itemExists = this.#list.find((o) => o.id === item.id);
	// 	if(itemExists) throw new Error('Item Exists, duplicate id is not allowed an maybe an indication of a problem in your code.')
	//
	// 	this.#list.push(item);
	//
	// 	if(this.autostart && item.start) item.start();
	//
	// 	this.notify("created", { item });
	// 	this.notify("changed", { data: this, item });
	//
	// 	return item;
	// }
	//
	// remove(input) {
	//
	// 	let filter = (item) => item.id === input;
	// 	if(typeof input == 'function') filter = input;
	//
	//
	//
	// 	const matching = this.#list.filter(filter);
	//
	// 	matching.forEach(item => {
	// 		if(item) {
	// 			if(item.stop) item.stop();
	// 			this.#list = this.#list.filter(o => o.id !== item.id);
	// 			this.notify("removed", { item });
	// 			this.notify("changed", { item, data: this });
	// 		} else {
	// 			console.warning('ITEM NOT FOUND', id);
	// 		}
	// 	});
	// }
	//
	// // life cycle
	//
	// start(autostart = true) {
	// 	this.autostart = autostart; // start all from now on
	// 	this.#list.filter(item => item.start).forEach(item => item.start());
	// }
	//
	// stop(autostart = false) {
	// 	this.autostart = autostart; // do not autostart
	// 	this.#list.filter(item => item.stop).forEach(item => item.stop());
	// }
	//
	//
	// // READ
	//
	// [Symbol.iterator]() {
	// 	return this.#list[Symbol.iterator]();
	// }
	//
	// get(id) {
	// 	return this.#list.find(o => o.id === id);
	// }
	// has(id) {
	// 	return !!this.#list.find(o => o.id === id);
	// }
	// at(number) {
	// 	return this.#list.at(number);
	// }
	// find(callback) {
	// 	if(typeof callback !== "function") throw new TypeError("Needs a function.");
	// 	return this.#list.find(callback);
	// }
	// filter(callback) {
	// 	if(typeof callback !== "function") throw new TypeError("Needs a function.");
	// 	return this.#list.filter(callback);
	// }
	// forEach(callback) {
	// 	if(typeof callback !== "function") throw new TypeError("Needs a function.");
	// 	return this.#list.forEach(callback);
	// }
	//
	//
	// size() {
	// 	return this.#list.length;
	// }
	// dump() {
	// 	for(const variable of this.#list) {
	// 		console.log(variable.dump());
	// 	}
	// 	return this.#list.length;
	// }

}
