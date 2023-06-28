

import * as React from 'react';
import {FilterForm,AutocompleteInput,TextInput,Count} from 'react-admin';
import { Box} from '@mui/material';
import { useEffect, useState } from 'react';
import  dataProvider  from '../dataProvider';
import jobTitleSvg from '../img/Job_title_svg.svg'
import LocationSvg from '../img/Location_svg.svg'
import IndustrySvg from '../img/Industry_svg.svg'
function CustomAside( ) {
    
    const [country, setCountry] = useState(null);
    const [industry, setIndustry] = useState(null);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const responseCountry = await dataProvider.getOne('contacts',{id:'countries'});
          setCountry(responseCountry.data.map((a)=>{return {id:a.id,name:a.name}}));
          const responseIndustry = await dataProvider.getOne('contacts',{id:'industries'});
          setIndustry(responseIndustry.data.map((a)=>{return {id:a.id,name:a.name}}));
        } catch (error) {
          console.error(error);
        }
      }
      fetchData();
    }, [dataProvider]);

    console.log(country)

    const postFilters = [
        <TextInput  label="Search by job title" sx={{width:'204px'}} source="job_title" alwaysOn />,
    ];
    const postFiltersCountry = [
    <AutocompleteInput label="Choose location" sx={{width:'204px'}}   source="country" choices={country} alwaysOn/>,
    ];
    const postFiltersIndustry= [
    <AutocompleteInput label="Choose industry" sx={{width:'204px'}}  source="industry"  choices={industry} alwaysOn/>, 
    ];
    
    return (
        <Box sx={{width:'17.15%',padding:'0 0 0 1.11%',order: -1,}}>
            <Box sx={{padding:'15% 0 0 0%',borderBottom:'1px solid #E7E8EF'}}>
                    <h2>Filters</h2>
            </Box>
            <Box sx={{width:'89.4%',borderBottom:'1px solid #E7E8EF'}}>
                <p><img src={jobTitleSvg} alt='jobTitleSvg'/> Job title</p>
                <FilterForm  filters={postFilters} />
            </Box>
            <Box sx={{width:'89.4%',borderBottom:'1px solid #E7E8EF'}}>
                <p><img src={LocationSvg} alt='LocationSvg'/> Location</p>
                {(country)?(<FilterForm sx={{width:'107%'}} filters={postFiltersCountry} />):null}
            </Box>
            <Box sx={{borderBottom:'1px solid #E7E8EF'}}>
                <p><img src={IndustrySvg} alt='IndustrySvg'/> Industry</p>
                {(industry)?(<FilterForm sx={{width:'107%'}} filters={postFiltersIndustry} />):null}
            </Box>
        </Box>
    );
};

export default CustomAside;
