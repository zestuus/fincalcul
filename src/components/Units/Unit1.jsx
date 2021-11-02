// import React from "react";
// import formula_2_3 from "../../images/formulas/formula-2-3.jpg";

import formula_1_1 from "../../images/formulas/formula-1-1.jpg";

const Unit1 = {
  title: 'Прості відсотки',
  blocks: [
    {
      title: '1.1 Нарощення за простими відсотковими ставками',
      formulas: [
        {
          formula: 'I=n*P*i/100',
          image: formula_1_1,
          variables: [
            { name: 'I', description: 'отримані відсоткові гроші' },
            { name: 'n', description: 'термін угоди (в періодах)', default: 1 },
            { name: 'P', description: 'сума грошей, що даються в борг', default: 1 },
            { name: 'i', description: 'проста відсоткова ставка за один період (у відсотках)', default: 1 },
          ],
        },
        // {
        //   formula: 'I=j1_m1*p',
        //   image: formula_1_1,
        //   variables: [
        //     { name: 'I', description: 'відсоткова ставка (проценти)' },
        //     { name: 'j1_m1', description: 'j', displayName: 'j', sub: '1', sup: (<span>(m<sub>1</sub>)</span>) },
        //     { name: 'p', description: 'сума грошей, (капітал) що дається в борг' },
        //   ],
        // },
        // {
        //   formula: 'S=P*Π(Μ(i,(__,j)=>((1+__)**n[j])))',
        //   image: formula_2_3,
        //   variables: [
        //     { name: 'S', description: 'S' },
        //     { name: 'P', description: 'P' },
        //     { name: 'm', description: 'm', default: 1 },
        //     { name: 'i', description: 'i', length: 'm', default: 1 },
        //     { name: 'n', description: 'n', length: 'm' },
        //   ],
        // },
      ],
    },
  ],
};

export default Unit1;