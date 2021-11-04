import formula_1_1 from "../../images/formulas/formula_1_1.jpg";
import formula_1_2 from "../../images/formulas/formula_1_2.jpg";
import formula_1_3 from "../../images/formulas/formula_1_3.jpg";
import formula_1_4 from "../../images/formulas/formula_1_4.jpg";
import formula_1_5 from "../../images/formulas/formula_1_5.jpg";
import formula_1_6 from "../../images/formulas/formula_1_6.jpg";
import formula_1_7 from "../../images/formulas/formula_1_7.jpg";
import formula_1_8 from "../../images/formulas/formula_1_8.jpg";
import formula_1_9 from "../../images/formulas/formula_1_9.jpg";
import formula_1_10 from "../../images/formulas/formula_1_10.jpg";
import formula_1_11 from "../../images/formulas/formula_1_11.jpg";
import formula_1_12 from "../../images/formulas/formula_1_12.jpg";
import formula_1_13 from "../../images/formulas/formula_1_13.jpg";
import formula_1_14 from "../../images/formulas/formula_1_14.jpg";
import formula_1_15 from "../../images/formulas/formula_1_15.jpg";

const Unit1 = {
  title: 'Прості відсотки',
  blocks: [
    {
      title: '1.1 Нарощення за простими відсотковими ставками',
      formulas: [
        {
          formula: 'I=n*P*i',
          image: formula_1_1,
          variables: [
            { name: 'I', description: 'отримані відсоткові гроші' },
            { name: 'n', description: 'термін угоди (в періодах)', default: 1 },
            { name: 'P', description: 'сума грошей, що даються в борг', default: 1 },
            { name: 'i', description: 'проста відсоткова ставка за один період', default: 0.01, min: 0, max: 1, step: 0.01 },
          ],
        },
        {
          formula: 'S=P+I',
          image: formula_1_2,
          variables: [
            { name: 'S', description: 'нарощена сума на момент закінчення угоди' },
            { name: 'I', description: 'отримані відсоткові гроші', default: 1 },
            { name: 'P', description: 'сума грошей, що даються в борг', default: 1 },
          ],
        },
        {
          formula: 'S=P*(1+n*i)',
          image: formula_1_3,
          variables: [
            { name: 'S', description: 'нарощена сума на момент закінчення угоди' },
            { name: 'P', description: 'сума грошей, що даються в борг', default: 1 },
            { name: 'n', description: 'термін угоди (в періодах)', default: 1 },
            { name: 'i', description: 'проста відсоткова ставка за один період', default: 0.01 },
          ],
        },
        {
          formula: 'S=P*(1+(t/K)*i)',
          image: formula_1_4,
          variables: [
            { name: 'S', description: 'нарощена сума на момент закінчення угоди' },
            { name: 'P', description: 'сума грошей, що даються в борг', default: 1 },
            { name: 't', description: 'кількість днів позики', default: 1 },
            { name: 'K', description: 'часова база нарахування відсотків (кількість днів у році)', default: 365 },
            { name: 'i', description: 'проста відсоткова ставка за один період', default: 0.01 },
          ],
        },
        {
          formula: 'S=P*(1+Σ(Μ(i,(__,t)=>(n[t]*__))))',
          image: formula_1_5,
          variables: [
            { name: 'S', description: 'нарощена сума на момент закінчення угоди' },
            { name: 'P', description: 'сума грошей, що даються в борг', default: 1 },
            { name: 'm', description: 'кількість періодів нарахування', default: 1 },
            { name: 'n', description: 'тривалість періоду t', sub: 't', length: 'm', default: 1 },
            { name: 'i', description: 'ставка простих відсотків в періоді t', sub: 't', length: 'm', default: 0.01, min: 0, max: 1, step: 0.01 },
          ],
        },
        {
          formula: 'S=P*Π(Μ(i,(__,t)=>(1+n[t]*__)))',
          image: formula_1_6,
          variables: [
            { name: 'S', description: 'нарощена сума на момент закінчення угоди' },
            { name: 'P', description: 'сума грошей, що даються в борг', default: 1 },
            { name: 'm', description: 'кількість періодів нарахування', default: 1 },
            { name: 'n', description: 'тривалість періоду t', sub: 't', length: 'm', default: 1 },
            { name: 'i', description: 'ставка простих відсотків в періоді t', sub: 't', length: 'm', default: 0.01 },
          ],
        },
        {
          formula: 'S=P*(1+n*i)**m',
          image: formula_1_7,
          variables: [
            { name: 'S', description: 'нарощена сума на момент закінчення угоди' },
            { name: 'P', description: 'сума грошей, що даються в борг', default: 1 },
            { name: 'm', description: 'кількість періодів нарахування', default: 1 },
            { name: 'n', description: 'тривалість періоду t', default: 1 },
            { name: 'i', description: 'ставка простих відсотків в періоді t', default: 0.01 },
          ],
        },
      ],
    },
    {
      title: '1.2. Нарахування простих відсотків на змінні в часі суми депозиту',
      formulas: [
        {
          formula: 'I=i*Σ(Μ(R,(__,j)=>(n[j]*__)))',
          image: formula_1_8,
          variables: [
            { name: 'I', description: 'отримані відсоткові гроші' },
            { name: 'i', description: 'ставка простих відсотків', default: 0.01 },
            { name: 'm', description: 'кількість змін залишків на рахунку', default: 1 },
            {
              name: 'R',
              description: 'залишок коштів на рахунку в момент часу j після чергового надходження чи списання коштів',
              sub: 'j',
              length: 'm',
              default: 1
            },
            { name: 'n', description: 'термін зберігання коштів до нової зміни залишків на рахунку', sub: 'j', length: 'm', default: 1 },
          ],
        },
        {
          formula: 'I=(i/K)*(Σ(Μ(R,(__,j)=>(t[j]*__)))/100)',
          image: formula_1_9,
          variables: [
            { name: 'I', description: 'отримані відсоткові гроші' },
            { name: 'i', description: 'ставка простих відсотків', default: 0.01 },
            { name: 'K', description: 'часова база нарахування відсотків', default: 365 },
            { name: 'm', description: 'кількість змін залишків на рахунку', default: 1 },
            {
              name: 'R',
              description: 'залишок коштів на рахунку в момент часу j після чергового надходження чи списання коштів',
              sub: 'j',
              length: 'm',
              default: 1
            },
            { name: 't', description: 'кількість днів між послідовними змінами залишків на рахунку', sub: 'j', length: 'm', default: 1 },
          ],
        },
      ],
    },
    {
      title: '1.3. Нарахування відсотків у користувацькому кредиті',
      formulas: [
        {
          formula: 'S=P*(1+n*i)',
          image: formula_1_3,
          variables: [
            { name: 'S', description: 'нарощена сума боргу' },
            { name: 'P', description: 'сума грошей, що даються в борг', default: 1 },
            { name: 'n', description: 'термін угоди (в періодах)', default: 1 },
            { name: 'i', description: 'проста відсоткова ставка за один період', default: 0.01 },
          ],
        },
        {
          formula: 'R=S/(n*m)',
          image: formula_1_10,
          variables: [
            { name: 'R', description: 'величина разової виплати за користування кредитом' },
            { name: 'S', description: 'нарощена сума боргу', default: 1 },
            { name: 'n', description: 'термін кредиту у роках', default: 1 },
            { name: 'm', description: 'кількість виплат у році.', default: 1 },
          ],
        },
      ],
    },
    {
      title: '1.4. Дисконтування та облік за простими відсотковими ставками',
      formulas: [
        {
          formula: 'D=S-P',
          image: formula_1_11,
          variables: [
            { name: 'D', description: 'дисконт величини S' },
            { name: 'S', description: 'нарощена сума боргу', default: 1 },
            { name: 'P', description: 'дисконтована вартість (теперішня сума боргу)', default: 1 },
          ],
        },
        {
          formula: 'P=S/(1+n*i)',
          image: formula_1_12,
          variables: [
            { name: 'P', description: 'теперішня сума боргу' },
            { name: 'S', description: 'кінцева сума боргу', default: 1 },
            { name: 'n', description: 'термін позики', default: 1 },
            { name: 'i', description: 'проста відсоткова ставка', default: 0.01 },
          ],
        },
        {
          formula: 'P=S*(1-n*d)',
          image: formula_1_13,
          variables: [
            { name: 'P', description: 'теперішня сума боргу' },
            { name: 'S', description: 'кінцева сума боргу', default: 1 },
            { name: 'n', description: 'термін позики', default: 1 },
            { name: 'd', description: 'проста облікова ставка', default: 1 },
          ],
        },
        {
          formula: 'd=(S-P)/(n*S)',
          image: formula_1_14,
          variables: [
            { name: 'd', description: 'проста облікова ставка' },
            { name: 'S', description: 'кінцева сума боргу', default: 1 },
            { name: 'P', description: 'теперішня сума боргу', default: 1 },
            { name: 'n', description: 'термін позики', default: 1 },
          ],
        },
        {
          formula: 'S=P/(1-n*d)',
          image: formula_1_15,
          variables: [
            { name: 'S', description: 'кінцева сума боргу' },
            { name: 'P', description: 'теперішня сума боргу', default: 1 },
            { name: 'n', description: 'термін позики', default: 1 },
            { name: 'd', description: 'проста облікова ставка', default: 0.5 },
          ],
        },
      ],
    },
  ],
};

export default Unit1;