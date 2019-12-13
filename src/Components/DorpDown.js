import React, { Component, Fragment } from 'react';
import {FormControl,Select,MenuItem,InputLabel} from '@material-ui/core';
// import { category } from './Store';


class DropDown extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             selectedCategory:'',
             subCategory:'',
             selectedVender:'',
        }
    }

    handleOnChange = event => {
        console.log('event',event.target.value);
        this.setState({ [event.target.id] : event.target.value})
    }
    handleSubmit = event => {
        event.preventDefault();
        const { selectedCategory,subCategory,selectedVender } =this.state;
        const reqBody ={
            selectedCategory,subCategory,selectedVender
        }
        console.log('reqBody',reqBody);
    }

   
    render() {
        const { selectedCategory,subCategory,selectedVender } =this.state;
        console.log('this.state',this.state);
        // const enableSubmit = selectedCategory && subCategory && selectedVender;
    
        return (
            
            <Fragment>
          
                    <FormControl required variant = "standard">
                        <InputLabel>Category</InputLabel>
                        <Select>
                        <MenuItem value='Onroad'>OnRoad</MenuItem>
                        <MenuItem value='Onfreight'>Onfreight</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl required>
                        <InputLabel>Sub Category</InputLabel>
                        <Select>
                        <MenuItem value='Standard'>Standard</MenuItem>
                        <MenuItem value='Normal'>Normal</MenuItem>
                        <MenuItem value='Express'>Express</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl>
                        <InputLabel>Vendor</InputLabel>
                        <Select>
                        <MenuItem value='DHL'>DHL</MenuItem>
                        <MenuItem value='DTDC'>DTDC</MenuItem>
                        <MenuItem value='Delhivery'>Delhivery</MenuItem>
                        </Select>
                    </FormControl>
                    
            
            </Fragment>









        //     <div>

        // <form autoComplete='false' onSubmit={this.handleSubmit} >
        //     <div>
        //   <label> Category </label>
        // <select id="selectedCategory" onChange={this.handleOnChange}>
        //      <option > select category</option>;
        //     {data.category.map( category => {
        //         return <option > {category} </option>;
        //     })}
        // </select>
        // </div>

        // <div>
        // <label>Sub Category </label>
        // <select id="subCategory" onChange={this.handleOnChange} disabled={!selectedCategory}>
        // <option> select sub-category</option>
        // {data.subCategory.map( subCategory => {
        //     const isDisable = !(subCategory.isCategory === selectedCategory);
        //         return <option disabled={isDisable}> {subCategory.name} </option>;
        //     })}
        // </select>
        // </div>

        // <div>
        // <label>Vendor </label>
        // <select id="selectedVender" onChange={this.handleOnChange} disabled={!subCategory}>
        // <option> select vender</option>
        //     {data.vender.map( eachVender => {
        //      const isDisable = (eachVender.isSubCategory === 'Express');

        //         return <option disabled={isDisable}> {eachVender.name} </option>;
        //      })}
        // </select>
        // </div>
        // <input type='submit' disabled={!enableSubmit} value="Submit" />
        // </form>

                
        //     </div>
        ) }}
export default DropDown
