function checknameEmail(str) {
    let regura = /^[A-Za-z0-9]+[A-Za-z0-9]*@[A-Za-z0-9]+(\.[A-Za-z0-9]+)$/;
    if(regura.test(str)){
        return true;
    }
    return false;
}