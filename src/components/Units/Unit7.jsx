import React from "react";

import formula_7_1 from "../../images/formulas/formula_7_1.jpg";
import formula_7_2 from "../../images/formulas/formula_7_2.jpg";
import formula_7_3 from "../../images/formulas/formula_7_3.jpg";
import formula_7_4 from "../../images/formulas/formula_7_4.jpg";
import formula_7_5 from "../../images/formulas/formula_7_5.jpg";
import formula_7_6 from "../../images/formulas/formula_7_6.jpg";
import formula_7_6_1 from "../../images/formulas/formula_7_6_1.jpg";
import formula_7_7 from "../../images/formulas/formula_7_7.jpg";
import formula_7_8 from "../../images/formulas/formula_7_8.jpg";
import formula_7_9 from "../../images/formulas/formula_7_9.jpg";
import formula_7_10 from "../../images/formulas/formula_7_10.jpg";
import formula_7_11 from "../../images/formulas/formula_7_11.jpg";
import formula_7_12 from "../../images/formulas/formula_7_12.jpg";
import formula_7_13 from "../../images/formulas/formula_7_13.jpg";
import formula_7_14_1 from "../../images/formulas/formula_7_14_1.jpg";
import formula_7_15 from "../../images/formulas/formula_7_15.jpg";
import formula_7_16 from "../../images/formulas/formula_7_16.jpg";
import formula_7_17 from "../../images/formulas/formula_7_17.jpg";
import formula_7_18 from "../../images/formulas/formula_7_18.jpg";
import formula_7_20 from "../../images/formulas/formula_7_20.jpg";
import formula_7_21 from "../../images/formulas/formula_7_21.jpg";
import formula_7_22 from "../../images/formulas/formula_7_22.jpg";
import formula_7_23 from "../../images/formulas/formula_7_23.jpg";
import formula_7_24 from "../../images/formulas/formula_7_24.jpg";
import formula_7_25 from "../../images/formulas/formula_7_25.jpg";
import formula_7_26 from "../../images/formulas/formula_7_26.jpg";
import formula_7_27 from "../../images/formulas/formula_7_27.jpg";
import formula_7_28 from "../../images/formulas/formula_7_28.jpg";

const Unit7 = {
  title: 'Планування погашення заборгованності',
  blocks: [
    {
      title: '7.1. Створення фонду погашення заборгованості',
      formulas: [
        {
          formula: 'Y=D*g+R',
          image: formula_7_1,
          variables: [
            { name: 'Y', description: 'термінова виплата' },
            { name: 'D', description: 'величина заборгованості', default: 1 },
            { name: 'g', description: 'відсоткова ставка за позикою', default: 0.01, max: 1, step: 0.01 },
            { name: 'R', description: 'витрати на погашення основної частини боргу', default: 1 },
          ],
        },
        {
          formula: 'R=D/s_N_i',
          image: formula_7_2,
          variables: [
            { name: 'R', description: 'витрати на погашення основної частини боргу' },
            { name: 'D', description: 'величина заборгованості', default: 1 },
            { name: 's_N_i', displayName: 's', sub: 'N,i', description: 'коефіцієнт нарощення постійної ренти з терміном N', default: 1 },
          ],
        },
        {
          formula: 'Y=D*g+D/s_N_i',
          image: formula_7_3,
          variables: [
            { name: 'Y', description: 'термінова виплата' },
            { name: 'D', description: 'величина заборгованості', default: 1 },
            { name: 'g', description: 'відсоткова ставка за позикою', default: 0.01, max: 1, step: 0.01 },
            { name: 's_N_i', displayName: 's', sub: 'N,i', description: 'коефіцієнт нарощення постійної ренти з терміном N', default: 1 },
          ],
        },
        {
          formula: 'Y=(D*(1+g)**N)/s_n_i',
          image: formula_7_4,
          variables: [
            { name: 'Y', description: 'термінова виплата' },
            { name: 'D', description: 'величина заборгованості', default: 1 },
            { name: 'g', description: 'відсоткова ставка за позикою', default: 0.01, max: 1, step: 0.01 },
            { name: 'N', description: 'тривалість позики', default: 1 },
            { name: 's_n_i', displayName: 's', sub: 'N,i', description: 'коефіцієнт нарощення постійної ренти з терміном N', default: 1 },
          ],
        },
        {
          formula: 'S_t1=St*(1+i)+R',
          image: formula_7_5,
          variables: [
            { name: 'S_t1', displayName: 'S', sub: 't+1', description: 'накопичена у фонді сума за t+1 років' },
            { name: 'St', displayName: 'S', sub: 't', description: 'накопичена у фонді сума за t років', default: 1 },
            { name: 'i', description: 'відсоткова ставка за певний період (напрклад річна)', default: 0.01, max: 1, step: 0.01 },
            { name: 'R', description: 'витрати на погашення основної частини боргу', default: 1 },
          ],
        },
        {
          formula: 'Rt=R_+a*(t-1)',
          image: formula_7_6_1,
          variables: [
            { name: 'Rt', displayName: 'R', sub: 't', description: 'витрати на погашененя основної частини боргу на кінець періоду t' },
            { name: 'R_', displayName: 'R', description: 'витрати на погашення основної частини боргу', default: 1 },
            { name: 'a', description: 'різниця арифметичної прогресії', default: 1 },
            { name: 't', description: 'кількість періодів', default: 1 },
          ],
        },
        {
          formula: 'Yt=D*g+Rt',
          image: formula_7_6,
          variables: [
            { name: 'Yt', displayName: 'Y', sub: 't', description: 'термінова виплата на кінець періоду t' },
            { name: 'D', description: 'величина заборгованості', default: 1 },
            { name: 'g', description: 'відсоткова ставка за позикою', default: 0.01, max: 1, step: 0.01 },
            { name: 'Rt', displayName: 'R', sub: 't', description: 'витрати на погашененя основної частини боргу на кінець періоду t', default: 1 },
          ],
        },
        {
          formula: 'R=(1/s_n_i)*(D-(a*(((1+i_)**N-(1+N*i_))/i_**2)))',
          image: formula_7_7,
          variables: [
            { name: 'R', description: 'витрати на погашення основної частини боргу' },
            { name: 's_n_i', displayName: 's', sub: 'N,i', description: 'коефіцієнт нарощення постійної ренти з терміном N', default: 1 },
            { name: 'D', description: 'величина заборгованості', default: 1 },
            { name: 'a', description: 'різниця арифметичної прогресії', default: 1 },
            { name: 'i_', displayName: 'i', description: 'відсоткова ставка за певний період (напрклад річна)', default: 0.01, max: 1, step: 0.01 },
            { name: 'N', description: 'тривалість позики', default: 1 },
          ],
        },
      ],
    },
    {
      title: '7.2. Амортизація заборгованості (погашення заборгованості в розстрочку)',
      formulas: [
        {
          formula: 'd=D/n',
          image: formula_7_8,
          variables: [
            { name: 'd', description: 'щорічні виплати на погашення заборгованості' },
            { name: 'D', description: 'величина заборгованості', default: 1 },
            { name: 'n', description: 'кількість періодів', default: 1 },
          ],
        },
        {
          formula: 'Yt=Dt_1*g+d',
          image: formula_7_9,
          variables: [
            { name: 'Yt', displayName: 'Y', sub: 't', description: 'термінова виплата на кінець періоду t' },
            { name: 'Dt_1', displayName: 'D', sub: 't-1', description: 'залишок боргу на кінець періоду t-1', default: 1 },
            { name: 'g', description: 'відсоткова ставка за позикою', default: 0.01, max: 1, step: 0.01 },
            { name: 'd', description: 'щорічні виплати на погашення заборгованості', default: 1 },
          ],
        },
        {
          formula: 'D_t=Dt_1*((n-1)/n)',
          image: formula_7_10,
          variables: [
            { name: 'D_t', displayName: 'D', sub: 't', description: 'залишок боргу на кінець періоду t' },
            { name: 'Dt_1', displayName: 'D', sub: 't-1', description: 'залишок боргу на кінець періоду t-1', default: 1 },
            { name: 'n', description: 'кількість періодів', default: 1 },
          ],
        },
        {
          formula: 'Yt=((Dt_1*g)/p)+(D0/p*n)',
          image: formula_7_11,
          variables: [
            { name: 'Yt', displayName: 'Y', sub: 't', description: 'термінова виплата на кінець періоду t' },
            { name: 'Dt_1', displayName: 'D', sub: 't-1', description: 'залишок боргу на кінець періоду t-1', default: 1 },
            { name: 'g', description: 'відсоткова ставка за позикою', default: 0.01, max: 1, step: 0.01 },
            { name: 'p', description: 'кількість виплат в періоді t', default: 1 },
            { name: 'D0', displayName: 'D', sub: '0', description: 'величина заборгованості', default: 1 },
            { name: 'n', description: 'кількість періодів', default: 1 },
          ],
        },
        {
          formula: 'D_t=Dt_1*(((p*n)-1)/(p*n))',
          image: formula_7_12,
          variables: [
            { name: 'D_t', displayName: 'D', sub: 't', description: 'залишок боргу на кінець періоду t' },
            { name: 'Dt_1', displayName: 'D', sub: 't-1', description: 'залишок боргу на кінець періоду t-1', default: 1 },
            { name: 'p', description: 'кількість виплат в періоді t', default: 1 },
            { name: 'n', description: 'кількість періодів', default: 1 },
          ],
        },
        {
          formula: 'Y=Dt*g+Rt',
          image: formula_7_13,
          variables: [
            { name: 'Y', description: 'термінова виплата' },
            { name: 'Dt', displayName: 'D', sub: 't', description: 'залишок боргу на кінець періоду t', default: 1 },
            { name: 'g', description: 'відсоткова ставка за позикою', default: 0.01, max: 1, step: 0.01 },
            { name: 'Rt', displayName: 'R', sub: 't', description: 'витрати на погашененя основної частини боргу на кінець періоду t', default: 1 },
          ],
        },
        {
          formula: 'R=D/((1-((1+g)**n))/g)',
          image: formula_7_14_1,
          variables: [
            { name: 'Y', description: 'термінова виплата' },
            { name: 'D', description: 'величина заборгованості', default: 1 },
            { name: 'g', description: 'відсоткова ставка за позикою', default: 0.01, max: 1, step: 0.01 },
            { name: 'n', description: 'термін позики', default: 1 },
          ],
        },
        {
          formula: 'v=1/(1+g)',
          image: formula_7_15,
          variables: [
            { name: 'v', description: 'дисконтний множник за ставкою g' },
            { name: 'g', description: 'відсоткова ставка за позикою', default: 0.01, max: 1, step: 0.01 },
          ],
        },
        {
          formula: 'Rt=Y*(v**(n-t_+1))',
          image: formula_7_16,
          variables: [
            { name: 'Rt', displayName: 'R', sub: 't', description: 'витрати на погашененя основної частини боргу на кінець періоду t' },
            { name: 'Y', description: 'витрати на погашення основної частини боргу', default: 1 },
            { name: 'v', description: 'дисконтний множник', default: 1 },
            { name: 'n', description: 'термін позики', default: 1 },
            { name: 't_', displayName: 't', description: 'номер періоду', default: 1 },
          ],
        },
      ],
    },
    {
      title: '7.3. Пільгові позики та кредити',
      formulas: [
        {
          formula: 'W=D-G',
          image: formula_7_17,
          variables: [
            {
              name: 'W',
              description: 'абсолютний грант-елемент (різниця між номінальною вартістю позики та сучасною вартістю погашувальних платежів, розрахованою за ринковою відсотковою ставкою)',
            },
            { name: 'D', description: 'розмір позики', default: 1 },
            { name: 'G', description: 'сучасна вартість погашувальних платежів', default: 1 },
          ],
        },
        {
          formula: 'w=1-(G/D)',
          image: formula_7_18,
          variables: [
            { name: 'w', description: 'відносний грант-елемент' },
            { name: 'G', description: 'сучасна вартість погашувальних платежів', default: 1 },
            { name: 'D', description: 'розмір позики', default: 1 },
          ],
        },
        {
          formula: 'W=D*(1-(a_n_i/a_n_g))',
          image: formula_7_20,
          variables: [
            { name: 'W', description: 'абсолютний грант-елемент' },
            { name: 'D', description: 'розмір позики', default: 1 },
            {
              name: 'a_n_i',
              displayName: 'a',
              sub: 'n,i',
              description: (
                <span>a<sub>n,g</sub> - коефіцієнти приведення постійних річних рент постнумерандо для відповідних відсоткових ставок i {'<'} g</span>
              ),
              default: 1 },
            { name: 'a_n_g', displayName: 'a', sub: 'n,g', default: 1 },
          ],
        },
        {
          formula: 'w=1-(a_n_i/a_n_g)',
          image: formula_7_21,
          variables: [
            { name: 'w', description: 'відносний грант-елемент' },
            {
              name: 'a_n_i',
              displayName: 'a',
              sub: 'n,i',
              description: (
                <span>a<sub>n,g</sub> - коефіцієнти приведення постійних річних рент постнумерандо для відповідних відсоткових ставок i {'<'} g</span>
              ),
              default: 1 },
            { name: 'a_n_g', displayName: 'a', sub: 'n,g', default: 1 },
          ],
        },
        {
          formula: 'G=(D*g*((1-((1+i)**L))/i))+(Y*((1-((1+i)**(n-L)))/i)*v**L)',
          image: formula_7_22,
          variables: [
            { name: 'G', description: 'сучасна вартість погашувальних платежів'},
            { name: 'D', description: 'розмір позики', default: 1 },
            { name: 'g', description: 'відсоткова ставка за позикою', default: 0.01, max: 1, step: 0.01 },
            { name: 'i', description: 'відсоткова ставка', default: 0.01, max: 1, step: 0.01 },
            { name: 'L', description: 'тривалість пільгового періоду становить', default: 1 },
            { name: 'Y', description: 'термінова виплата', default: 1 },
            { name: 'n', description: 'термін позики', default: 1 },
            { name: 'v', description: 'дисконтний множник за ставкою i', default: 1 },
          ],
        },
        {
          formula: 'w=1-(((((1-((1+i)**(n-L)))/i)/((1-((1+g)**(n-L)))/g))*v**L)+(g*(((1-((1+i)**L))/i))))',
          image: formula_7_23,
          variables: [
            { name: 'w', description: 'відносний грант-елемент' },
            { name: 'g', description: 'відсоткова ставка за позикою', default: 0.01, max: 1, step: 0.01 },
            { name: 'i', description: 'відсоткова ставка', default: 0.01, max: 1, step: 0.01 },
            { name: 'L', description: 'тривалість пільгового періоду становить', default: 1 },
            { name: 'n', description: 'термін позики', default: 1 },
            { name: 'v', description: 'дисконтний множник за ставкою i', default: 1 },
          ],
        },
        {
          formula: 'Y=(D*((1+g)**L))/((1-((1+g)**(n-L)))/g)',
          image: formula_7_24,
          variables: [
            { name: 'Y', description: 'термінова виплата' },
            { name: 'D', description: 'розмір позики', default: 1 },
            { name: 'g', description: 'відсоткова ставка за позикою', default: 0.01, max: 1, step: 0.01 },
            { name: 'L', description: 'тривалість пільгового періоду становить', default: 1 },
            { name: 'n', description: 'термін позики', default: 1 },
          ],
        },
        {
          formula: 'G=Y*((1-((1+i)**(n-L)))/i)',
          image: formula_7_25,
          variables: [
            { name: 'G', description: 'сучасна вартість погашувальних платежів'},
            { name: 'Y', description: 'термінова виплата', default: 1 },
            { name: 'i', description: 'відсоткова ставка за позикою', default: 0.01, max: 1, step: 0.01 },
            { name: 'n', description: 'термін позики', default: 1 },
            { name: 'L', description: 'тривалість пільгового періоду становить', default: 1 },
          ],
        },
        {
          formula: 'w=1-((((1-((1+i)**(n-L)))/i)/((1-((1+g)**(n-L)))/g))*(((1+g)/(1+i))**L))',
          image: formula_7_26,
          variables: [
            { name: 'w', description: 'відносний грант-елемент' },
            { name: 'g', description: 'відсоткова ставка за позикою', default: 0.01, max: 1, step: 0.01 },
            { name: 'i', description: 'відсоткова ставка', default: 0.01, max: 1, step: 0.01 },
            { name: 'L', description: 'тривалість пільгового періоду становить', default: 1 },
            { name: 'n', description: 'термін позики', default: 1 },
          ],
        },
        {
          formula: 'Y=(D*(g/m)*((1+(g/m))**(n*m)))/(((1+(g/m))**(n*m))-1)',
          image: formula_7_27,
          variables: [
            { name: 'Y', description: 'термінова виплата' },
            { name: 'D', description: 'розмір позики', default: 1 },
            { name: 'g', description: 'відсоткова ставка за позикою', default: 0.01, max: 1, step: 0.01 },
            { name: 'm', description: 'кількість періодів нарахування відсотків у році і кількість виплат у році', default: 1 },
            { name: 'n', description: 'кількість років кредиту', default: 1 },
          ],
        },
        {
          formula: 'Y=D*((((1+(g/m))**(n*m))-((1+(g/m))**(t-1)))/(((1+(g/m))**(n*m))-1))',
          image: formula_7_28,
          variables: [
            { name: 'Y', description: 'термінова виплата' },
            { name: 'D', description: 'розмір позики', default: 1 },
            { name: 'g', description: 'відсоткова ставка за позикою', default: 0.01, max: 1, step: 0.01 },
            { name: 'm', description: 'кількість періодів нарахування відсотків у році і кількість виплат у році', default: 1 },
            { name: 'n', description: 'кількість років кредиту', default: 1 },
            { name: 't', description: 'номер періоду', default: 1 },
          ],
        },
      ],
    },
  ],
};

export default Unit7;