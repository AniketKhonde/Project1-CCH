const questions = [
    { question: "Two Sum", platform: "LeetCode", topic: "array", status: "Unsolved", link: "https://leetcode.com/problems/two-sum/" },
    { question: "Maximum Subarray Sum", platform: "GeeksforGeeks", topic: "array", status: "Unsolved", link: "https://www.geeksforgeeks.org/largest-sum-contiguous-subarray/" },
    { question: "Rotate Array", platform: "HackerRank", topic: "array", status: "Unsolved", link: "https://www.hackerrank.com/challenges/rotate-array/" },
    { question: "Search in a 2D Matrix", platform: "LeetCode", topic: "2darray", status: "Unsolved", link: "https://leetcode.com/problems/search-a-2d-matrix/" },
    { question: "Set Matrix Zeroes", platform: "LeetCode", topic: "2darray", status: "Unsolved", link: "https://leetcode.com/problems/set-matrix-zeroes/" },
    { question: "Longest Substring Without Repeating Characters", platform: "LeetCode", topic: "strings", status: "Unsolved", link: "https://leetcode.com/problems/longest-substring-without-repeating-characters/" },
    { question: "Merge Sort", platform: "GeeksforGeeks", topic: "sorting", status: "Unsolved", link: "https://www.geeksforgeeks.org/merge-sort/" },
    { question: "Quick Sort", platform: "GeeksforGeeks", topic: "sorting", status: "Unsolved", link: "https://www.geeksforgeeks.org/quick-sort/" },
    { question: "Factorial", platform: "GeeksforGeeks", topic: "recursion", status: "Unsolved", link: "https://www.geeksforgeeks.org/factorial/" },
    { question: "Maximum and Minimum Element in an Array", platform: "GeeksforGeeks", topic: "array", status: "Unsolved", link: "https://www.geeksforgeeks.org/maximum-and-minimum-in-an-array/" },
    { question: "3sum", platform: "leetcode", topic: "array", status: "Unsolved", link: "https://leetcode.com/problems/3sum/description/" },
    { question: "Find Pair with Sum in Sorted & Rotated Array ", platform: "GeeksforGeeks", topic: "array", status: "Unsolved", link: "https://www.geeksforgeeks.org/given-a-sorted-and-rotated-array-find-if-there-is-a-pair-with-a-given-sum/" },
    { question: "Kth - Smallest Element ", platform: "Geeksforgeeks", topic: "array ", status: "Unsolved", link: "https://www.geeksforgeeks.org/kth-smallest-largest-element-in-unsorted-array/" },
    { question: "Valid Palindrome", platform: "Geeksforgeeks", topic: "strings ", status: "Unsolved", link: "https://www.geeksforgeeks.org/Valid-Palindrome/" },
    { question: "Valid parentheses", platform: "geeksforgeeks", topic: "strings", status: "Unsolved", link: "https://www.geeksforgeeks.org/Valid-parentheses/" },
    { question: "Next Permutation", platform: "geeksforgeeks", topic: "strings ", status: "Unsolved", link: "https://www.geeksforgeeks.org/Next-Permutation/" },
    { question: "Find a Common Element in all Rows of a Given Row-Wise Sorted Matrix ", platform: "geeksforgeek", topic: "2darray", status: "Unsolved", link: "https://www.geeksforgeeks.org/find-common-element-rows-row-wise-sorted-matrix/" },
    { question: "Rotate Image", platform: "geeksforgeeks", topic: "2darray ", status: "Unsolved", link: "https://www.geeksforgeeks.org/Permute-Two-Arrays/" },
    { question: "Permute Two Arrays ", platform: "geeksforgeeks", topic: "sorting", status: "Unsolved", link: "https://www.geeksforgeeks.org/permute-two-arrays-sum-every-pair-greater-equal-k/" },
    { question: "majority element ", platform: "geeksforgeeks", topic: "sorting", status: "Unsolved", link: "https://www.geeksforgeeks.org/majority-element/" },
    { question: "Merge Sorted Arrays", platform: "geeksforgeeks", topic: "Sorting", status: "Unsolved", link: "https://www.geeksforgeeks.org/Merge-Sorted-Arrays/" },
    { question: "Print Subarrays with 0 Sum ", platform: "geeksforgeeks", topic: "sorting", status: "Unsolved", link: "https://www.geeksforgeeks.org/print-all-subarrays-with-0-sum/" },
    { question: "Reverse Linked List", platform: "leetcode", topic: "linkedlist", status: "Unsolved", link: "https://leetcode.com/problems/Reverse-Linked-List/description/" },
    { question: "Merge Two Sorted Lists ", platform: "leetcode", topic: "linkedlist", status: "Unsolved", link: "https://leetcode.com/problems/Merge-Two-Sorted-Lists/description/" },
    { question: "Detect and remove loop in a linked list", platform: "leetcode", topic: "linkedlist", status: "Unsolved", link: "https://leetcode.com/problems/linked-list-cycle-ii/description/" },
    { question: "Write-a-Function-to-get-the-Intersection-Point-of-two-Linked-Lists ", platform: "geeksforgeek", topic: "linkedlist", status: "Unsolved", link: "https://www.geeksforgeeks.org/write-a-function-to-get-the-intersection-point-of-two-linked-lists/" },
    { question: "Rearrange a given linked list in place ", platform: "leetcode", topic: "linkedlist", status: "Unsolved", link: "https://leetcode.com/problems/reorder-list/description/" },
    { question: "Sum of two linked lists", platform: "leetcode", topic: "linkedlist", status: "Unsolved", link: "https://leetcode.com/problems/add-two-numbers/description/" },
    { question: "Implement-two-stacks-in-an-Array", platform: "leetcode", topic: "stack", status: "Unsolved", link: "https://leetcode.com/problems/build-an-array-with-stack-operations/description/" },
    { question: "Evaluation-of-Postfix-Expression ", platform: "leetcode", topic: "stack", status: "Unsolved", link: "https://leetcode.com/problems/evaluate-reverse-polish-notation/solutions/1639119/stack-postfix-expression-evaluation/" },
    { question: "Reverse-first-k-elements-of-queue", platform: "leetcode", topic: "queue", status: "Unsolved", link: "https://leetcode.com/problems/reverse-linked-list-ii/solutions/330646/c-easy-to-understand-using-reverse-first-k-elements/" },
    { question: "Design-Stack-with-Middle-Operation", platform: "leetcode", topic: "stack", status: "Unsolved", link: "https://leetcode.com/discuss/interview-question/1598050/Design-a-stack-with-operations-push()-pop()-getMiddle()-and-deleteMiddle()" },
    { question: "Design-and-Implement-Special-stack ", platform: "leetcode", topic: "stack", status: "Unsolved", link: "https://leetcode.com/problems/min-stack/description/" },
    { question: "Queue based approach for first non repeating character in a stream", platform: "leetcode", topic: "queue", status: "Unsolved", link: "https://leetcode.com/discuss/interview-question/125015/first-non-repeating-character-in-a-string" },
    { question: "Circular-tour", platform: "leetcode", topic: "queue", status: "Unsolved", link: "https://leetcode.com/problems/Circular-tour/" },
    { question: "Binary Tree Level Order Traversal", platform: "leetcode", topic: "tree", status: "Unsolved", link: "https://leetcode.com/problems/binary-tree-level-order-traversal-ii/solutions/810381/binary-tree-reverse-level-order-traversal/" },
    { question: " Maximum Depth of Binary Tree", platform: "leetcode", topic: "tree", status: "Unsolved", link: "https://leetcode.com/problems/maximum-depth-of-binary-tree/solutions/1786790/height-of-tree/" },
    { question: "Create a mirror tree from the given binary tree", platform: "leetcode", topic: "tree", status: "Unsolved", link: "https://leetcode.com/problems/invert-binary-tree/description/" },
    { question: "Construct Binary Tree from String with Brackets", platform: "geeksforgeeks", topic: "tree", status: "Unsolved", link: "https://www.geeksforgeeks.org/construct-binary-tree-string-bracket-representation/" },
    { question: "Binary Tree Maximum Path Sum", platform: "geeksforgeeks", topic: "tree", status: "Unsolved", link: "https://www.geeksforgeeks.org/find-maximum-path-sum-in-a-binary-tree/" },
    { question: "Combinational Sum", platform: "geeksforgeeks", topic: "recursion", status: "Unsolved", link: "https://www.geeksforgeeks.org/Combinational-Sum/" },
    { question: "fibbonacci series", platform: "geeksforgeeks", topic: "recursion", status: "Unsolved", link: "https://www.geeksforgeeks.org/fibbonacci-series/" },
    { question: "Mergesort", platform: "geeksforgeeks", topic: "recursion", status: "Unsolved", link: "https://www.geeksforgeeks.org/Mergesort/" },
    { question: "Printing all solutions in N-Queen Problem", platform: "geeksforgeek", topic: "recursion", status: "Unsolved", link: "https://www.geeksforgeeks.org/printing-solutions-n-queen-problem/" },
    { question: "Breadth first search", platform: "geeksforgeeks", topic: "graph", status: "Unsolved", link: "https://www.geeksforgeeks.org/breadth-first-search-or-bfs-for-a-graph/" },
    { question: "depth first search", platform: "geeksforgeeks", topic: "graph", status: "Unsolved", link: "https://www.geeksforgeeks.org/depth-first-search-or-dfs-for-a-graph/" },
    { question: "Detect cycle in an undirected graph ", platform: "geeksforgeeks", topic: "graph", status: "Unsolved", link: "https://www.geeksforgeeks.org/problems/detect-cycle-in-an-undirected-graph/1/" },
    { question: "Number of Operations to Make Network Connected", platform: "geeksforgeeks", topic: "graph", status: "Unsolved", link: "https://https://www.geeksforgeeks.org/minimize-count-of-connections-required-to-be-rearranged-to-make-all-the-computers-connected//" },
    { question: "Dijkstras shortest path algorithm", platform: "geeksforgeeks", topic: "graph", status: "Unsolved", link: "https://www.geeksforgeeks.org/dijkstras-shortest-path-algorithm-greedy-algo-7/" },
    { question: "Prim's Algo", platform: "geeksforgeeks", topic: "graph", status: "Unsolved", link: "https://www.geeksforgeeks.org/prims-minimum-spanning-tree-mst-greedy-algo-5//" }
    // Add more questions...
];

// Function to filter questions based on selected topic
function filterQuestions() {
    const selectedTopic = document.getElementById("topics").value;
    const filteredQuestions = selectedTopic === "all" ? questions : questions.filter(q => q.topic === selectedTopic);
    displayQuestions(filteredQuestions);
}

// Function to display questions in the table
function displayQuestions(filteredQuestions) {
    const tbody = document.getElementById("questions-body");
    tbody.innerHTML = "";

    filteredQuestions.forEach(question => {
        const row = tbody.insertRow();
        row.innerHTML = `
            <td>${question.question}</td>
            <td><a href="${question.link}" target="_blank">${question.platform}</a></td>
            <td>
                <select class="status-dropdown" onchange="updateStatus(this)">
                    <option value="Solved" ${question.status === 'Solved' ? 'selected' : ''}>Solved</option>
                    <option value="Unsolved" ${question.status === 'Unsolved' ? 'selected' : ''}>Unsolved</option>
                </select>
            </td>
        `;
    });
}

// Function to update the status of a question
function updateStatus(selectElement) {
    const selectedStatus = selectElement.value;
    // You can add logic here to update your data model or perform other actions based on the selected status
    console.log('Selected Status:', selectedStatus);
}

// Initial display of all questions
filterQuestions();
function changePage5(){
    window.location.href="index.html";
}