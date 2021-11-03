import formula_5_1 from "../../images/formulas/formula_5_1.png";
import formula_5_2 from "../../images/formulas/formula_5_2.png";
import formula_5_3 from "../../images/formulas/formula_5_3.png";
import formula_5_4 from "../../images/formulas/formula_5_4.png";
import formula_5_5 from "../../images/formulas/formula_5_5.png";
import formula_5_6 from "../../images/formulas/formula_5_6.png";
import formula_5_7 from "../../images/formulas/formula_5_7.png";
import formula_5_8 from "../../images/formulas/formula_5_8.png";
import formula_5_9 from "../../images/formulas/formula_5_9.png";
import formula_5_10 from "../../images/formulas/formula_5_10.png";
import formula_5_11 from "../../images/formulas/formula_5_11.png";
import formula_5_12 from "../../images/formulas/formula_5_12.png";
import formula_5_13 from "../../images/formulas/formula_5_13.png";
import formula_5_14 from "../../images/formulas/formula_5_14.png";
import formula_5_15 from "../../images/formulas/formula_5_15.png";
import formula_5_16 from "../../images/formulas/formula_5_16.png";
import formula_5_17 from "../../images/formulas/formula_5_17.png";
import formula_5_18 from "../../images/formulas/formula_5_18.png";

const Unit5 = {
  title: "Еквівалентність відсоткових ставок та зміна умов фінансових угод",
  blocks: [
    {
      title:
        "5.1 Еквівалентність простої ставки відсотків та простої облікової ставки",
      formulas: [
        {
          formula: "i=(d*0.01)/(1-n*d*0.01)",
          image: formula_5_1,
          variables: [
            { name: "i", description: "проста відсоткова ставка," },
            { name: "d", description: "проста облікова ставка", default: 0.01 },
            { name: "n", description: "термін угоди(в роках)" },
          ],
        },
        {
          formula: "d=i/(1+n*i*0.01)",
          image: formula_5_2,
          variables: [
            { name: "d", description: "проста облікова ставка" },
            {
              name: "i",
              description: "проста відсоткова ставка",
              default: 0.01,
            },
            { name: "n", description: "термін угоди(в роках)" },
          ],
        },
        {
          formula: "i=(365*d*0.01)/(360-t*d*0.01)",
          image: formula_5_3,
          variables: [
            { name: "i", description: "проста відсоткова ставка" },
            { name: "d", description: "проста облікова ставка", default: 0.01 },
            { name: "t", description: "термін угоди(у днях)" },
          ],
        },
        {
          formula: "d=(360*i*0.01)/(360+t*i*0.01)",
          image: formula_5_4,
          variables: [
            {
              name: "i",
              description: "проста відсоткова ставка",
              default: 0.01,
            },
            { name: "d", description: "проста облікова ставка" },
            { name: "t", description: "термін угоди(у днях)" },
          ],
        },
      ],
    },
    {
      title: "5.2 Еквівалентність простої і складної відсоткових ставок",
      formulas: [
        {
          formula: "i=(((1+j*0.01)**n)-1)/n",
          image: formula_5_5,
          variables: [
            {
              name: "i",
              description: "проста відсоткова ставка,",
              displayName: "i",
              sub: "n",
            },
            {
              name: "j",
              description: "складна відсоткова ставка",
              displayName: "i",
              sub: "c",
              default: 0.01,
            },
            { name: "n", description: "термін угоди(в роках)" },
          ],
        },
        {
          formula: "j=((1+i*n*0.01)**(1/n))-1",
          image: formula_5_6,
          variables: [
            {
              name: "j",
              description: "складна відсоткова ставка",
              displayName: "i",
              sub: "c",
            },
            {
              name: "i",
              description: "проста відсоткова ставка,",
              displayName: "i",
              sub: "n",
              default: 0.01,
            },
            { name: "n", description: "термін угоди(в роках)" },
          ],
        },
      ],
    },
    {
      title: "5.3 Еквівалентність простої облікової і складної ставки відсотка",
      formulas: [
        {
          formula: "i=((1-n*d*0.01)**(-(1/n)))-1",
          image: formula_5_7,
          variables: [
            { name: "i", description: "проста облікова ставка" },
            {
              name: "d",
              description: "складна облікова ставка",
              default: 0.01,
            },
            { name: "n", description: "термін угоди(в роках)" },
          ],
        },
        {
          formula: "d=(1-((1+i*0.01)**(-n)))/n",
          image: formula_5_8,
          variables: [
            {
              name: "i",
              description: "проста відсоткова ставка",
              default: 0.01,
            },
            { name: "d", description: "проста облікова ставка" },
            { name: "n", description: "термін угоди(в роках)" },
          ],
        },
        {
          formula: "i=((1-(t*d*0.01)/360)**(-(365/t)))-1",
          image: formula_5_9,
          variables: [
            { name: "i", description: "проста облікова ставка" },
            {
              name: "d",
              description: "складна облікова ставка",
              default: 0.01,
            },
            { name: "t", description: "термін угоди(у днях)" },
          ],
        },
        {
          formula: "d=(360/t)*(1-(i*0.01+1)**(-(t/365)))",
          image: formula_5_10,
          variables: [
            {
              name: "i",
              description: "проста відсоткова ставка",
              default: 0.01,
            },
            { name: "d", description: "проста облікова ставка" },
            { name: "t", description: "термін угоди(у днях)" },
          ],
        },
      ],
    },
    {
      title: "5.4 Еквівалентність складної облікової та відсоткової ставок",
      formulas: [
        {
          formula: "i=d/(1-d)",
          image: formula_5_11,
          variables: [
            { name: "i", description: "складна облікова ставка" },
            {
              name: "d",
              description: "складна облікова ставка",
              default: 0.01,
            },
          ],
        },
        {
          formula: "d=i/(1+i)",
          image: formula_5_12,
          variables: [
            { name: "i", description: "проста облікова ставка", default: 0.01 },
            { name: "d", description: "складна облікова ставка" },
          ],
        },
      ],
    },
    {
      title: "5.5 Еквівалентність складної облікової та номінальної ставок",
      formulas: [
        {
          formula: "j=(((1-d)**(1/m))-1)*m",
          image: formula_5_14,
          variables: [
            { name: "j", description: "номінальна ставка" },
            {
              name: "d",
              description: "складна облікова ставка",
              default: 0.01,
            },
            {
              name: "m",
              description: "скільки разів на рік нараховуються відсотки",
            },
          ],
        },
        {
          formula: "d=1-((1+(j/m))**m)",
          image: formula_5_13,
          variables: [
            { name: "j", description: "номінальна ставка", default: 0.01 },
            { name: "d", description: "складна облікова ставка" },
            {
              name: "m",
              description: "скільки разів на рік нараховуються відсотки",
            },
          ],
        },
      ],
    },
    {
      title: "5.6 Визначення розміру консолідованого платежу",
      formulas: [
        {
          formula:
            "s_0 = Σ(Μ(S2,(s2,j)=>s2*(1+(t2[j]*i/365)))) + Σ(Μ(S1,(s1,j)=>s1/(1+(t1[j]*i/365))))",
          image: formula_5_15,
          variables: [
            {
              name: "s_0",
              displayName: "S",
              sup: "0",
              description: "Розмір консолідованого платежу",
            },
            {
              name: "i",
              description: "Прості відсоткові ставки",
              default: 0.01,
            },
            {
              name: "k",
              description: "Кількість платежів,що передаються перед n",
              default: 1,
            },
            {
              name: "S2",
              sup: "k",
              displayName: "",
              description: "Платежі,що передаються перед n",
              length: "k",
              default: 1,
            },
            {
              name: "t2",
              sup: "k",
              description: "На скільки відповідний платіж потрібно наростити",
              length: "k",
              default: 1,
            },
            {
              name: "a",
              description: "Кількість платежів з терміном після n",
              default: 1,
            },
            {
              name: "S1",
              sup: "i",
              description: "Платежі з терміном після n",
              length: "a",
              default: 1,
            },
            {
              name: "t1",
              sup: "i",
              description: "На скільки відповідний платіж дисконтуваний",
              length: "a",
              default: 1,
            },
          ],
        },
        {
          formula:
            "s_0 = Σ(Μ(S2,(s2,j)=>s2*((1+i)**(t2[j]/365)))) + Σ(Μ(S1,(s1,j)=>s1/((1+i)**(t1[j]/365))))",
          image: formula_5_16,
          variables: [
            {
              name: "s_0",
              displayName: "S",
              sup: "0",
              description: "Розмір консолідованого платежу",
            },
            {
              name: "i",
              description: "Прості відсоткові ставки",
              default: 0.01,
            },
            {
              name: "b",
              description: "Кількість платежів,що передаються перед n",
              default: 1,
            },
            {
              name: "S2",
              sup: "i",
              description: "Платежі,що передаються перед n",
              length: "b",
              default: 1,
            },
            {
              name: "t2",
              sup: "i",
              description: "На скільки відповідний платіж потрібно наростити",
              length: "b",
              default: 1,
            },
            {
              name: "a",
              description: "Кількість платежів з терміном після n",
              default: 1,
            },
            {
              name: "S1",
              sup: "i",
              description: "Платежі з терміном після n",
              length: "a",
              default: 1,
            },
            {
              name: "t1",
              sup: "i",
              description: "На скільки відповідний платіж дисконтуваний",
              length: "a",
              default: 1,
            },
          ],
        },
      ],
    },
    {
      title: "5.7 Визначення терміну консолідованого платежу",
      formulas: [
        {
          formula: "n_0 = ((S_0/(Σ(Μ(S1,(s1,j)=>s1/(1+(n[j]*i/365))))))-1)/i",
          image: formula_5_17,
          variables: [
            {
              name: "n_0",
              displayName: "n",
              sup: "0",
              description: "Термін консолідованого платежу",
            },
            {
              name: "S_0",
              displayName: "S",
              sup: "0",
              description: "Розмір консолідованого платежу",
            },
            {
              name: "i",
              description: "Прості відсоткові ставки",
              default: 0.01,
            },
            {
              name: "k",
              description: "Кількість платежів,що передаються перед n",
              default: 1,
            },
            {
              name: "S1",
              sup: "k",
              description: "Платежі,що передаються перед n",
              length: "k",
              default: 1,
            },
            {
              name: "n",
              sup: "k",
              description: "На скільки відповідний платіж потрібно наростити",
              length: "k",
              default: 1,
            },
          ],
        },
        {
          formula:
            "n_0 = Math.log(S_0/(Σ(Μ(S1,(s1,j)=>s1/((1+i)**n[j])))))/Math.log(1+i)",
          image: formula_5_18,
          variables: [
            {
              name: "n_0",
              displayName: "n",
              sup: "0",
              description: "Термін консолідованого платежу",
            },
            {
              name: "S_0",
              displayName: "S",
              sup: "0",
              description: "Розмір консолідованого платежу",
            },
            {
              name: "i",
              description: "Прості відсоткові ставки",
              default: 0.01,
            },
            {
              name: "k",
              description: "Кількість платежів,що передаються перед n",
              default: 1,
            },
            {
              name: "S1",
              sup: "k",
              description: "Платежі,що передаються перед n",
              length: "k",
              default: 1,
            },
            {
              name: "n",
              sup: "k",
              description: "На скільки відповідний платіж потрібно наростити",
              length: "k",
              default: 1,
            },
          ],
        },
      ],
    },
  ],
};

export default Unit5;
