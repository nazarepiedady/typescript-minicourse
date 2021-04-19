function logDetails(uid: number | string, item: string) {
  console.log(`A product with ${uid} has a title as ${item}.`);
}

logDetails(123, 'sapato');
logDetails('123', 'sapato');