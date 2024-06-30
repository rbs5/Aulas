function validar(usuario, senha) {
    if (usuario === 'bonieky' && senha == '123') {
        return true;
    } else {
        return false;
    }
}

let usuario = 'bonieky';
let senha = '123';
let validacao = validar(usuario, senha);
if (validacao) {
    console.log('Acesso Concedido.');

} else {
    console.log('Acesso NEGADO!');
}