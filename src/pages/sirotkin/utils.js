

export const calculateResult = (inputData, bettaRange, bettaStep, inaccuracy) => {
    const finalResult = [];


    const getHighArgument = (Betta) => {
        let res = 0;

        for (let i = 1; i <= inputDataLength; i++) {
            res += (inputData[i-1].x * Betta) / (Betta + inputData[i-1].t);
        }
        return res;
    }

    const getLowArgument = (Betta) => {
        let res = 0;

        for (let i = 1; i <= inputDataLength; i++) {
            res += inputData[i - 1].t / (Betta + inputData[i - 1].t);
        }
        return res;
    }

    const getPsiDifference = (i, Alpha) => {
        let res = 0;

        for (let j = 1; j <= i; j++) {
            res += 1 / (Alpha + j - 1);
        }

        return res;
    }

    const getFinalDifference = (Alpha, Betta) => {
        var difference = 0;

        for (let i = 1; i <= inputDataLength; i++) {

            difference += getPsiDifference(inputData[i-1].x, Alpha) - Math.log(1 + (inputData[i - 1].t/Betta));
        }

        return difference;
    }


    const inputDataLength = inputData.length,
        alphaBettaValues = [];


    for (let Betta = bettaRange[0]; Betta < bettaRange[1]; Betta = Betta + bettaStep) {
        alphaBettaValues.push({
            Betta: Betta,
            Alpha: getHighArgument(Betta) / getLowArgument(Betta)
        })
    }

    alphaBettaValues.forEach(item => {
        var difference = getFinalDifference(item.Alpha, item.Betta);

        if (Math.abs(difference) <inaccuracy) {
            finalResult.push({
                Alpha: item.Alpha,
                Betta: item.Betta,
                result: getFinalDifference(item.Alpha, item.Betta)
            })

        }
    });

    return finalResult;
}
