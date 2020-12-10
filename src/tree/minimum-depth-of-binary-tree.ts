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
 * 思路: BFS算法
 */
function minDepth(root: TreeNode | null): number {
  if (root === null) {
    return 0;
  }

  // NOTE: 用于临时存储的队列
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

      // NOTE: 遇到叶子节点时终止
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
