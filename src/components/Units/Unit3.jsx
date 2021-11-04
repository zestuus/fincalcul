import formula_3_1 from "../../images/formulas/formula_3_1.jpg";
import formula_3_2 from "../../images/formulas/formula_3_2.jpg";
import formula_3_3 from "../../images/formulas/formula_3_3.jpg";
import formula_3_4 from "../../images/formulas/formula_3_4.jpg";
import formula_3_5 from "../../images/formulas/formula_3_5.jpg";
import formula_3_6 from "../../images/formulas/formula_3_6.jpg";
import formula_3_7 from "../../images/formulas/formula_3_7.jpg";
import formula_3_8 from "../../images/formulas/formula_3_8.jpg";
import formula_3_9 from "../../images/formulas/formula_3_9.jpg";
import formula_3_10 from "../../images/formulas/formula_3_10.jpg";
import formula_3_11 from "../../images/formulas/formula_3_11.jpg";
import formula_3_12 from "../../images/formulas/formula_3_12.jpg";
import formula_3_13 from "../../images/formulas/formula_3_13.jpg";
import formula_3_14 from "../../images/formulas/formula_3_14.jpg";
import formula_3_15 from "../../images/formulas/formula_3_15.jpg";
import formula_3_16 from "../../images/formulas/formula_3_16.jpg";

const Unit3 = {
  title: 'Визначення інших параметрів угод із відсотковими ставками',
  blocks: [
    {
      title: '3.1. Визначення деяких параметрів фінансових угод з простими ставками',
      formulas: [
        {
          formula: 'n=(S/P-1)/i',
          image: formula_3_1,
          variables: [
            { name: 'n', description: 'тривалість угоди в роках' },
            { name: 'S', description: 'нарощена сума боргу (з процентами)', default: 1 },
            { name: 'P', description: 'початкова величина боргу (позики, кредиту, капіталу і т. п.)', default: 1 },
            { name: 'i', description: 'проста відсоткова ставка за один період', default: 0.01, max: 1, step: 0.01 },
          ],
        },
        {
          formula: 'n=(1-P/S)/d',
          image: formula_3_2,
          variables: [
            { name: 'n', description: 'тривалість угоди в роках' },
            { name: 'S', description: 'нарощена сума боргу (з процентами)', default: 1 },
            { name: 'P', description: 'початкова величина боргу (позики, кредиту, капіталу і т. п.)', default: 1 },
            { name: 'd', description: 'проста облікова ставка', default: 0.01, max: 1, step: 0.01 },
          ],
        },
        {
          formula: 't=(S/P-1)/i*K',
          image: formula_3_3,
          variables: [
            { name: 't', description: 'тривалість угоди в днях' },
            { name: 'S', description: 'нарощена сума боргу (з процентами)', default: 1 },
            { name: 'P', description: 'початкова величина боргу (позики, кредиту, капіталу і т. п.)', default: 1 },
            { name: 'i', description: 'проста відсоткова ставка за один період', default: 0.01, max: 1, step: 0.01 },
            { name: 'K', description: 'часова база нарахувань', default: 360 },
          ],
        },
        {
          formula: 't=(1-P/S)/d*K',
          image: formula_3_4,
          variables: [
            { name: 't', description: 'тривалість угоди в днях' },
            { name: 'S', description: 'нарощена сума боргу (з процентами)', default: 1 },
            { name: 'P', description: 'початкова величина боргу (позики, кредиту, капіталу і т. п.)', default: 1 },
            { name: 'd', description: 'проста облікова ставка', default: 0.01, max: 1, step: 0.01 },
            { name: 'K', description: 'часова база нарахувань', default: 360 },
          ],
        },
        {
          formula: 'i=(S/P-1)/n',
          image: formula_3_5,
          variables: [
            { name: 'i', description: 'проста відсоткова ставка за один період'},
            { name: 'n', description: 'тривалість угоди в роках', default: 1 },
            { name: 'S', description: 'нарощена сума боргу (з процентами)', default: 1 },
            { name: 'P', description: 'початкова величина боргу (позики, кредиту, капіталу і т. п.)', default: 1 },
          ],
        },
        {
          formula: 'd=(1-P/S)/n',
          image: formula_3_6,
          variables: [
            { name: 'd', description: 'проста облікова ставка' },
            { name: 'n', description: 'тривалість угоди в роках', default: 1 },
            { name: 'S', description: 'нарощена сума боргу (з процентами)', default: 1 },
            { name: 'P', description: 'початкова величина боргу (позики, кредиту, капіталу і т. п.)', default: 1 },
          ],
        },
        {
          formula: 'i=(S/P-1)/t*K',
          image: formula_3_7,
          variables: [
            { name: 'i', description: 'проста відсоткова ставка за один період' },
            { name: 't', description: 'тривалість угоди в днях', default: 1 },
            { name: 'S', description: 'нарощена сума боргу (з процентами)', default: 1 },
            { name: 'P', description: 'початкова величина боргу (позики, кредиту, капіталу і т. п.)', default: 1 },
            { name: 'K', description: 'часова база нарахувань', default: 360 },
          ],
        },
        {
          formula: 'd=(1-P/S)/t*K',
          image: formula_3_8,
          variables: [
            { name: 'd', description: 'проста облікова ставка'},
            { name: 't', description: 'тривалість угоди в днях', default: 1  },
            { name: 'S', description: 'нарощена сума боргу (з процентами)', default: 1 },
            { name: 'P', description: 'початкова величина боргу (позики, кредиту, капіталу і т. п.)', default: 1 },
            { name: 'K', description: 'часова база нарахувань', default: 360 },
          ],
        },
      ]
    },
    {
      title: '3.2. Визначення деяких параметрів фінансових угод з складними ставками',
      formulas: [
        {
          formula: 'n=Math.log(S/P)/Math.log(1+i)',
          image: formula_3_9,
          variables: [
            { name: 'n', description: 'тривалість угоди в роках' },
            { name: 'S', description: 'нарощена сума боргу (з процентами)', default: 1 },
            { name: 'P', description: 'початкова величина боргу (позики, кредиту, капіталу і т. п.)', default: 1 },
            { name: 'i', description: 'річна ставка складних відсотків (у вигляді десяткового дробу)', default: 0.01, max: 1, step: 0.01 },
          ],
        },
        {
          formula: 'n=Math.log(S/P)/(m*Math.log(1+j/m))',
          image: formula_3_10,
          variables: [
            { name: 'n', description: 'тривалість угоди в роках' },
            { name: 'S', description: 'нарощена сума боргу (з процентами)', default: 1 },
            { name: 'P', description: 'початкова величина боргу (позики, кредиту, капіталу і т. п.)', default: 1 },
            { name: 'j', description: 'річна ставка, за якою відсотки нараховуються m разів на рік', default: 0.01, max: 1, step: 0.01 },
            { name: 'm', description: 'кількість нарахувань у році', default: 1 },
          ],
        },
        {
          formula: 'n=Math.log(P/S)/Math.log(1-d)',
          image: formula_3_11,
          variables: [
            { name: 'n', description: 'тривалість угоди в роках' },
            { name: 'S', description: 'нарощена сума боргу (з процентами)', default: 1 },
            { name: 'P', description: 'початкова величина боргу (позики, кредиту, капіталу і т. п.)', default: 1 },
            { name: 'd', description: 'складна облікова ставка', default: 0.01, max: 1, step: 0.01 },
          ],
        },
        {
          formula: 'n=Math.log(P/S)/(m*Math.log(1-f/m))',
          image: formula_3_12,
          variables: [
            { name: 'n', description: 'тривалість угоди в роках' },
            { name: 'S', description: 'нарощена сума боргу (з процентами)', default: 1 },
            { name: 'P', description: 'початкова величина боргу (позики, кредиту, капіталу і т. п.)', default: 1 },
            { name: 'f', description: 'номінальна річна облікова ставка', default: 0.01, max: 1, step: 0.01 },
            { name: 'm', description: 'кількість нарахувань у році', default: 1 },
          ],
        },
        {
          formula: 'i=(S/P)**(1/n)-1',
          image: formula_3_13,
          variables: [
            { name: 'i', description: 'річна ставка складних відсотків (у вигляді десяткового дробу)' },
            { name: 'n', description: 'тривалість угоди в роках', default: 1 },
            { name: 'S', description: 'нарощена сума боргу (з процентами)', default: 1 },
            { name: 'P', description: 'початкова величина боргу (позики, кредиту, капіталу і т. п.)', default: 1 },
          ],
        },
        {
          formula: 'd=1-(P/S)**(1/n)',
          image: formula_3_14,
          variables: [
            { name: 'd', description: 'складна облікова ставка' },
            { name: 'n', description: 'тривалість угоди в роках', default: 1 },
            { name: 'S', description: 'нарощена сума боргу (з процентами)', default: 1 },
            { name: 'P', description: 'початкова величина боргу (позики, кредиту, капіталу і т. п.)', default: 1 },
          ],
        },
        {
          formula: 'j=((S/P)**(1/(m*n))-1)*m',
          image: formula_3_15,
          variables: [
            { name: 'j', description: 'річна ставка, за якою відсотки нараховуються m разів на рік' },
            { name: 'n', description: 'тривалість угоди в роках', default: 1 },
            { name: 'S', description: 'нарощена сума боргу (з процентами)', default: 1 },
            { name: 'P', description: 'початкова величина боргу (позики, кредиту, капіталу і т. п.)', default: 1 },
            { name: 'm', description: 'кількість нарахувань у році', default: 1 },
          ],
        },
        {
          formula: 'f=(1-(P/S)**(1/(m*n)))*m',
          image: formula_3_16,
          variables: [
            { name: 'f', description: 'номінальна річна облікова ставка' },
            { name: 'n', description: 'тривалість угоди в роках', default: 1 },
            { name: 'S', description: 'нарощена сума боргу (з процентами)', default: 1 },
            { name: 'P', description: 'початкова величина боргу (позики, кредиту, капіталу і т. п.)', default: 1 },
            { name: 'm', description: 'кількість нарахувань у році', default: 1 },
          ],
        },
      ],
    },
  ],
};

export default Unit3;