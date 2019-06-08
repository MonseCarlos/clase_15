const process =require ('process');


console.log(process.memoryUsage());
console.log(`Directorio de ejecucion: ${process.cwd()}`);

const startUsage = process.cpuUsage();
console.log(process.env)
console.log(startUsage)

//console.log(process.report.directory)

/*
try {
  process.chdir('/tmp');
  console.log(`New directory: ${process.cwd()}`);
} catch (err) {
  console.error(`chdir: ${err}`);
}*/