# JavaScript-Course

### fetch().then(res=>(res.json).then(data=>console.log(data);
fetch()-----> it is a promise so '.then()' is used to tell the fetched data what to do.. 
we get the fetched data in form of json format , so to convert the response into obj use response.json ----> fetch().then(res=>res.json)
this is again a promise so we need to use '.then()' again to ensure the converted data gets collected.
fetch().then(res=>res.json).then(data).catch(error).
catch is used to get the error msgs.
