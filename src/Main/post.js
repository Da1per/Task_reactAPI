import { List, Datagrid, TextField,useStore,Pagination} from 'react-admin';
import CustomAside from '../LeftBar/CustomAside';
import {FirstEnter} from './FirstEnter';

export const PostList = () => {

    const [filterState] = useStore('filter.state', 'false');
    return(
    <List  sx={{'& .RaList-main':{borderLeft:'1px solid #E7E8EF'}}} exporter={false} pagination={(filterState)?<Pagination/>:(() => null)} empty={(() => null)} aside={<CustomAside /> }>
      { (filterState)?(<Datagrid>
            <TextField source="full_name" />
            <TextField source="job_title" />
            <TextField source="industry" />
            <TextField source="country" />
        </Datagrid>):<FirstEnter/>}
    </List>
);}
