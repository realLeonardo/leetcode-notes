/**
 * 114. Flatten Binary Tree to Linked List: https://leetcode-cn.com/problems/flatten-binary-tree-to-linked-list/
 *
 * Given a binary tree, flatten it to a linked list in-place.
 */
import TreeNode from "../libs/TreeNode.ts";

/**
 * 思路：
 * 1. 将root的左、右子树拉平
 * 2. 将root的右子树接到左子树的叶子节点，然后将左子树作为root的右子树
 */
function flatten(root: TreeNode | null): void {
  if (root === null) {
    return;
  }

  flatten(root.left);
  flatten(root.right);

  if (root.left) {
    let temp = root.left;
    while (temp.right) {
      temp = temp.right;
    }

    temp.right = root.right;
    root.right = root.left;
    root.left = null;
  }
}

export {};
