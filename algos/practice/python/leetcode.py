class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next
class Solution:
    def mergeTwoLists(self, list1, list2):
        list1.val = self.head
        list2.val = self.next

node1 = ListNode()
node1 = Solution([1,2],[2,3])