import { IGraph, LinkedGraph } from "../src/graph";

import { expect } from 'chai';

class MyNode {
    constructor(public data: string) {
    }

    public toString(): string {
        return `data: ${this.data}`;
    }
}

describe('Graph', () => {
    it('Node removal should delete dependent nodes and edges', (done) => {
        const graph: IGraph<MyNode> = new LinkedGraph<MyNode>();

        graph.addNode('1', new MyNode('data 1'));
        graph.addNode('2', new MyNode('data 2'));
        graph.addNode('3', new MyNode('data 3'));
        graph.addNode('4', new MyNode('data 4'));

        graph.addEdge('1', '2');
        graph.addEdge('1', '3');
        graph.addEdge('2', '4');

        expect(graph.getNodeCount()).to.equal(4);
        expect(graph.getEdgeCount()).to.equal(3);

        graph.removeNode('2');

        expect(graph.getNodeCount()).to.equal(2);
        expect(graph.getEdgeCount()).to.equal(1);

        done();
    });
});