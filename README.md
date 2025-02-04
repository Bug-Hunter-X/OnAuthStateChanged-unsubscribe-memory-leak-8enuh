# Firebase onAuthStateChanged Unsubscribe Issue

This repository demonstrates a common issue with Firebase's `onAuthStateChanged` listener:  memory leaks due to improper unsubscription when a component unmounts. The `authBug.js` file showcases the problematic code, while `authSolution.js` provides a corrected version.

## Problem

The original code fails to unsubscribe from the `onAuthStateChanged` listener, leading to continued execution even after the component is removed from the DOM. This results in memory leaks and potential performance degradation.

## Solution

The solution involves returning the unsubscribe function from the component's cleanup method (e.g., `useEffect`'s return statement in React). This ensures the listener is detached when the component is unmounted, preventing memory leaks.