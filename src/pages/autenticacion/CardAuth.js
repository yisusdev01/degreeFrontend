import { Box,Card } from "@mui/material"


export const CardAuth = ({children}) => {
    return (
        <Card
            elevation={0}
            sx={{
                borderRadius: 2,
                boxShadow: 5,
                maxWidth: {xs:400, lg:475},
                margin: {xs:2.5, md:3},
                
            }}
            boxShadow
            shadow={"dark"}
        >
            <Box sx={{ m: 0 , p: { xs: 2, sm: 3, md: 4, xl: 5 } }}>
                {children}
            </Box>
        </Card>
    )
}