import java.util.HashMap;
import java.util.LinkedList;

public class Graph {

    private HashMap<Node, LinkedList<Node>> adjacencyMap;

    public Graph() {
        adjacencyMap = new HashMap<>();
    }

    public void addEdgeHelper(Node a, Node b) {
        LinkedList<Node> tmp = adjacencyMap.get(a);

        if (tmp != null) {
            tmp.remove(b);
        } else tmp = new LinkedList<>();
        tmp.add(b);
        adjacencyMap.put(a, tmp);
    }

    public void addEdge(Node source, Node destination) {

        if (!adjacencyMap.keySet().contains(source)) {
            adjacencyMap.put(source, null);
        }

        if (!adjacencyMap.keySet().contains(destination)) {
            adjacencyMap.put(destination, null);
        }

        addEdgeHelper(source, destination);
        addEdgeHelper(destination, source);

    }

    public boolean hasEdge(Node source, Node destination) {
        return adjacencyMap.containsKey(source) && adjacencyMap.get(source).contains(destination);
    }

    public void resetNodesVisited() {
        for (Node n : adjacencyMap.keySet()) {
            n.unvisit();
        }

    }

    void BFS(Node node) {

        //implement the BFS code

        // This is where the queue would need to first be created
        LinkedList<Node> queue = new LinkedList<>();

        queue.add(node); // first node initialized

        while (!queue.isEmpty()) {
            Node v = queue.removeFirst();

            // if statement to check whether a node was added more than once before visiting the node
            // if the node was added, it is skipped
            if (v.isVisited())
                continue;

            // Node marked as visited
            v.visit();
            System.out.print(v.name + " ");

            ;

            // Check if list of neighbors is null
            if (adjacencyMap.get(v) == null)
                continue;


            for (Node w : adjacencyMap.get(v)) {

                if (!w.isVisited()) { //If neighbor isn't visited then it will add it
                    queue.add(w);
                }
            }
        }
        System.out.println();
    }


    public void DFS(Node node) {
        //Implement DFS

        node.visit();
        System.out.print(node.name + " ");

        for (Node w : adjacencyMap.get(node)) {
            if (!w.isVisited()) {
                DFS(w);
            }
        }


    }

    public void printEdges() {
        for (Node node : adjacencyMap.keySet()) {
            System.out.print("The " + node.name + " has an edge towards: ");
            for (Node neighbor : adjacencyMap.get(node)) {
                System.out.print(neighbor.name + " ");
            }
            System.out.println();
        }
    }
}