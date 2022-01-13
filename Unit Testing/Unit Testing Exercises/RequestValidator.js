function solve(obj) {
 
    if(!['POST', 'GET', 'CONNECT', 'DELETE'].includes(obj.method))
    {
throw Error(`Invalid request header: Invalid Method`);
    }

    if(!['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'].includes(obj.version))
    {
throw Error(`Invalid request header: Invalid Version`);
    }

    return obj;
}

console.log(solve({
    method: 'OPTIONS',
    uri: 'git.master',
    version: 'HTTP/1.1',
    message: '-recursive'
  }));