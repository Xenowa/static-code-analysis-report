import {
    AssignmentOutlined,
    BugReportOutlined,
    CodeOffOutlined,
    LockOpenOutlined
} from "@mui/icons-material"
import {
    Box,
    Card,
    IconButton,
    Typography
} from "@mui/material"

function InfoCards({ statistics }) {
    return (
        <Box sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
            gap: "0.5rem",
        }}>
            <Card sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: "0.5rem",
                bgcolor: "#2C2C2C",
                gap: "1rem",
                width: "15rem",
                height: "100%",
                color: "#ffffff",
                borderRadius: "0.5rem"
            }}>
                <IconButton disabled>
                    <AssignmentOutlined color="white" sx={{ fontSize: "4rem" }} />
                </IconButton>
                <Box sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                }}>
                    <Typography variant="h2">{statistics.filesScanned}</Typography>
                    <Typography variant="h5">Total files scanned</Typography>
                </Box>
            </Card>
            <Card sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: "0.5rem",
                bgcolor: "#33B4AF",
                gap: "1rem",
                width: "15rem",
                height: "100%",
                color: "#ffffff",
                borderRadius: "0.5rem"
            }}>
                <IconButton disabled>
                    <CodeOffOutlined color="white" sx={{ fontSize: "4rem" }} />
                </IconButton>
                <Box sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                }}>
                    <Typography variant="h2">{statistics.totalCodeSmells}</Typography>
                    <Typography variant="h5">Code Smells</Typography>
                </Box>
            </Card>
            <Card sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: "0.5rem",
                bgcolor: "#FEAC39",
                gap: "1rem",
                width: "15rem",
                height: "100%",
                color: "#ffffff",
                borderRadius: "0.5rem"
            }}>
                <IconButton disabled>
                    <BugReportOutlined color="white" sx={{ fontSize: "4rem" }} />
                </IconButton>
                <Box sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                }}>
                    <Typography variant="h2">{statistics.totalBugs}</Typography>
                    <Typography variant="h5">Bugs</Typography>
                </Box>
            </Card>
            <Card sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: "0.5rem",
                bgcolor: "#F74B5A",
                gap: "1rem",
                width: "15rem",
                height: "100%",
                color: "#ffffff",
                borderRadius: "0.5rem"
            }}>
                <IconButton disabled>
                    <LockOpenOutlined color="white" sx={{ fontSize: "4rem" }} />
                </IconButton>
                <Box sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                }}>
                    <Typography variant="h2">{statistics.totalVulnerabilities}</Typography>
                    <Typography variant="h5">Vulnerabilities</Typography>
                </Box>
            </Card>
        </Box>
    )
}

export default InfoCards
