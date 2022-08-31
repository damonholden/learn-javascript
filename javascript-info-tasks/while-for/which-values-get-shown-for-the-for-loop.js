// Both of these for loops execute the same sequence of alerts, 0 - 4 in both cases.

// postfix:
for (let i = 0; i < 5; i++)alert(i);

// prefix:
for (let i = 0; i < 5; ++i) alert(i);

// This is because in both loops, the increment is separated from the condition check.
