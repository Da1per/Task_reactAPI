

import * as React from 'react';
import { SavedQueriesList, FilterLiveSearch, FilterList, FilterListItem,TextField,FilterButton,CreateButton,FilterForm,SelectInput,TextInput} from 'react-admin';
import { Box,Card, CardContent  } from '@mui/material';
import  {postFilters,postFilters1,postFilters2} from './CustomeFilter'
import { useEffect, useState } from 'react';
import  dataProvider  from '../dataProvider';

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

    console.log(industry)

    const postFilters = [
        <TextInput label="Search by job title" source="job_title" alwaysOn />,
    ];
    const postFiltersCountry = [
    <SelectInput  source="country" choices={country}/>,
    ];
    const postFiltersIndustry= [
    <SelectInput source="industry"  choices={industry}/>, 
    ];
    
    return (
        <Box sx={{width:'17.15%',padding:'0 0 0 1.11%',order: -1,}}>
            <Box sx={{padding:'15% 0 0 0%',borderBottom:'1px solid #E7E8EF'}}>
                    <h2>Filters</h2>
            </Box>
            <Box sx={{width:'80%',borderBottom:'1px solid #E7E8EF'}}>
                <p>Job title</p>
                <FilterForm filters={postFilters} />
                <FilterButton filters={postFilters} />
            </Box>
            <Box sx={{width:'80%',borderBottom:'1px solid #E7E8EF'}}>
                <p>Location</p>
                <FilterForm filters={postFiltersCountry} />
                <FilterButton filters={postFiltersCountry} />
            </Box>
            <Box sx={{borderBottom:'1px solid #E7E8EF'}}>
                <p>Industry</p>
                <FilterForm filters={postFiltersIndustry} />
                <FilterButton filters={postFiltersIndustry} />
            </Box>
        </Box>
    );
};

export default CustomAside;
