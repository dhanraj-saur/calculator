import React, { useState } from "react";

const Calculator = () => {
    let [num1, setNum1] = useState("");
    let [num2, setNum2] = useState("");
    let [operation, setOperation] = useState("");
    let [result, setResult] = useState("");
    let [error, setError] = useState("");
    let [success, setSuccess] = useState("");

    const handleInputChange = (e, field) => {
        const value = e.target.value;
        field === 'num1' ? setNum1(value) : setNum2(value);
    };

    const performOperation = (operator) => {
        const n1 = parseFloat(num1);
        const n2 = parseFloat(num2);

        if (isNaN(n1) || isNaN(n2)) {
          setResult("Invalid Results")
            setError("Error! Num cannot be empty")
            return;
        }
        else {
            setSuccess("success!")
        }

        let res;

        switch (operator) {
            case 'add':
                res = n1 + n2;
                break;
            case 'subtract':
                res = n1 - n2;
                break;
            case 'multiply':
                res = n1 * n2;
                break;
            case 'divide':
                if (n2 === 0) {
                    setResult('Cannot divide by zero');
                    return;
                }
                res = n1 / n2;
                break;
            default:
                setResult('');
                return;
        }

        setResult(res);
        setOperation(operator);
    };

    return (
        <div>
            <div className="react-calculator">
                <div className="calculator">
                    <div className="heads">
                        <h1>React Calculator</h1>
                    </div>
                    <br />
                    <div className="input">
                        <input
                            type="text"
                            placeholder="Num1"
                            value={num1}
                            onChange={(e) => handleInputChange(e, 'num1')}
                        />
                        <br />
                        <br />
                        <input
                            type="text"
                            placeholder="Num2"
                            value={num2}
                            onChange={(e) => handleInputChange(e, 'num2')}
                        />
                    </div>
                    <br />
                    <div className="button">
                        <button onClick={() => performOperation('add')}>+</button>
                        <button onClick={() => performOperation('subtract')}>-</button>
                        <button onClick={() => performOperation('multiply')}>*</button>
                        <button onClick={() => performOperation('divide')}>/</button>
                    </div>



                    <div className="result">
                        {
                            error &&
                            <div className="error">{error}</div>
                        }
                        {
                            success &&
                            <div className="success">
                                {success}
                            </div>
                        }
                        <p>Result : {result}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Calculator;
