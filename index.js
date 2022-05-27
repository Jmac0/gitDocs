import {newFeature} from './feature'
function one(){
  return 'one';
}
one();

// not on remote
function fea () {
  console.log('new stuff on new branch');
newFeature();
}

const bugfix2 = true;

const bugfix = function(bug) {
  return bug + 2
}
const newThingOnFeature = true;
const newThing = 'new master'
// only on jimbob