import input from 'input';
 
async function askStuff() {
  const result = await input.text('Dogs or cats?');

  console.log(result)
}
 


 
askStuff();