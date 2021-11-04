import formula_2_1 from "../../images/formulas/formula_2_1.jpg";
import formula_2_2 from "../../images/formulas/formula_2_2.jpg";
import formula_2_3 from "../../images/formulas/formula_2_3.jpg";
import formula_2_4 from "../../images/formulas/formula_2_4.jpg";
import formula_2_5 from "../../images/formulas/formula_2_5.jpg";
import formula_2_6 from "../../images/formulas/formula_2_6.jpg";
import formula_2_7 from "../../images/formulas/formula_2_7.jpg";
import formula_2_8 from "../../images/formulas/formula_2_8.jpg";
import formula_2_9 from "../../images/formulas/formula_2_9.jpg";
import formula_2_10 from "../../images/formulas/formula_2_10.jpg";
import formula_2_11 from "../../images/formulas/formula_2_11.jpg";
import formula_2_12 from "../../images/formulas/formula_2_12.jpg";
import formula_2_13 from "../../images/formulas/formula_2_13.jpg";
import formula_2_14 from "../../images/formulas/formula_2_14.jpg";
import formula_2_15 from "../../images/formulas/formula_2_15.jpg";
import formula_2_16 from "../../images/formulas/formula_2_16.jpg";
import formula_2_17 from "../../images/formulas/formula_2_17.jpg";
import formula_2_18 from "../../images/formulas/formula_2_18.jpg";
import formula_2_19 from "../../images/formulas/formula_2_19.jpg";

const Unit2 = {
  title: 'Нарощення та дисконтування за складними відсотковими ставками',
  blocks: [
    {
      title: '2.1. Нарощення за складними відсотковими ставками',
      formulas: [
        {
          formula: 'S=P*(1+i)**n',
          image: formula_2_1,
          variables: [
            { name: 'S', description: 'нарощена сума (з процентами) на кінець терміну' },
            { name: 'P', description: 'початкова величина боргу (позики, кредиту, капіталу і т. п.)', default: 1 },
            { name: 'n', description: 'кількість років нарощення', default: 1 },
            { name: 'i', description: 'річна ставка складних відсотків (у вигляді десяткового дробу)', default: 0.01, max: 1, step: 0.01 },
          ],
        },
        {
          formula: 'I=S-P',
          image: formula_2_2,
          variables: [
            { name: 'I', description: 'проценти за весь період нарощення за складними відсотками' },
            { name: 'P', description: 'початкова величина боргу (позики, кредиту, капіталу і т. п.)', default: 1 },
            { name: 'S', description: 'нарощена сума (з процентами) на кінець терміну', default: 1 },
          ],
        },
        {
          formula: 'S=P*Π(Μ(i,(__,j)=>((1+__)**n[j])))',
          image: formula_2_3,
          variables: [ 
            { name: 'S', description: 'нарощена сума (з процентами) на кінець терміну' },
            { name: 'P', description: 'початкова величина боргу (позики, кредиту, капіталу і т. п.)', default: 1 },
            { name: 'm', description: 'кількість періодів нарахування', default: 1 },
            { name: 'n', description: 'тривалість періоду j', sub: 'j', length: 'm', default: 1 },
            { name: 'i', description: 'ставка простих відсотків в періоді j', sub: 'j', length: 'm', default: 0.01, max: 1, step: 0.01 },
          ],
        },
        {
          formula: 'S=P*(1+i)**c*(1+d*i)', 
          image: formula_2_4,
          variables: [
            { name: 'S', description: 'нарощена сума (з процентами) на кінець терміну' },
            { name: 'P', description: 'початкова величина боргу (позики, кредиту, капіталу і т. п.)', default: 1 },
            { name: 'i', description: 'річна ставка складних відсотків (у вигляді десяткового дробу)', default: 0.01, max: 1, step: 0.01 },
            { name: 'c', description: 'ціла частина років, впродовж яких нараховуються складні відсотки', default: 1 },
            { name: 'd', description: 'дробова частина для нарахування простих відсотків (c + d = n)', default: 0.01, max: 1, step: 0.01 },
          ],
        },
      ],
    },
    {
      title: '2.1.1. Номінальна ставка відсотка',
      formulas: [
        {
          formula: 'S=P*(1+j/m)**(m*n)',
          image: formula_2_5,
          variables: [
            { name: 'S', description: 'нарощена сума (з процентами) на кінець терміну' },
            { name: 'P', description: 'початкова величина боргу (позики, кредиту, капіталу і т. п.)', default: 1 },
            { name: 'j', description: 'річна ставка, за якою відсотки нараховуються m разів на рік', default: 0.01, max: 1, step: 0.01 },
            { name: 'm', description: 'кількість нарахувань у році', default: 1 },
            { name: 'n', description: 'тривалість угоди в роках', default: 1 },
          ],
        }
      ]
    },
    {
      title: '2.1.2. Ефективна відсоткова ставка',
      formulas: [
        {
          formula: 'i=(1+j/m)**m-1',
          image: formula_2_6,
          variables: [
            { name: 'i', description: 'ефективна ставка, що відповідає номінальній ставці j' },
            { name: 'j', description: 'річна ставка, за якою відсотки нараховуються m разів на рік', default: 0.01, max: 1, step: 0.01 },
            { name: 'm', description: 'разове нарахування за ставкою j/m', default: 1 },
          ],
        },
        {
          formula: 'j=m*((1+i)**(1/m)-1)',
          image: formula_2_7,
          variables: [
            { name: 'j', description: 'річна ставка, за якою відсотки нараховуються m разів на рік' },
            { name: 'i', description: 'ефективна ставка, що відповідає номінальній ставці j', default: 0.01, max: 1, step: 0.01 },
            { name: 'm', description: 'разове нарахування за ставкою j/m', default: 1 },
          ],
        },
        {
          formula: 'j2m2=m_2*((1+j1m1/m_1)**(m_1/m_2)-1)',
          image: formula_2_8,
          variables: [
            { name: 'j2m2', description: 'річна ставка 2, за якою відсотки нараховуються m2 разів на рік', displayName: 'j', sub: '2', sup: '(m2)', default: 0.01, max: 1, step: 0.01 },
            { name: 'j1m1', description: 'річна ставка 1, за якою відсотки нараховуються m1 разів на рік', displayName: 'j', sub: '1', sup: '(m1)', default: 0.01, max: 1, step: 0.01 },
            { name: 'm_1', description: 'm1 кількість нарахувань в році', displayName: 'm', sub: '1', default: 1 },
            { name: 'm_2', description: 'm2 кількість нарахувань в році', displayName: 'm', sub: '2', default: 1 },
          ],
        }
      ]
    },
    {
      title: '2.2. Математичне дисконтування та облік за складними ставками відсотка \n' +
      '2.2.1. Математичне дисконтування за складною відсотковою ставкою',
      formulas: [
        {
          formula: 'P=S/(1+i)**n',
          image: formula_2_9,
          variables: [
            { name: 'P', description: 'початкова величина боргу (позики, кредиту, капіталу і т. п.)' },
            { name: 'S', description: 'нарощена сума (з процентами) на кінець терміну', default: 1 },
            { name: 'n', description: 'кількість років нарощення', default: 1 },
            { name: 'i', description: 'річна ставка складних відсотків (у вигляді десяткового дробу)', default: 0.01, max: 1, step: 0.01 },
          ],
        },
        {
          formula: 'P=S/(1+j/m)**m*n',
          image: formula_2_10,
          variables: [
            { name: 'P', description: 'початкова величина боргу (позики, кредиту, капіталу і т. п.)' },
            { name: 'S', description: 'нарощена сума (з процентами) на кінець терміну', default: 1 },
            { name: 'n', description: 'кількість років', default: 1 },
            { name: 'm', description: 'кількість нарахувань у році', default: 1 },
            { name: 'j', description: 'номінальна відсоткова ставка', default: 0.01, max: 1, step: 0.01 },
          ],
        },
        {
          formula: 'v=1/(1+j/m)**(m*n)',
          image: formula_2_11,
          variables: [
            { name: 'v', description: 'дисконтний множник', sup: 'nm' },
            { name: 'n', description: 'кількість років', default: 1 },
            { name: 'm', description: 'кількість нарахувань у році', default: 1 },
            { name: 'j', description: 'річна ставка складних відсотків (у вигляді десяткового дробу)', default: 0.01, max: 1, step: 0.01 },
          ],
        },
        {
          formula: 'D=S-P',
          image: formula_2_12,
          variables: [
            { name: 'D', description: 'дисконт суми' },
            { name: 'P', description: 'початкова величина боргу (позики, кредиту, капіталу і т. п.)', default: 1 },
            { name: 'S', description: 'нарощена сума (з процентами) на кінець терміну', default: 1 },
          ],
        },
        {
          formula: 'D=S*(1-v)',
          image: formula_2_13,
          variables: [
            { name: 'D', description: 'дисконт суми' },
            { name: 'S', description: 'нарощена сума (з процентами) на кінець терміну', default: 1 },
            { name: 'v', description: 'дисконтний множник', sup: 'mn' },

          ],
        }
      ]
    },
    {
      title: '2.2.2. Облік за складною обліковою ставкою ',
      formulas: [
        {
          formula: 'P=S*(1-d)**n',
          image: formula_2_14,
          variables: [
            { name: 'P', description: 'сучасна (теперішня) сума боргу' },
            { name: 'S', description: 'майбутня сума боргу', default: 1 },
            { name: 'd', description: 'складна облікова ставка', default: 0.01, max: 1, step: 0.01 },
            { name: 'n', description: 'тривалість угоди в роках', default: 1 },
          ],
        },
        {
          formula: 'D=S-P',
          image: formula_2_12,
          variables: [
            { name: 'D', description: 'дисконт суми' },
            { name: 'P', description: 'початкова величина боргу (позики, кредиту, капіталу і т. п.)', default: 1 },
            { name: 'S', description: 'нарощена сума (з процентами) на кінець терміну', default: 1 },
          ],
        },
        {
          formula: 'P=S/(1-f/m)**(m*n)',
          image: formula_2_15,
          variables: [
            { name: 'P', description: 'сучасна сума боргу' },
            { name: 'S', description: 'майбутня сума боргу', default: 1 },
            { name: 'm', description: 'кількість нарахувань у році', default: 1 },
            { name: 'n', description: 'тривалість угоди в роках', default: 1 },
            { name: 'f', description: 'номінальна річна облікова ставка', default: 0.01, max: 1, step: 0.01 },
          ],
        },
        {
          formula: 'd=1-(1-f/m)**m',
          image: formula_2_16,
          variables: [
            { name: 'd', description: 'ефективна облікова ставка' },
            { name: 'f', description: 'номінальна річна облікова ставка', default: 0.01, max: 1, step: 0.01 },
            { name: 'm', description: 'кількість нарахувань у році', default: 1 },
          ],
        },
        {
          formula: 'f=m*(1-((1-d) ** (1/m)))',
          image: formula_2_17,
          variables: [
            { name: 'f', description: 'номінальна річна облікова ставка' },
            { name: 'd', description: 'ефективна облікова ставка', default: 0.01, max: 1, step: 0.01 },
            { name: 'm', description: 'кількість нарахувань у році', default: 1 },
          ],
        },
        {
          formula: 'S=P/(1-d)**n',
          image: formula_2_18,
          variables: [
            { name: 'S', description: 'нарощена сума (з процентами) на кінець терміну'},
            { name: 'P', description: 'початкова величина боргу (позики, кредиту, капіталу і т. п.)', default: 1 },
            { name: 'd', description: 'складна облікова ставка', default: 0.01, max: 1, step: 0.01 },
            { name: 'n', description: 'тривалість угоди в роках', default: 1 },
          ],
        },
        {
          formula: 'S=P/(1-f/m)**(m*n)',
          image: formula_2_19,
          variables: [
            { name: 'S', description: 'нарощена сума (з процентами) на кінець терміну'},
            { name: 'P', description: 'початкова величина боргу (позики, кредиту, капіталу і т. п.)', default: 1 },
            { name: 'f', description: 'номінальна річна облікова ставка' },
            { name: 'm', description: 'кількість нарахувань у році', default: 1 },
            { name: 'n', description: 'тривалість угоди в роках', default: 1 },
          ],
        },
      ]
    },
  ],
};

export default Unit2;