import {
    Box,
    Typography
} from "@mui/material";
import BallerinaLogo from "../resources/Ballerina-Logo";


function Header() {
    return (
        <Box sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-around",
            padding: "2rem 0",
            borderBottom: "1px solid var(--primary-color)"
        }}>
            <Box sx={{
                display: "flex",
                alignItems: "baseline",
                gap: "0.5rem"
            }}>
                <BallerinaLogo />
                <Typography
                    variant="h4"
                    color="primary"
                    fontWeight="600"
                    fontSize="1.4rem">
                    Scan Report
                </Typography>
            </Box>
            <Typography variant="h4">ProjectName</Typography>
        </Box>
    )
}

export default Header;
