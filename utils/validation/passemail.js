/**
 * @description Utilidad para verificar la igualdad en la base de datos
 * @author Alfredo Lino Mendoza
 * @param {EmailReq} EmailReq Email mandado por el cliente 
 * @param {PassReq} passReq password mandado por el cliente
 * @param {Email} email Email obtenido de la base de datos
 * @param {Email} pass Password obtenido de la base de datos
 * @returns {Bool}  Boolean
 */
const checkCredentials = (emailReq, passReq, email, pass) =>
                                                    emailReq === email && passReq === pass;
module.exports = checkCredentials