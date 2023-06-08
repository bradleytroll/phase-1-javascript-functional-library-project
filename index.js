function myEach(collection, callback) {
    if(Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
            callback(collection[i]);
        }
    } else if (typeof collection === 'object' && collection !== null) {
        for (let key in collection) {
            callback(collection[key]);
        }
    }
    return collection;
}
function myMap(collection, callback) {
   const newArray = [];

   if (Array.isArray(collection)) {
    for (let i = 0; i < collection.length; i++) {
        newArray.push(callback(collection[i], i));
    }
   } else if (typeof collection === 'object' && collection !== null) {
    for (let key in collection) {
        newArray.push(callback(collection[key], key));
    }
   }
   return newArray; 
}
function myReduce(collection, callback, acc) {
    for (let key in collection) {
      if (collection.hasOwnProperty(key)) {
        if (acc === undefined) {
          acc = collection[key];
        } else {
          acc = callback(acc, collection[key], collection);
        }
      }
    }
    return acc;
  }
  
  function myFind(collection, predicate) {
    if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        if (predicate(collection[i])) {
          return collection[i];
        }
      }
    } else if (typeof collection === 'object' && collection !== null) {
      for (let key in collection) {
        if (predicate(collection[key])) {
          return collection[key];
        }
      }
    }
  
    return undefined;
  }
  function myFilter(collection, predicate) {
    const newArray = [];
  
    if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        if (predicate(collection[i])) {
          newArray.push(collection[i]);
        }
      }
    } else if (typeof collection === 'object' && collection !== null) {
      for (let key in collection) {
        if (predicate(collection[key])) {
          newArray.push(collection[key]);
        }
      }
    }
  
    return newArray;
  }
  function mySize(collection) {
    if (Array.isArray(collection)) {
      return collection.length;
    } else if (typeof collection === 'object' && collection !== null) {
      return Object.keys(collection).length;
    } else {
      return 0;
    }
  }
  
  function myFirst(array, n) {
    if (n) {
      return array.slice(0, n);
    } else {
      return array[0];
    }
  }
  function myLast(collection, n) {
    if (n) {
      if (Array.isArray(collection)) {
        return collection.slice(-n);
      } else {
        const keys = Object.keys(collection);
        const slicedKeys = keys.slice(-n);
        return slicedKeys.reduce((result, key) => {
          result[key] = collection[key];
          return result;
        }, {});
      }
    } else {
      if (Array.isArray(collection)) {
        return collection[collection.length - 1];
      } else {
        const keys = Object.keys(collection);
        return collection[keys[keys.length - 1]];
      }
    }
  }
  function myKeys(object) {
    return Object.keys(object);
  }
  function myValues(object) {
    return Object.values(object);
  }