import { List, Datagrid, TextField, DateField, BooleanField } from 'react-admin';

export const PostList = () => (
    <List>
        <Datagrid>
            <TextField source="full_name" />
            <TextField source="job_title" />
            <TextField source="industry" />
            <TextField source="country" />
        </Datagrid>
    </List>
);