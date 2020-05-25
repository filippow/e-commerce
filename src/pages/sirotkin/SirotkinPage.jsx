import React, {Component} from 'react';

import {calculateResult} from "./utils";

import './sirotkinPage.scss';

class SirotkinPage extends Component {
    state = {
        stationsQuantity: 11,
        values: {
            1: {x: 9, t: 35},
            2: {x: 9, t: 34.58},
            3: {x: 4, t: 29.96},
            4: {x: 10, t: 35},
            5: {x: 6, t: 35},
            6: {x: 13, t: 35},
            7: {x: 5, t: 34.08},
            8: {x: 1, t: 33.97},
            9: {x: 3, t: 35},
            10: {x: 2, t: 35},
            11: {x: 2, t: 35}
        },
        bettaStep: 0.01,
        inaccuracy: 0.1,
        bettaLeftRange: 0,
        bettaRightRange: 400,
        resultList: []
    }

    /**
     *
     * @param parameter - x or y
     * @param index increased by 1
     * @param value - string representation of number in input field
     */
    handleParamStationChange = (parameter, index, value) => {
        var values = this.state.values;

        if (values[index]) {
            values[index][parameter] = value;
        } else {
            values[index] = {
                [parameter]: value
            }
        }
        this.setState({values});
    }

    submitForm = event => {
        let {values, bettaStep,bettaLeftRange, bettaRightRange, inaccuracy, stationsQuantity} = this.state;
        let isError = false;

        let bettaRange,
            inputData = [];

        inaccuracy = Number(inaccuracy);
        bettaStep = Number(bettaStep);
        bettaRange = [Number(bettaLeftRange), Number(bettaRightRange)];

        Object.keys(values).forEach(key => {
            let {x, t} = values[key];
            if (Number(key) <=stationsQuantity) {

                if (!x || !t) {
                    isError = true;
                }
                inputData.push({
                    x: Number(x),
                    t: Number(t)
                })
            }
        });

        if (isError) {
            alert('Заполните все поля');
            return false;
        }
        var result = calculateResult(inputData, bettaRange, bettaStep, inaccuracy);

        result.sort(this.sortFn);

        this.setState({
            resultList: result.slice(0,3)
        })

    }

    sortFn = (a,b) => {
        let aNum = Math.abs(a.result),
            bNum = Math.abs(b.result);

        if (aNum > bNum) return 1;
        if ( aNum=== bNum) return 0;
        if ( aNum < bNum) return -1;
    }


    render() {
        const {stationsQuantity} = this.state;
        const itemsArray = new Array(stationsQuantity).fill(1);

        return (
            <div>
                <div className='statistics-header'>
                    <span>Количество объектов:</span>
                    <input
                        className='input-field'
                        min={1}
                        max={100}
                        type='number'
                        value={this.state.stationsQuantity}
                        onChange={(event) => {
                            let quantity = event.target.valueAsNumber,
                                values = this.state.values;


                            for (let i=1; i<= quantity; i++) {
                                if (!values[i]) {
                                    values[i] = {x: '', t: ''};
                                }
                            }

                            this.setState({
                                values: values,
                                stationsQuantity: event.target.valueAsNumber || 2
                            })
                        }}
                    />
                </div>
                <div className='statistics-grid-header'>
                    <span>Подписи</span>
                </div>
                <div className='statistics-content'>
                    <div className="quantity-area">
                        {
                            itemsArray.map((fake, index) => (
                                <div className='input-container' key={index}>
                                    <input
                                        className='input-item-text'
                                        type='text'
                                        onChange={({target}) => {
                                            this.handleParamStationChange('description', index + 1, target.value)
                                        }}
                                    />
                                    <span>{`x${index + 1}`}</span>
                                    <input
                                        required
                                        min={1}
                                        max={1000}
                                        className='input-item'
                                        type='number'
                                        value = {this.state.values[index+1].x}
                                        onChange={({target}) => {
                                            this.handleParamStationChange('x', index + 1, target.value)
                                        }}
                                    />
                                    <span>{`t${index + 1}`}</span>
                                    <input
                                        required
                                        min={1}
                                        max={99999}
                                        className='input-item'
                                        type='number'
                                        value = {this.state.values[index+1].t}
                                        onChange={({target}) => {
                                            this.handleParamStationChange('t', index + 1, target.value)
                                        }}
                                    />
                                </div>
                            ))
                        }
                    </div>
                    <div className='parameters'>
                        <div>
                            <span style={{marginLeft: 63}}
                                  className='input-item-label'>Шаг для Betta:</span>
                            <input
                                min={0.00001}
                                max={1000}
                                value={this.state.bettaStep}
                                type="number"
                                onChange={(event) => {
                                    this.setState({
                                        bettaStep: event.target.value
                                    })
                                }}

                            />
                        </div>
                        <div>
                            <span className='input-item-label'>Величина погрешности:</span>
                            <input
                                value={this.state.inaccuracy}
                                type="number"
                                onChange={(event) => {
                                    this.setState({
                                        inaccuracy: event.target.value
                                    })
                                }}
                            />
                        </div>
                        <div className='item-range'>
                            <div style={{
                                textAlign: 'center',
                                margin: '10px 80px 0 0'
                            }}
                            >
                                Диапазон проверки Betta:
                            </div>
                            <span>От</span>
                            <input
                                value={this.state.bettaLeftRange}
                                type="number"
                                multiple
                                min={-100}
                                max={300}
                                onChange={(event) => {
                                    this.setState({
                                        bettaLeftRange: event.target.value
                                    })
                                }}
                            />
                            <span style={{marginLeft: 20}}>До</span>
                            <input
                                value={this.state.bettaRightRange}
                                type="number"
                                multiple
                                min={-100}
                                max={300}
                                onChange={(event) => {
                                    this.setState({
                                        bettaRightRange: event.target.value
                                    })
                                }}
                            />
                        </div>
                    </div>
                </div>

                <div className='launch'>
                    <button onClick={this.submitForm}> Выполнить рассчет</button>
                </div>
                <div className="result-section">
                   <div className="result-header">
                       <span className='result-header-title'>Альфа</span>
                       <span className='result-header-title'>Бетта</span>
                       <span className='result-header-title'>Погрешность подсчета</span>
                   </div>
                    <div className="result-content">
                        {
                            this.state.resultList.length ?
                            this.state.resultList.map((item, index)=> (
                                <div key={index}>
                                    <span className='result-header-item'>{item.Alpha.toFixed(3)}</span>
                                    <span className='result-header-item'>{item.Betta.toFixed(3)}</span>
                                    <span className='result-header-item'>{item.result.toFixed(6)}</span>
                                </div>

                            ))
                                :
                                <div className='empty-result'>Найденных значений нет, измените выборку для поиска</div>
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default SirotkinPage;

