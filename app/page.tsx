"use client"
import React from 'react';

import AsyncSelect from 'react-select/async';Select
import Select from 'react-select';
import { ColourOption, colourOptions, stateOptions, StateOption } from '@/app/docs/data';

// import Image from "next/image";
// import styles from "./page.module.css";



const filterColors = (inputValue: string) => {

  const result =  stateOptions.filter((i) => i.label.toLowerCase().includes(inputValue.toLowerCase()));

  console.log(result);
  return result

};

const loadOptions = (
  inputValue: string,
  callback: (options: StateOption[]) => void
) => {
  console.log("test")
  setTimeout(() => {
    callback(filterColors(inputValue));
  }, 1000);
};

// export default Home = () => (
//   <AsyncSelect cacheOptions loadOptions={loadOptions} defaultOptions />
// );

export default function Home() {
  return (
    <div style={{width:"300px", margin:"300px"}}>
      {/* <AsyncSelect onChange= {(value)=> console.log(value)} cacheOptions loadOptions={loadOptions} defaultOptions /> */}
      <Select
        className="basic-single"
        classNamePrefix="select"
        defaultValue={stateOptions[0]}
        isDisabled={false}
        isLoading={false}
        isClearable={true}
        onInputChange = {(newValue, actionMeta)=>{
          console.log(newValue, actionMeta)
        }}
        isSearchable={true}
        name="color"
        options={stateOptions}
      />
    </div>
  );
}



