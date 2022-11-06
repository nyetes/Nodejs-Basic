const url = require('url');

const myUrl = new URL('http://mywebsite.com/hello.html?id=100&status=active');

// serialization URL
console.log(myUrl.href);
console.log(myUrl.toString());

// Host( root name)
console.log(myUrl.host);

// Host name - it doesnt get port name
console.log(myUrl.hostname);

// Path name
console.log(myUrl.pathname);

// Serialized query
console.log(myUrl.search);

// params Object
console.log(myUrl.searchparams);

//Add param
myUrl.searchParams.append('abx', '123');
console.log(myUrl.searchParams);

// Loop through params
myUrl.searchParams.forEach((value, name) =>
    console.log(`${name}: ${value}`)
);