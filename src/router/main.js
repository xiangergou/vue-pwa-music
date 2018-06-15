'use strict';

const main = resolve => { require(['../views/main'], resolve); };
const zuche = resolve => { require(['../views/main/zuche'], resolve); };
const station = resolve => { require(['../views/main/station'], resolve); };
const inUse = resolve => { require(['../views/main/inuse'], resolve); };
const evaluate = resolve => { require(['../views/main/evaluate'], resolve); };
const returnPay = resolve => { require(['../views/main/return-pay'], resolve); };
const rentAgreement = resolve => { require(['../views/main/rent-agreement'], resolve); };

const subSites = [{
  name: 'zuche',
  path: 'zuche',
  component: zuche
}, {
  name: 'station',
  path: 'station/:id',
  component: station
}, {
  name: 'inuse',
  path: 'inuse',
  component: inUse
}, {
  name: 'returnPay',
  path: 'return-pay',
  component: returnPay
}, {
  name: 'evaluate',
  path: 'evaluate',
  component: evaluate
}, {
  name: 'rent-agreement',
  path: 'rent-agreement',
  component: rentAgreement
}];
module.exports = {
  name: 'main',
  path: '/main',
  component: main,
  children: subSites
};
