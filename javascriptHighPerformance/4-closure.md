# closure 
-->. closure in action that is inner function can have the access to the outer function variables as well as global variables.
--> defined outside the current scope is accessed from within some inner scope 
--> closures is allowing function to access  data which is outside of its local scope.
--> a function along with its Reference to its outer envirnoment together form a closure
--> closure is a combination of function and its lexical scope (bundled together to form a closure)

# ---------------------------------------------------
Global variables can be made local (private) with closures.

# drawbacks:
1. overconsumption of memory
2. and if not handle properly can leads to memory leaks
3. whenever a closure is formed, it consumed alot of memory,  it is not garbage collected
4. since the closure's scope property contains references to the same objects as the execution context's scope chain, there is a side effect. Closures requires more memory overhead in a script than a non-closure memory

# garbage collector
is like a program in browser or js engine, it kind of freeze up the unutilised memory