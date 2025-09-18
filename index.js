const core = require('@nlpjs/core');
const nlp = require('@nlpjs/nlp');
const langenmin = require('@nlpjs/lang-en-min');
const langpt = require('@nlpjs/lang-pt');
const requestrn = require('@nlpjs/request-rn');

window.nlpjs = { ...core, ...nlp, ...langenmin, ...langpt, ...requestrn };

// Para usar no browser executar 
// npm run browserdist

//NOTAR QUE O REQUEST.JS ESTA MODIFICADO PARA USAR FETCH EN VEZ DE AXIOS
//LAM
// async function request(options) {
//   if (typeof options === 'string') {
//     options = {
//       url: options,
//     };
//   }
//   if (!options.method) {
//     options.method = 'get';
//   }
//   const result=await fetch(options.url);
//   return await result.text();
// }