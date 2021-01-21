/**
 * 226. Invert Binary Tree: https://leetcode-cn.com/problems/invert-binary-tree/
 *
 * Invert a binary tree.
 */
import TreeNode from "../libs/TreeNode.ts";

/**
 *
 */
function invertTree(root: TreeNode | null): TreeNode | null {
  if (root === null) {
    return null;
  }

  // NOTE: 前序遍历的位置
  let temp = root.left;
  root.left = root.right;
  root.right = temp;

  invertTree(root.left);
  invertTree(root.right);

  return root;
}

// TODO: 如何测试呢？？？

export {};
