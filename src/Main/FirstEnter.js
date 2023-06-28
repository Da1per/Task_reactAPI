import { Box } from "@mui/system"
import ArrowLeft from '../img/ArrowLeft.svg'
import EmptyState from '../img/Empty_State_1.png'
export const FirstEnter =()=>{
    return(
        <Box sx={{padding:'100px 0 233px 24px'}}>
            <Box>
                <img src={ArrowLeft} alt='ArrowLeft' />
                <p>Add filters to begin <br/> your search</p>
                
            </Box>
            <Box  sx={{display:'flex',flexDirection:'column',alignItems:'center'}}>
                <img src={EmptyState} alt="EmptyState" />
                <p>Start your people search by applying any <br/> filter in the left panel</p>
                <Box sx={{padding:'8px 0 0 0' , border:'1px solid #E7E8EF',borderRadius:'16px',width:'488px',height:'200px'}}>
                    <Box sx={{padding:'0 0 0 18px' , borderBottom:'1px solid #E7E8EF'}}>
                        Recent searches
                    </Box>
                    <Box sx={{padding:'0 0 0 18px' }}>
                    <p>Your last four searches will be <br/> here for quick access</p> 
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}