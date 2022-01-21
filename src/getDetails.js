
// mean function
export const mean = (numbers) =>{
    var total = 0, i;
    for (i = 0; i < numbers.length; i += 1) {
        total += numbers[i];
    }
    const ans = total/numbers.length;
    return ans;
    // return Math.round(ans*100)/100;
}
// median function
export const median = (nums) =>{
    var numsLen = nums.length;
    nums.sort();
    const mid = Math.floor(numsLen/2);
    return numsLen % 2 !== 0 ? nums[mid] : (nums[mid - 1] + nums[mid]) / 2;
}
// mode function
export const mode = (numbers) =>{
    var modes = [], count = [], i, number, maxIndex = 0;
 
    for (i = 0; i < numbers.length; i += 1) {
        number = numbers[i];
        count[number] = (count[number] || 0) + 1;
        if (count[number] > maxIndex) {
            maxIndex = count[number];
        }
    }
    for (i in count){
        if (count.hasOwnProperty(i)) {
            if (count[i] === maxIndex) {
                modes.push(Number(i));
            }
        }
    }
    return modes[0];
}
// range funciton
export const range = (numbers)=>{
    var ans = Math.max(...numbers)-Math.min(...numbers);
    return ans;
}
// count no of elements
export const countN = (numbers)=>{
    return numbers.length;
}
// sum of array
export const sumArray = (numbers) =>{
    var total = 0, i;
    for (i = 0; i < numbers.length; i += 1) {
        total += numbers[i];
    }
    return total;
}
// min of array
export const minArray=(numbers)=>{
    return Math.min(...numbers);
}
// max of array
export const maxArray=(numbers)=>{
    return Math.max(...numbers);
}
const quantile = (arr, q) => {
    const asc = arr => arr.sort((a, b) => a - b);

    const sorted = asc(arr);
    const pos = (sorted.length - 1) * q;
    const base = Math.floor(pos);
    const rest = pos - base;
    if (sorted[base + 1] !== undefined) {
        return (sorted[base] + sorted[base + 1])/2;
    } else {
        return sorted[base];
    }
};
// 25 quartile
export const quartile25 = (arrayName)=>{
    return quantile(arrayName,0.25);
}
// 50 quartile
export const quartile50 = (arrayName)=>{
    return quantile(arrayName,0.5);
}
// 75 quartile
export const quartile75 = (arrayName)=>{
    return quantile(arrayName,0.75);
}
// iqr
export const iqr = (numbers)=>{
    return quartile75(numbers)-quartile25(numbers);
}
//count the outliers
export const outlier = (numbers)=>{
    var count=0,i=0;
    var upper = quartile75(numbers)+(1.5*iqr(numbers));
    var lower = quartile25(numbers)-(1.5*iqr(numbers));
    for(i=0;i<=numbers.length;i+=1){
        if(numbers[i]>upper || numbers[i]<lower) count+=1
    }
    if (count==0)   return "None";
    return count;
}