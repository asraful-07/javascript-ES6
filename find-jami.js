const products = [
   {name: 'abul', job: 'sorkari', salary: 17000},
   {name: 'bbul', job: 'besorkari', salary: 77000},
   {name: 'cbul', job: 'besorkari', salary: 87000},
   {name: 'dbul', job: 'sorkari', salary: 21000},
   {name: 'ebul', job: 'besorkari', salary: 39000},
   {name: 'fbul', job: 'sorkari', salary: 23000},
   {name: 'ebul', job: 'besorkari', salary: 7000},
];

// sorkari => 20000 || besorkari => 40000;

const jamai = products.filter((pola) => (pola.job === 'sorkari' && pola.salary >= 19000 ) ||
(pola.job === 'besorkari' && pola.salary >= 40000 ) 
);
 
const lottery = Math.floor(Math.random()*jamai.length) 
// const result =
console.log( jamai[lottery].name, "jitchi re vai.......");
