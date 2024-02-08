import { Box } from "@mui/material";
import { useEffect, useState } from "react";


function SingleFileContent({ issues, fileContent }) {
    const [issueLines, setIssueLines] = useState([])

    useEffect(() => {
        if (issues?.length !== 0) {
            issues?.forEach((issue) => {
                const newIssueLine = issue.textRange.startLine;

                setIssueLines(prevIssueLines => [...prevIssueLines, newIssueLine]);
            })
        }
    }, [issues])

    return (
        <ContentMapper fileContent={fileContent} issueLines={issueLines} />
    )
}

const ContentMapper = ({ fileContent, issueLines }) => {
    return (
        <Box sx={{
            display: "flex",
            flexWrap: "wrap",
            flex: "1",
            width: "80%",
            flexDirection: "column",
            fontFamily: "consolas",
            fontSize: "14px",
            gap: "0.2rem",
            padding: "1rem",
            borderRadius: "0.5rem",
            border: "1px solid var(--primary-color)",
            overflowX: "auto",
        }}>
            {
                fileContent.split("\n").map((line, index) => {
                    return (
                        <pre style={{
                            margin: "0",
                            padding: "0.3rem 1rem",
                            // backgroundColor: "#f5f5f5",
                            backgroundColor: issueLines.includes(index) ? "#F74B5A" : "#f5f5f5",
                        }}>
                            <Box key={index} sx={{ display: "flex", gap: "1rem" }}>
                                <Box>
                                    {index}
                                </Box>
                                <Box>
                                    {line}
                                </Box>
                            </Box>
                        </pre>
                    )
                })
            }
        </Box>
    )
}

export default SingleFileContent;
