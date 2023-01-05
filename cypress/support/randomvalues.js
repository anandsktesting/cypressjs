export const uuid = () => Date.now()
export var email = "";
export const getUniqueEmail = () => `fake_+${uuid()}@email.com`

export var text = "";
export var ltext = "";
export var pnumber = "";



export const getRandomName = () => {
  //var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  for (var i = 0; i < 10; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  return text;
}




export const getRandomSecondName = () => {
    var lpossible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    for (var i = 0; i < 10; i++)
      ltext += lpossible.charAt(Math.floor(Math.random() * lpossible.length));
    return ltext;
  }


  export const getRandomPNumber = () => {
    
    for (var i = 0; i < 10; i++)
    pnumber += Math.floor(Math.random() * 9);
    return pnumber;
  }




// set user function to return an object that gets object as parameter
export const user = () => ({
  Name: getRandomName(),
  LName: getRandomSecondName(),
  PNumber: getRandomPNumber(),
  Email: getUniqueEmail()
})


