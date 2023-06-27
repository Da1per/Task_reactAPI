import { useEffect, useState } from 'react';
import { 
    TextInput,SelectInput
} from 'react-admin';
  


export const postFilters = [
            <TextInput label="Search by job title" source="job_title" alwaysOn />,
    ];

    export  const postFilters1 = [
        <SelectInput  source="country" choices={[
            { id: '0', name: 'Tech' },
            { id: '1', name: 'Lifestyle' },
            { id: '2', name: 'People' },
        ]}/>,
];

   export const postFilters2 = [
        <SelectInput label="Choose industry"  />, 
    ];
