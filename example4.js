function calculator() {
    var currentTotal = 0;
    var currentVal = "";
    var currentOper = "=";

    return pressKey;
       function pressKey(key){
        if (/\d/.test(key)) {
            currentVal += key;
            return key;
        }
        else if (/[+*/-]/.test(key)) {
            if (
                currentOper != "=" &&
                currentVal != ""
            ) {
                pressKey("=");
            }
            else if (currentVal != "") {
                currentTotal = Number(currentVal);
            }
            currentOper = key;
            currentVal = "";
            return key;
        }
        else if (
            key == "=" &&
            currentOper != "="
        ) {
            currentTotal = op(
                currentTotal,
                currentOper,
                Number(currentVal)
            );
            currentOper = "=";
            currentVal = "";
            return formatTotal(currentTotal);
        }
        return "";
    };

    function op(val1,oper,val2) {
        var ops = {
            "+": (v1,v2) => v1 + v2,
            "-": (v1,v2) => v1 - v2,
            "*": (v1,v2) => v1 * v2,
            "/": (v1,v2) => v1 / v2
        };
        return ops[oper](val1,val2);
    }
}

var calc = calculator();

useCalc(calc,"4+3=");           
useCalc(calc,"+9=");            
useCalc(calc,"*8=");            
useCalc(calc,"7*2*3=");         
useCalc(calc,"1/0=");           
useCalc(calc,"+3=");            
useCalc(calc,"51=");            