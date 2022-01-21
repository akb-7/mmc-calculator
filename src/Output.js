import {mean,median,mode,range,minArray,maxArray,countN,sumArray,quartile25,quartile50,quartile75,iqr,outlier} from "./getDetails";

const Output = ({data}) => {
    console.log(data);
    const newArray = data.split(',').filter((n)=>{
        return n.length>0;
    }).map(Number);
    return ( 
        <div className="output">
            {<h2>Mean : {mean(newArray)}</h2>}
            {<h2>Median : {median(newArray)}</h2>}
            {<h2>Mode : {mode(newArray)}</h2>}
            {<h3>Range: {range(newArray)}</h3>}
            {<h3>Min: {minArray(newArray)}</h3>}
            {<h3>Max: {maxArray(newArray)}</h3>}
            {<h3>Count n: {countN(newArray)}</h3>}
            {<h3>Sum : {sumArray(newArray)}</h3>}
            {<p>{"Q1-->"} : {quartile25(newArray)}</p>}
            {<p>{"Q2-->"} : {median(newArray)}</p>}
            {<p>{"Q3-->"} : {quartile75(newArray)}</p>}
            {<h3>Interquartile Range IQR: {iqr(newArray)}</h3>}
            {<h3>Outlier : {outlier(newArray)}</h3>}
        </div>
     );
}
 
export default Output;

