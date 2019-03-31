export interface IGraphNode<T> {
    getId(): string;

    getValue(): T;
    setValue(value: T): void;

    getSuccessors(): IGraphNode<T>[];

    toString(): string;
}

export interface IGraph<T> {
    addEdge(from: string, to: string): void;
    removeEdge(from: string, to: string): void;

    addNode(id: string, value: T): IGraphNode<T>;
    removeNode(id: string): void;

    getNode(id: string): IGraphNode<T>;
    getNodeCount(): number;
    getEdgeCount(): number;

    toString(): string;
}

export class LinkedGraphNode<T> implements IGraphNode<T> {
    private id: string;
    private value: T;
    private successors: IGraphNode<T>[];

    constructor(id: string, value: T) {
        this.id = id;
        this.value = value;
        this.successors = [];
    }

    public getId(): string {
        return this.id;
    }

    public getSuccessors(): IGraphNode<T>[] {
        return this.successors;
    }

    public removeSuccessor(node: IGraphNode<T>): void {
        const idx = this.successors.indexOf(node);
        this.successors = this.successors.splice(idx);
    }

    public getValue(): T {
        return this.value;
    }

    public setValue(value: T): void {
        this.value = value;
    }

    public toString(): string {
        return `(id: ${this.getId()}, value: ${(this.value != null ? this.value.toString() : 'null')})`;
    }
}

export class LinkedGraph<T> implements IGraph<T> {
    private nodes: Map<string, LinkedGraphNode<T>>;

    constructor() {
        this.nodes = new Map<string, LinkedGraphNode<T>>();
    }

    public addEdge(from: string, to: string): void {
        const nodeFrom = this.nodes.get(from); if (nodeFrom == null) throw `Node with id ${from} not found!`;
        const nodeTo = this.nodes.get(to); if (nodeTo == null) throw `Node with id ${to} not found!`;

        nodeFrom.getSuccessors().push(nodeTo);
    }

    public removeEdge(from: string, to: string): void {
        const nodeFrom = this.nodes.get(from); if (nodeFrom == null) throw `Node with id ${from} not found!`;
        const nodeTo = this.nodes.get(to); if (nodeTo == null) throw `Node with id ${to} not found!`;

        nodeFrom.removeSuccessor(nodeTo);
    }

    public getEdgeCount(): number {
        let count: number = 0;
        this.nodes.forEach((value) => count += value.getSuccessors().length);
        return count;
    }

    public addNode(id: string, value: T): IGraphNode<T> {
        let node = this.nodes.get(id); if (node != null) throw `Node with id ${id} allready exists!`;
        node = new LinkedGraphNode<T>(id, value);
        this.nodes.set(id, node);
        return node;
    }

    public removeNode(id: string): void {
        const node = this.nodes.get(id); if (node == null) throw `Node with id ${id} not found!`;
        this.removeSuccessors(node);
    }

    public getNode(id: string): IGraphNode<T> {
        const node = this.nodes.get(id); if (node == null) throw `Node with id ${id} not found!`;
        return node;
    }

    public getNodeCount(): number {
        return [...this.nodes.keys()].length;
    }

    public toString(): string {
        let str = '';
        this.nodes.forEach((item, index) => {
            str += `${index} => `;
            item.getSuccessors().forEach((sItem, sIndex) => {
                if (sIndex != 0)
                    str += ', ';
                str += sItem.toString();
            });
            str += '\n';
        })

        return str;
    }

    private removeSuccessors(node: IGraphNode<T>): void {
        for (const n of node.getSuccessors())
            this.removeSuccessors(n);

        for (const n of this.nodes.values())
            n.removeSuccessor(node);

        this.nodes.delete(node.getId());
    }
}