// NOTE: this is the class for an intermediate output tree that facilitates code generation

export default class Branch {
	id = 'root';
	root = null;
	parent = null;
  db = {};
	data = {};
	children = [];

	create(id, data) {
		if(!this.root) this.root = this;
		const branch = new Branch();
		branch.root = this.root;
		branch.parent = this;
    branch.id = id;
		branch.data = data;
    this.root.db[id] = branch;
		this.children.push(branch);
		return branch;
	}

}
