import { Box } from "@mui/material";
import InfoCards from "./InfoCards";
import MainTable from "./MainTable";

function MainView({ toggleSingleFileView }) {
    return (
        <Box sx={{
            marginTop: "1rem"
        }}>
            <InfoCards />
            <MainTable toggleSingleFileView={toggleSingleFileView} />
        </Box>
    )
}

export default MainView;