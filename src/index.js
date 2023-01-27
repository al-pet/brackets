module.exports = function check(str, bracketsConfig) {
 
    if (str == "") return true;
     let cleanedLength = 0;

     while (cleanedLength != str.length)  {
      cleanedLength = str.length;
      for (let i = 0 ; i < bracketsConfig.length ; i ++ ) {
        str = str.replaceAll(bracketsConfig[i][0] + bracketsConfig[i][1] , '');
      }
      if (str.length == 0) return true;
     }

    return false;
 
}
