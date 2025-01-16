# Firebase onSnapshot Memory Leak
This repository demonstrates a common error when using Firebase's `onSnapshot` method: forgetting to unsubscribe.  Failure to unsubscribe results in memory leaks and can significantly impact application performance.

## Problem
The provided code uses `onSnapshot` to listen for changes in a Firebase collection but doesn't include the necessary cleanup code to unsubscribe.

## Solution
The solution demonstrates how to properly unsubscribe from `onSnapshot` using the returned unsubscribe function.