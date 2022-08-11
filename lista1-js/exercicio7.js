/**
 * Faça um programa que retorne true ou false conforme a entrada Y,y,yes,S,sim
 * 
 * ENTRADA          SAÍDA
 * Y                         true
 * Yes, YES, yes             true
 * y                         true
 * S, SIM                    true
 * s, sim, Sim               true
 * 1                         true
 * 👍                        true
 * n,N,J,0, espaço           false
 * qualquer outra coisa, $   false
 */

// Entrada
let includesCorretos = ['Yes', 'YES', 'yes', 'Y','y', 'S', 'SIM', 's', 'sim', 'Sim', '1'],
    entrada = '1',
    validacao = includesCorretos.includes(entrada);

console.log(validacao)



