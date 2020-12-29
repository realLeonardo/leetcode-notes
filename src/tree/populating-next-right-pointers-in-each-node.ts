/**
 * 116. Populating Next Right Pointers in Each Node: https://leetcode-cn.com/problems/populating-next-right-pointers-in-each-node/
 *
 * Populate each next pointer to point to its next right node. If there is no next right node, the next pointer should be set to NULL.
 * Initially, all next pointers are set to NULL.
 */

class Node {
  val: number;
  left: Node | null;
  right: Node | null;
  next: Node | null;
  constructor(val?: number, left?: Node, right?: Node, next?: Node) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
    this.next = next === undefined ? null : next;
  }
}

function connect(root: Node | null): Node | null {
  if (root === null) {
    return null;
  }

  connectTwoNodes(root.left, root.right);

  return root;
}

function connectTwoNodes(node1: Node | null, node2: Node | null) {
  if (node1 === null || node2 === null) {
    return;
  }

  node1.next = node2;

  connectTwoNodes(node1.left, node1.right);
  connectTwoNodes(node2.left, node2.right);
  connectTwoNodes(node1.right, node2.left);
}

export {};
