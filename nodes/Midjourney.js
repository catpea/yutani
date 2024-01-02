import Node from "./Node.js";

export default class Midjourney extends Node {

	prompt = "";
	style = 'HD';
	version = 6;
	aspectRatio = '1:1';

	schema = {
		type: "object",
		properties: {
			prompt: { type: 'string' },
			style: { type: 'string' },
			version: { type: 'integer' },
			aspectRatio: { type: 'string' },
		},
		required: ['prompt','version'],
		additionalProperties: true,
	}

	debug() {
		return JSON.stringify(this);
	}

	output() {
		// console.log('MJ>', this);
		return `I am a happy litte prompt. ${this.style} --ar ${this.aspectRatio} --v ${this.version}`
	}

}
