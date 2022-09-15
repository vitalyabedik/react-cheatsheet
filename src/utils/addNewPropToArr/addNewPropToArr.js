export const addNewPropToArr = (array) => {
    const newArr = array.map((item) => ({ ...item, menu: item.path }));
    return newArr;
};
