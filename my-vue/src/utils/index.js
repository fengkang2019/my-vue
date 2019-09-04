

export function getUsername() {
    let username = "";
    if (sessionStorage.userInfo) {
        username = JSON.parse(sessionStorage.userInfo).username
    }
    return username
}
//获取解密出来的用户名