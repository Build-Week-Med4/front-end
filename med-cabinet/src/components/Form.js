import React, {useState,useEffect} from "react";
import axios from 'axios';
import * as yup from "yup";
import Weed from './Weed.js';
import { Container, Row, Col } from 'reactstrap';
import Carousel from './Carousel.js'

//work around login to render form component 
//window.localStorage.setItem('token', '1234')

//Form Function
const Form = () => {

//setting Data for object to backend 
const [data,setData] = useState([]);

//blank state for the form data 
const blankValue =  {
    effect: "",
    flavor:""
 }
 //setting form state
const [formState,setForm] = useState(blankValue);

//state for button
const [buttonDisabled, setButtonDisabled] = useState(true);

//state for errors 
const [errors, setErrors] = useState({
    effect: "",
    flavor:""
})

//setting up yup schema object 

const dataSchema = yup.object().shape({
    effects: yup.string().oneOf(["Creative","Focused"],"Please select a desired effect"),
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
//submit function to record the data in a json structure with an api HLKs5e3
const formSubmit = e => {
    e.preventDefault();
    axios.post("https://med-cab4.herokuapp.com/predict",formState)
        .then(response => {
            console.log(response.data);
            const newData = response.data.filter((bud => {
                return bud.effect === formState.effect
              })
              )
            setData(newData);
            setForm(blankValue);
            //console logging the example data api
            console.log(response)
        })
        .catch(err => {
            console.log(err);
        });
}

//use effect to make sure person provides an effect 
useEffect(() => {
    axios.post("https://med-cab4.herokuapp.com/predict")
    .then(res => {
        console.log(res)
    })
    .catch(err => {
        console.log(err)
    })
    dataSchema.isValid(formState).then((isValid) => {
        setButtonDisabled(!isValid)
    });
}, [formState]);

return (
    <div>
        <Container>
         <Row className = "sizing" >
           <Col sm="12" md={{ size: 6, offset: 3 }}>
            <Carousel/>
           </Col>
         </Row>
         <form onSubmit = {formSubmit}>
         <Row>
             <Col>
             <label htmlFor = "effects">
                 Effect you're Looking for:
                <select name ="effects" onChange = {inputChange} value= {formState.effects}>
                    <option value = 'Energetic'>Energetic</option>
                    <option value = 'Tingly'>Tingly</option>
                    <option value = 'Euphoric'>Euphoric</option>
                    <option value = 'Relaxed'>'Relaxed'</option>
                    <option value = 'Aroused'>'Aroused'</option>
                    <option value = 'Happy'>'Happy'</option>
                    <option value = {null}></option>
                    <option value = {null}></option>
                    <option value = {null}></option>
                    <option value = {null}></option>
                    <option value = {null}></option>
                    <option value = {null}></option>
                    <option value = {null}></option>
                    <option value = {null}></option>
                    <option value = {null}></option>
                    <option value = "Creative">Creative</option>
                    <option value = "Focused">Focused</option>
                </select>
             </label>
             </Col>
             <Col>
             <label htmlFor = "flavors">
                 Flavor you're Looking for:
                <select name ="flavors" onChange = {inputChange} value= {formState.flavors}>
                    <option value = {null}></option>
                    <option value = "Earthy">Earthy</option>
                </select>
             </label>
             </Col>
             </Row>
             <button className = "Danger" disabled = {buttonDisabled} type = "submit">Submit</button>
         </form>
         </Container>
         <Container>
         <Weed weed = {data} />
         </Container>
    </div>
)
}

export default Form;