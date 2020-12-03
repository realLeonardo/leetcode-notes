/**
 * 98. Validate Binary Search Tree: https://leetcode-cn.com/problems/validate-binary-search-tree/
 * Given the root of a binary tree, determine if it is a valid binary search tree (BST).
 * 
 * A valid BST is defined as follows:
 * - The left subtree of a node contains only nodes with keys less than the node's key.
 * - The right subtree of a node contains only nodes with keys greater than the node's key.
 * - Both the left and right subtrees must also be binary search trees.
 */

import "../../libs/TreeNode.ts";

function isValidBST(root: TreeNode | null): boolean {
  return validBST(root, null, null);
}

function validBST(
  root: TreeNode | null,
  min: TreeNode | null,
  max: TreeNode | null,
): boolean {
  if (root === null) {
    return true;
  }

  if (min && min.val >= root.val) {
    return false;
  }
  if (max && max.val <= root.val) {
    return false;
  }

  return validBST(root.left, min, root) &&
    validBST(root.right, root, max);
}
