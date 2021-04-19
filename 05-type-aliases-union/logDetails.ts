// type alias
type Uid = number | string;

function logDetails(uid: Uid, item: string) {
  console.log(`A product with ${uid} has a title as ${item}.`);
}

function logInfo(uid: Uid, user: string) {
  console.log(`An user with ${uid} has a name as ${user}.`);
}

// predefine type alias with values
type Platform = 'Windows' | 'Linux' | 'Mac OS'

function renderPlatform(platform: Platform) {
  return  `<h1>${platform}</h1>`
}

logDetails(123, 'sapato');
logDetails('123', 'sapato');