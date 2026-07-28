// system details intraction
// console.log(process.pid);
// console.log(process.uptime());
// console.log(process.memoryUsage());
// console.log(process.cwd());

// console.log(process.argv);
// console.log(process.platform);
// console.log(process.env);

// process.on('beforeExit', code=>{
//     console.log('Process is about to exit with code:', code)
// })

// process.on('exit', code=>{
//     console.log('Process exited with code:', code)
// })

// console.log('This will be logged before the process exits.')

const abortProcess = () =>{
    console.log("Start Process");
    setInterval(()=>{
        console.log("Running....")
    }, 1000);

    setTimeout(()=>{
        console.log("Abort Process....")
        return process.abort();
    }, 5000);
}

// abortProcess();

// console.log(`Starting Directory: ${process.cwd()}`);
// try{
//     process.chdir('karthik');
//     console.log(`NewDirectory: ${process.cwd()}`)
// }catch(err){
//     console.log("Error changing directory:", err);
// }


const pid = process.pid;
console.log(`Current Process ID: ${pid}`);

process.on('SIGNUP', ()=>{
    console.log('Received SIGNUP. Exiting gracefully...');
});
process.on('SIGINT', ()=>{
    console.log('Received SIGINT. Exiting gracefully...');
});

setTimeout(()=>{}, 100000)
setTimeout(()=>{
    return process.kill(pid, SIGINT);
}, 3000);