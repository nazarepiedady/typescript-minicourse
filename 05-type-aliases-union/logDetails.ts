function logDetails(uid: number | string, item: string) {
  console.log(`A product with ${uid} has a title as ${item}.`);
}

function logInfo(uid: number | string, user: string) {
  console.log(`An user with ${uid} has a name as ${user}.`);
}

logDetails(123, 'sapato');
logDetails('123', 'sapato');