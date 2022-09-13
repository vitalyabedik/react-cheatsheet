export const delLastPropAndEditFirstProp = (array, newEl, index) => {
    const newArr = array.slice(0, array.length - 1);
    newArr.map((item) => (item.menu = item.path));
    newArr[index].menu = newEl;
    return newArr;
};
