// Think about how the following code should execute:

console.log('🚀 synchronous 1');

setTimeout(() => console.log('🛸 timeout 2'), 0)

Promise.resolve().then(() => console.log('⚡ promise 3'))

console.log('🔥 synchronous 4');

// the first and last written console logs execute because they are synchronous
// and remain on the main thread.

// the third written console log is then executed because it is queued as a
// micro task and has priority over queued macro tasks

// the second line is logged last because even though it is queued first, micro tasks (promises) take priority over macro tasks.
