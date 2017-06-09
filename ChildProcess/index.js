const spawn = require('child_process').spawn;
const ls = spawn('ls', ['-lh', 'd:\\']);

ls.stdout.on('data', (data) => {
    console.log(`stdout: ${data}`)
});
