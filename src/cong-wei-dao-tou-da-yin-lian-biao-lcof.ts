/**
 * 剑指 Offer 06. 从尾到头打印链表: https://leetcode-cn.com/problems/cong-wei-dao-tou-da-yin-lian-biao-lcof/
 *
 * 输入一个链表的头节点，从尾到头反过来返回每个节点的值（用数组返回）。
 */
import ListNode from "./libs/ListNode.ts";

function reversePrint(head: ListNode | null): number[] {
  const result = [];

  while (head !== null) {
    result.unshift(head.val);
    head = head.next;
  }

  return result;
}

export {};
