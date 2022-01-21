import { useState } from "react";
import Output from "./Output";

const FormField = () => {

    const [data,setData] = useState('');
    const [showData,setShowData] = useState(false);

    const handleSubmit = (e)=>{
        console.log("Inside form field",data);
        setShowData(true);
    }
    
    const handleClear = (e)=>{
        setData('');
        setShowData(false);
        console.log("Cleared the input");
    }
    
    return ( 
        <div className="form-field">
            <div>
                <label>Enter the array in comma seperated eg:"1,2,3"</label>
                <textarea
                required
                value={data}
                onChange={(e) => {
                    setShowData(false);
                    setData(e.target.value);
                }}
                ></textarea>
                <button onClick={handleSubmit}>Calculate</button>
                <button onClick={handleClear}>Clear</button>
            </div>
            {data?.length>0 && showData && <Output data={data}/>}
        </div>
     );
}
 
export default FormField;