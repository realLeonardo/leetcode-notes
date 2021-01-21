/**
 * 450. Delete Node in a BST: https://leetcode-cn.com/problems/delete-node-in-a-bst/
 *
 * Given a root node reference of a BST and a key, delete the node with the given key in the BST. Return the root node reference (possibly updated) of the BST.
 * Basically, the deletion can be divided into two stages:
 * Search for a node to remove.
 * If the node is found, delete the node.
 *
 * Follow up: Can you solve it with time complexity O(height of tree)?
 */
import TreeNode from "../libs/TreeNode.ts";

function deleteNode(root: TreeNode | null, key: number): TreeNode | null {
  if (root === null) {
    return null;
  }

  if (root.val < key) {
    root.right = deleteNode(root.right, key);
  } else if (root.val > key) {
    root.left = deleteNode(root.left, key);
  } else {
    // NOTE: 找到啦！
    if (root.left === null) {
      return root.right;
    } else if (root.right === null) {
      return root.left;
    } else {
      // NOTE: 找到右子树的最小值
      let t = root.right;
      while (t.left) t = t.left;

      root.val = t.val;
      root.right = deleteNode(root.right, t.val);
    }
  }

  return root;
}

export {};
