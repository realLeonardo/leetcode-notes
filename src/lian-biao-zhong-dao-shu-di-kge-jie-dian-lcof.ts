/**
 * 剑指 Offer 22. 链表中倒数第k个节点: https://leetcode-cn.com/problems/lian-biao-zhong-dao-shu-di-kge-jie-dian-lcof/
 * 
 * 输入一个链表，输出该链表中倒数第k个节点。为了符合大多数人的习惯，本题从1开始计数，即链表的尾节点是倒数第1个节点。
 * 例如，一个链表有6个节点，从头节点开始，它们的值依次是1、2、3、4、5、6。
 * 这个链表的倒数第3个节点是值为4的节点。
 */
import ListNode from "./libs/ListNode.ts";

/**
 * 双指针法：前指针和后指针相距 k 个距离
 * @param head 
 * @param k 
 */
function getKthFromEnd(head: ListNode | null, k: number): ListNode | null {
  let n1 = head, n2 = head;

  for (let i = 0; i < k; ++i) {
    if (n2 === null) {
      return null;
    }
    n2 = n2.next;
  }

  while (n1 !== null && n2 !== null) {
    n1 = n1.next;
    n2 = n2.next;
  }

  return n1;
}

export {};
