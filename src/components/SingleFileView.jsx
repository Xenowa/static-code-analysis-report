import { ArrowBackOutlined } from "@mui/icons-material"
import {
    Box,
    Typography,
    Button
} from "@mui/material"
import SingleFileTable from "./SingleFileTable"
import { useEffect, useState } from "react"


function SingleFileView({ toggleMainView, requestedFile }) {
    const [issues, setIssues] = useState()

    useEffect(() => {
        if (requestedFile?.issues?.length !== 0) {
            setIssues(requestedFile.issues)
        }
    }, [requestedFile])

    return (
        <Box sx={{ marginTop: "1rem" }}>
            <SingleFileBackIcon toggleMainView={toggleMainView} fileName={requestedFile?.fileName} />
            <SingleFileTable issues={issues} />
        </Box>
    )
}

const SingleFileBackIcon = ({ toggleMainView, fileName }) => {
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
                    {fileName}
                </Typography>
            </Box>

            {/* To position with flex this empty div has been added */}
            <div></div>
        </Box>
    )
}

export default SingleFileView
