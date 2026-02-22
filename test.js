console.log('Starting tesst...');
setTimeout(() => {
    console.log("Waiting 3 seconds");
    process.exit(0);
}, 3000);
console.log('Test completed');