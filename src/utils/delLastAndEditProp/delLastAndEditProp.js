export const delLastAndEditProp = (array, value, index) => {
    array.pop();
    array[index].menu = value;
    return array;
};
