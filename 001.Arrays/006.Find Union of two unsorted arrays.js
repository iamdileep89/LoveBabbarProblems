// Frequency counter pattern - Time - O(n), Space-O(1)

function unionArray(arr1, arr2){
    let newArr = []
    let i =0, j=0;
    let obj = {}

    while(i<arr1.length && j<arr2.length){

        if(!obj[arr1[i]]){
            newArr.push(arr1[i])
            obj[arr1[i]] = (obj[arr1[i]] || 0)+1
        } 
        if(!obj[arr2[j]]){
            newArr.push(arr2[j])
            obj[arr2[i]] = (obj[arr2[i]] || 0)+1
        } 
        i++
        j++
    }
    while(i<arr1.length){
        if(!obj[arr1[i]]){
            newArr.push(arr1[i])
            obj[arr1[i]] = (obj[arr1[i]] || 0)+1
        }
        i++
    }
    while(j<arr2.length){
        if(!obj[arr2[j]]){
            newArr.push(arr2[j])
            obj[arr2[i]] = (obj[arr2[i]] || 0)+1
        }
        j++
    }
    return newArr;
}


// Approach -2 Using Sets

function unionArray(arr1, arr2){
  var s = new Set()
  for(let value of arr1){
    s.add(value)
  }
  for(let value of arr2){
    s.add(value)
  }
  return [...s]
}