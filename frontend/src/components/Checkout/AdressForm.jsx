import React , {useState, useEffect} from 'react';
import { InputLabel, Select, MenuItem, Button, Grid , Typography } from '@material-ui/core';
import { useForm, FormProvider} from 'react-hook-form';
import FormInput from './CustomTextField';

const  AdressForm = ()=> {
    const [shippingCountries, setShippingCountries] = useState([]);
    const [shippingCountry, setShippingCountry] = useState('');
  

    const countries =  [
        { value: "Romania", label: "Romania" },
        { value: "Canada", label: "Canada" },
        { value: "Rusia", label: "Rusia" }
      ];
  




    const methods = useForm();
    return (
        <div>
            <Typography variant="h6" gutterBottom>Shipping Adress</Typography>
            <FormProvider {...methods}>
                <form onSubmit= '' >
                    <Grid container spacing= {3}> 
                    <FormInput required name="firstName" label="First name" />
                    <FormInput required name="lastName" label="Last name" />
                    <FormInput required name="adress1" label="Adress" />
                    <FormInput required name="email" label="Email" />
                    <FormInput required name="City" label="City" />
                    <FormInput required name="ZIP" label="ZIP / Postal code" />
                    <Grid item xs={12} sm={6}>
                        <InputLabel> Shipping Country</InputLabel>
                        <Select value= {shippingCountry} fullWidth  onChange={(e) => setShippingCountry(e.target.value)}>
                            {countries.map((element) => (
                                
                                 <MenuItem value={element.value} > {element.label}
                                     </MenuItem> 
    ))
                             }
                        </Select>
                    </Grid>
                    {/* <Grid item xs={12} sm={6}>
                        <InputLabel> Shipping Subdivision</InputLabel>
                        <Select value="Bucuresti" fullWidth onChange={}>
                            <MenuItem key={} value= {}>
                                Select me
                            </MenuItem>
                        </Select>
                    </Grid> */}
                    {/* <Grid item xs={12} sm={6}>
                        <InputLabel> Shipping Options</InputLabel>
                        <Select value={} fullWidth onChange={}>
                            <MenuItem key={} value= {}>
                                Select me
                            </MenuItem>
                        </Select>
                    </Grid> */}
                    </Grid>
                </form>
            </FormProvider>
        </div>
    )
}

export default AdressForm
