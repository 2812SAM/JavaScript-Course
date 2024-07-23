# Java script
### It is a syncrounous language i.e. it do one task at a time.

# Blocking Code vs Non Blocking Code
### block the program and do some other task like reading a file.
### non Blocking does no block the program/execution while the executior is doing some other task like reading a file

# V8 Engine Js Engine Working
### JS engine has memory haep and call stack which contains Global execution context and other functions.
### For async work , functions calls web APIs like Set Interval , Set interval , fetch(). ---> Call stack removes that func. call from stack but the web api register its code in task Queue and after a set time interval it is added to the call stack in Js engine. 2) fetch() is a higher priority task Queue which also do the same work 

### If the time Interval given by the function to the web API is 0 Second , it does not mean that it will execute simpultaneously, but it will get execute after its immideate next call as its cycle req some time to get back to the call stack