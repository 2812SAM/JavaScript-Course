/*
***************************** Stack is used to store the execution events of js.

1)when ever the program is run the Global Execution context is pushed in stack. This global Execution context is stored in *THIS* keyword.

there are total 3 execution context....1) Global Execution Context
2) Function Execution Context
3) Eval Execution Context


The program is executed in two phases..
1) Memory Creation Phase:-- at first only memory is granted as per the variables declared in the code..
value is assigned in execution phase.
but if there is any function declared . its defination is also allocated in the memory.


2) Execution phase :- all the values to variables are assigned with there values in this pahse..
.. NOTE.. When there comes a new function ... a New environment is setuped.. which is called Function Execution Context. It has its own Memory creation phase and Execution phase..... After completion of the function The the result is retured into the Global Execution unit..


..............................................................................




*/