 const getSubSets =( inpSet, qty ) => {
     len = inpSet.length;
     combination = [];
     result = []; 
     recurse = function( left, right ) {
      if ( right == 0 ) {
        result.push( combination.slice(0) );
      } else {
        for ( var i = left; i <= len - right; i++ ) {
          combination.push( inpSet[i] );
          recurse( i + 1, right - 1 );
          combination.pop();
        }
      }
    }
    recurse( 0, qty );
    console.log(result)
  }
  
  // Chamar a função de acordo com o input e com a quantidaded de combinações desejada.
  getSubSets([1,2,3],1),getSubSets([1,2,3],2),getSubSets([1,2,3],3)