import { List, Datagrid, TextField} from 'react-admin';
import CustomAside from '../LeftBar/CustomAside';
import {FirstEnter} from './FirstEnter';

export const PostList = () => (
    <List  sx={{'& .RaList-main':{borderLeft:'1px solid #E7E8EF'}}} exporter={false} /* pagination={() => null} */  aside={<CustomAside /> }>
      { (false)?(<Datagrid>
            <TextField source="full_name" />
            <TextField source="job_title" />
            <TextField source="industry" />
            <TextField source="country" />
        </Datagrid>):<FirstEnter/>}
    </List>
);
