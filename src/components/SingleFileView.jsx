import { ArrowBackOutlined } from "@mui/icons-material"
import {
    Box,
    Typography,
    Button
} from "@mui/material"
import SingleFileTable from "./SingleFileTable"


function SingleFileView({ toggleMainView, fileView }) {
    return (
        <Box sx={{ marginTop: "1rem" }}>
            <SingleFileBackIcon toggleMainView={toggleMainView} fileView={fileView} />
            <SingleFileTable />
        </Box>
    )
}

const SingleFileBackIcon = ({ toggleMainView, fileView }) => {
    return (
        <Box sx={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-around"
        }}>
            <Box sx={{
                display: "flex",
                alignItems: "center",
                gap: "1rem",
            }}>
                <Button onClick={() => { toggleMainView() }}
                    sx={{
                        padding: "0 1rem",
                        borderRadius: "0.5rem"
                    }}>
                    <ArrowBackOutlined
                        sx={{ fontSize: "4rem" }}
                        color="primary"
                    />
                </Button>
                <Typography variant="h3" fontWeight="bold">
                    {fileView.requestedFileName}
                </Typography>
            </Box>

            {/* To position with flex this empty div has been added */}
            <div></div>
        </Box>
    )
}

export default SingleFileView
