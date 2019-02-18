class Node {
    constructor(value) {
        this.value = value;
        this.edges = [];
    }
}

class Graph {
    constructor() {
        this.vertices = [];
    }

    addVertex(value) {
        currNode = new Node(value);
        this.vertices.push(currNode);
    }

    addEdges(firstNode, secondNode) {

    }
}