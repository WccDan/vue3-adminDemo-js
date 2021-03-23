export function checkPhone (value){

    let regPhone = /^1[3456789]\d(9)$/;

    return regPhone.test(value);
}