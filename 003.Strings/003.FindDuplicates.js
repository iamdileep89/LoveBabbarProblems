function findDups(arr){
    let map = {}

    let i = 0
    while(i<arr.length){
        map[arr[i]] = (map[arr[i]] || 0) + 1
        i++
    }

    for(let key in map){
        if(map[key] > 1){
            console.log(key)
        }
    }
}
// Time Complexity:  O(N log N), where N = length of the string passed and it generally takes logN time for an element insertion in a map.

// Space Complexity: O(K), where K = size of the map (0<=K<=input_string_length).


