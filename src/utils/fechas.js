
export function diasEnUnMes(mes, año) {
    return new Date(año, mes, 0).getDate();
}

export function date2string( date ){
    date = new Date( date )
    return date.getDate() +'/'+String(Number(date.getMonth())+1)+'/'+date.getFullYear()
}