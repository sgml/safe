  function testcase() 
  {
    var tokenCodes = {
      implements : 0,
      let : 1,
      private : 2
    };
    var arr = ['implements', 'let', 'private', ];
    for(var p in tokenCodes)
    {
      for(var p1 in arr)
      {
        if (arr[p1] === p)
        {
          if (! tokenCodes.hasOwnProperty(arr[p1]))
          {
            return false;
          }
          ;
        }
      }
    }
    return true;
  }
  {
    var __result1 = testcase();
    var __expect1 = true;
  }
  