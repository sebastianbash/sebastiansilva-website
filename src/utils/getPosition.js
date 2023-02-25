export const getPosition = text => {
    let x, y;
    let texto = text.childNodes[0].data;
    let long = text.offsetWidth;

    console.log('El texto: ', texto, ' y su longitud es de: ', long);
}