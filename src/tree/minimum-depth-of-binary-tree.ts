/**
 * 111. 二叉树最小深度: https://leetcode-cn.com/problems/minimum-depth-of-binary-tree
 * 
 * 给定一个二叉树，找出其最小深度。
 * 最小深度是从根节点到最近叶子节点的最短路径上的节点数量。
 * 说明：叶子节点是指没有子节点的节点。
 */

import "../../libs/TreeNode.ts";
import "../../libs/Queue.ts";

/**
 * 
 */
function minDepth(root: TreeNode | null): number {
  if (root === null) {
    return 0;
  }

  let nodeQueue: Queue<TreeNode> = new Queue<TreeNode>();
  nodeQueue.push(root);

  let depth: number = 1;

  while (nodeQueue.size > 0) {
    const sz: number = nodeQueue.size;

    for (let i = 0; i < sz; ++i) {
      let t = nodeQueue.pop();
      if (!t) {
        continue;
      }

      if (t.left === null && t.right === null) {
        return depth;
      }

      if (t.left) {
        nodeQueue.push(t.left);
      }
      if (t.right) {
        nodeQueue.push(t.right);
      }
    }

    ++depth;
  }

  return depth;
}
