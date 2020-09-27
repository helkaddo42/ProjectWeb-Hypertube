export const email =  /[a-z0-9!#$%&‘*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&‘*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
export const password =  /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).{6,}/;
export const confirmPassword =  /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).{6,}/;
export const login = /^[A-Z][A-Z0-9]*(?:[-_][A-Z0-9]+)*$/i;