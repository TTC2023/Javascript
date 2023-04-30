from collections import Counter

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

# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
# class Solution:
#     def mergeTwoLists(self, list1: Optional[ListNode], list2: Optional[ListNode]) -> Optional[ListNode]:
#         dummy = ListNode()
#         current = dummy
#         while list1 and list2:
#             if list1 < list2:
#                 current.next = list1
#                 list1 = list1.next 
#             else:
#                 current.val = list2
#                 list2 = list2.next
#             current = current.next
#         while list1 or list2:
#             if list1:
#                 current.next = list1
#                 list1 = list1.next
#             if list2:
#                 current.next = list2
#                 list2 = list2.next
#             current = current.next
#         return dummy.next

# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
# class Solution:
#     def deleteDuplicates(self, head):
#         current = head
#         while current and current.next:
#             if current.val == current.next.val:
#                 current = current.next.next
#             else:
#                 current = current.next
#         return head



# list1 = ListNode(1)
# list1.next = ListNode(2)
# list1.next.next = ListNode(3)
# S1 = Solution().deleteDuplicates(list1)

# def isPalindrome(x):
#     newStr = str(x)
#     rev = newStr[::-1]
#     if newStr == rev:
#         return True
#     else:
#         return False


# print(isPalindrome(121))

# def leftRigthDifference(nums):
#     if len(nums) <= 1:
#         return 0
#     previous = 0
#     ans = []
#     leftSum = []
#     rightSum = []
#     for i in range(len(nums)-1):
#         if i == 0:
#             leftSum.append(0)
#             leftSum.append(nums[0])
#         else:
#             newSum = leftSum[i] + nums[i]
#             leftSum.append(newSum)
#     rightSum.append(0)
#     for i in range(len(nums)-1,0,-1):
#         newSum = nums[i] + previous
#         previous = newSum
#         rightSum.append(newSum)
#     rev = rightSum.reverse()
#     print(rev)
#     for i in range(len(nums)):
#         res = abs(rightSum[i]-leftSum[i])
#         ans.append(res)
#     return ans


# print(leftRigthDifference([1]))

# def leftRigthDifference(nums):
#         ans = []
#         leftSum = []
#         rightSum = []
#         for i in range(len(nums)):
#             leftSum.append(sum(nums[:i]))
#             rightSum.append(sum(nums[i+1:]))
#             ans.append(abs(sum(nums[:i]) - sum(nums[i+1:])))
#         return ans
# print(leftRigthDifference([1,2,3,4,5]))

# def plusOne(digits):
#     num = ""
#     arr = []
#     for i in digits:
#         num += str(i)
#     res = int(num) + 1
#     num = str(res)
#     for char in num:
#         arr.append(int(char))
#     return arr

# print(plusOne([1,2,3]))

# ****** sliding windows *******
# def findMaxAverage(nums, k):
#     subArray = sum(nums[0:k])
#     maxAvg = subArray

#     for i in range(1,len(nums)-k):
#         subArray = subArray + nums[i + k] - nums[i]
#         maxAvg = max(subArray, maxAvg)
#     return maxAvg/k
    

# print(findMaxAverage([1,12,-5,-6,50,3],4))

# def groupThePeople(groupSizes):
#     newArray = []
#     sizes = set(groupSizes)
#     sizeCount = {}
#     for i, value in enumerate(sizes):
#         sizeCount[value] = groupSizes.count(value)
#     for key in sizeCount:
#         print(key)

# print(groupThePeople([3,3,3,3,3,1,3]))

# def restoreString(s, indices):
#     newDict = {}
#     newStr = ""
#     for i in range(len(indices)):
#         newDict[indices[i]] = s[i]
#     for i in range(len(s)):
#         newStr += newDict[i]
#     return newStr

# print(restoreString("codeleet",[4,5,6,7,0,2,1,3]))

# def findMatrix(nums):
#     counter = Counter(nums)
#     most_common = counter.most_common(1)
#     frequency = most_common[0][1]
#     doubles = set(nums)
#     ans = []
#     for i in range(frequency):
#         ans.append([])
#     for num in doubles:
#         count = nums.count(num)
#         for i in range(count):
#             ans[i].append(num)
#     return ans

# print(findMatrix([1,3,4,1,2,3,1]))

# def sumOfMultiples(n):
#     ans = 0
#     for i in range(1, n + 1):
#         if i%3 == 0 or i%5 == 0 or i%7 ==0:
#             ans += i
#     return ans

# print(sumOfMultiples(10))

# def decompressRLElist(nums):
#     ans = []
#     state = False
#     pair = 0
#     for i in range(len(nums)):
#         if not state:
#             pair += nums[i]
#             state = True
#         else:
#             for j in range(pair):
#                 ans.append(nums[i])
#             state = False
#             pair = 0
#     return ans

# print(decompressRLElist([1,2,3,4]))

##### XOR Algos #####
# 
#  def findArray(pref):
#     ans = [pref[0]]
#     for i in range(1,len(pref)):
#         newNum = pref[i-1] ^ pref[i]
#         ans.append(newNum)
#     return ans

# print(findArray([5,2,0,3,1]))

def decode(encoded, first):
    ans = [first]
    for i in range(len(encoded)):
        num = encoded[i]^ans[i]
        ans.append(num)
    return ans

print(decode([1,2,3],1))














