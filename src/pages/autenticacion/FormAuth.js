import { Grid, Stack, InputLabel, OutlinedInput, FormControlLabel, Checkbox, Typography, Link, Button } from "@mui/material"

import { Link as RouterLink } from "react-router-dom"

export const FormAuth = () => {
    return (
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <Stack spacing={1}>
                    <InputLabel >Nombre de Usuario</InputLabel>
                    <OutlinedInput></OutlinedInput>
                </Stack>
            </Grid>
            <Grid item xs={12}>
                <Stack spacing={1}>
                    <InputLabel >Contraseña</InputLabel>
                    <OutlinedInput></OutlinedInput>
                </Stack>
            </Grid>

            <Grid item xs={12} sx={{ mt: -1 }}>
                <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={2}>
                    <FormControlLabel
                        control={
                            <Checkbox
                                name="checked"
                                color="primary"
                                size="small"
                            />
                        }
                        label = {<Typography variant="h6">Recordarme</Typography>}
                    />
                    <Link variant="h6" component={RouterLink} to="" color="text.primary">
                        ¿Olivaste tu contraseña?
                    </Link>
                </Stack>
            </Grid>

            <Grid xs={12}>
                <Button fullWidth size="large" type="submit" variant="contained" color="primary">
                    Login
                </Button>
            </Grid>
            
        </Grid>
    )
}