def centered_average(nums):
    nums.sort()  # Sort the list in ascending order
    return sum(nums[1:-1]) // (len(nums) - 2)  # Remove first and last element, then compute the mean

def sum13(nums):
    total = 0
    skip_next = False  # Flag to skip the number right after 13

    for num in nums:
        if num == 13:
            skip_next = True  # Skip the next number
            continue
        if skip_next:
            skip_next = False  # Reset the flag
            continue
        total += num  # Add valid numbers to the sum
    
    return total

def sum67(nums):
    total = 0
    ignore_section = False  # Flag to track if we are inside a 6-7 section

    for num in nums:
        if num == 6:
            ignore_section = True  # Start ignoring numbers
            continue
        if ignore_section:
            if num == 7:
                ignore_section = False  # Stop ignoring when we reach 7
            continue  # Skip numbers inside the 6-7 section
        total += num  # Add valid numbers to the sum
    
    return total

def has22(nums):
    for i in range(len(nums) - 1):  # Iterate until the second last element
        if nums[i] == 2 and nums[i + 1] == 2:
            return True
    return False
