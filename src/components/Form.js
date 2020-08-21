import React, {useState,useEffect} from "react";
import axios from 'axios';
import * as yup from "yup";

//Form Function
const Form = () => {

//setting Data for object to backend 
const [data,setData] = useState({});

//blank state for the form data 
const blankValue =  {
    effects: "",
    flavors:""
 }
 //setting form state
const [formState,setForm] = useState(blankValue);

//state for button
const [buttonDisabled, setButtonDisabled] = useState(true);

//state for errors 
const [errors, setErrors] = useState({
    effects: "",
    flavors:""
})

//setting up yup schema object 

const dataSchema = yup.object().shape({
    effects: yup.string().oneOf(["Creative"],"Please select a desired effect"),
      flavors: yup.string().oneOf(["Earthy"],"Please select a desired Flavor")
  });

//onChange function to watch for changes in form values 
const inputChange = e => {
    e.persist();
    const newFormData = {
        ...formState, [e.target.name] : e.target.type === "checkbox" ? e.target.checked : e.target.value
    }
    validateChange(e); 
    setForm(newFormData);
}

//validating that the form has inputs and setting errors with yup
const validateChange = (e) => {
    yup
      .reach(dataSchema, e.target.name)
      .validate(e.target.name === "terms" ? e.target.checked : e.target.value) 
      .then((valid) => {
        setErrors({
          ...errors,
          [e.target.name]: ""
        });
      })
      .catch((err) => {
        console.log(err);

        // set error in state
        setErrors({
          ...errors,
          [e.target.name]: err.errors[0]
        });
      });
  };
//submit function to record the data in a json structure with an api
const formSubmit = e => {
    e.preventDefault();
    axios.post("https://reqres.in/api/users",formState)
        .then(response => {
            setData(response.data);
            setForm(blankValue);
            //console logging the example data api
            console.log(data);
        })
        .catch(err => {
            console.log(err);
        });
}

//use effect to make sure person provides an effect 
useEffect(() => {
    dataSchema.isValid(formState).then((isValid) => {
        setButtonDisabled(!isValid)
    });
}, [formState]);

return (
    <div>
         <form onSubmit = {formSubmit}>
             <label htmlFor = "effects">
                 Effect you're Looking for:
                <select name ="effects" onChange = {inputChange} value= {formState.effects}>
                    <option value = {null}></option>
                    <option value = "Creative">Creative</option>
                </select>
             </label>
             <label htmlFor = "flavors">
                 Flavor you're Looking for:
                <select name ="flavors" onChange = {inputChange} value= {formState.flavors}>
                    <option value = {null}></option>
                    <option value = "Earthy">Earthy</option>
                </select>
             </label>
             <button disabled = {buttonDisabled} type = "submit">Submit</button>
         </form>
        
    </div>
)
}

export default Form;