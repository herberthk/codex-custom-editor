export const pythonCode = `
# Python3 program to find a list of uncommon words
 
# Function to return all uncommon words
 
 
def UncommonWords(A, B):
 
    # count will contain all the word counts
    count = {}
 
    # insert words of string A to hash
    for word in A.split():
        count[word] = count.get(word, 0) + 1
 
    # insert words of string B to hash
    for word in B.split():
        count[word] = count.get(word, 0) + 1
 
    # return required list of words
    return [word for word in count if count[word] == 1]
 
 
# Driver Code
A = "Geeks for Geeks"
B = "Learning from Geeks for Geeks"
 
# Print required answer
print(UncommonWords(A, B))
`;
