import { List, Datagrid, TextField,ExportButton,TopToolbar, Filter, TextInput,useGetList,useGetOne, useRecordContext,Loading  } from 'react-admin';
import CustomAside from '../LeftBar/CustomAside';


export const PostList = () => (
    <List  sx={{'& .RaList-main':{borderLeft:'1px solid #E7E8EF'}}} exporter={false}  aside={<CustomAside /> }>
        <Datagrid>
            <TextField source="full_name" />
            <TextField source="job_title" />
            <TextField source="industry" />
            <TextField source="country" />
        </Datagrid>
    </List>
);
export const LatestNews = () => {
    const { data, total, isLoading, error } = useGetList(
        'posts',
        { 
            pagination: { page: 1, perPage: 10 },
            sort: { field: 'published_at', order: 'DESC' }
        }
    );
    if (isLoading) { return <Loading />; }
    if (error) { return <p>ERROR</p>; }
    console.log('fff')
    return (
        <>
            <h1>Latest news</h1>
            <ul>
                {data.map(record =>
                    <li key={record.id}>{record.title}</li>
                )}
            </ul>
            <p>{data.length} / {total} articles</p>
        </>
    );
};

