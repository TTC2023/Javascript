# Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

# def strStr(haystack, needle):
#     # find which word is longer
#     if len(needle) > len(haystack):
#         return -1
#     firstIndex = None
#     matches = ""
#     needleIndex = 0
#     # loop through and push each index if letters match
#     for i in range(len(haystack)):
#         if haystack[i] == needle[needleIndex]:
#             if firstIndex == None:
#                 # finds the first index
#                 firstIndex = i
#             # appends to matches
#             matches += haystack[i]
#             if needleIndex < len(needle):
#                 needleIndex += 1
#             else:
#                 break
#             # checks to see if they match
#             if matches == needle:
#                 return firstIndex
#         else:
#             firstIndex=None
#             matches = ""
#     return -1
# print(strStr("hello", "ll"))

# def strStr(haystack, needle):
#     firstIndex = None
#     matches = ""
#     for i in range(len(haystack)):
#         for j in range(len(needle)):
#             if firstIndex == None:
#                 firstIndex = i
#             if haystack[i] == needle[j]:
#                 matches += haystack[i]
#             if matches == needle:
#                 return firstIndex
#     return -1

# print(strStr("hello", "ll"))

# def removeElement(nums, val):
#     count = 0
    
#     for i in range(len(nums)):
#         if nums[i] == val:
#             count += 1
#             nums[i] = False
#     return f"{count}, nums = {nums}"
# print(removeElement([3,2,2,3], 3))


# def maxArea(height):
#     left = 0
#     right = len(height)-1
#     area = 0
#     while left < right:
#         if height[left] > height[right]:    
#             if area < abs(height[right] * (left - right)):
#                 area = abs(height[right] * (left - right))
#             right -= 1
#         else:
#             if area < abs(height[left] * (right - left)):
#                 area = abs(height[left] * (right - left))
#             left += 1
#     return area

# print(maxArea([1,8,6,2,5,4,8,3,7]))

# def fib(n):
#     count = 1
#     sequence = [0,1]
#     for i in range(n):
#         equation = sequence[i] + sequence[count]
#         sequence.append(equation)
#         count +=1
#     return sequence[n-1] + sequence[n-2]

# print(fib(5))

class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next
class Solution:
    def mergeTwoLists(self, list1: Optional[ListNode], list2: Optional[ListNode]) -> Optional[ListNode]:
        dummy = ListNode()
        current = dummy
        while list1 and list2:
            if list1 < list2:
                current.next = list1
                list1 = list1.next 
            else:
                current.val = list2
                list2 = list2.next
            current = current.next
        while list1 or list2:
            if list1:
                current.next = list1
                list1 = list1.next
            if list2:
                current.next = list2
                list2 = list2.next
            current = current.next
        return dummy.next


list1 = ListNode(1)
list1.next = ListNode(2)
list1.next.next = ListNode(3)
list2 = ListNode(4)
list2.next = ListNode(5)
list2.next.next = ListNode(6)
