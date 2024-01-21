import {
    BugReportOutlined,
    CodeOffOutlined,
    LockOpenOutlined
} from '@mui/icons-material';
import { IconButton } from '@mui/material';
import Box from '@mui/material/Box';
import {
    DataGrid,
    GridToolbar
} from '@mui/x-data-grid';
import { useEffect, useState } from 'react';


const issueTypeCell = (cellValue) => {
    switch (cellValue) {
        case "CODE_SMELL":
            return (
                <Box>
                    <IconButton disabled>
                        <CodeOffOutlined fontSize="large" sx={{ color: "#33B4AF" }} />
                    </IconButton>
                    <strong>Code Smell</strong>
                </Box>
            )
        case "BUG":
            return (
                <Box>
                    <IconButton disabled>
                        <BugReportOutlined fontSize="large" sx={{ color: "#FEAC39" }} />
                    </IconButton>
                    <strong>Bug</strong>
                </Box>
            )
        case "VULNERABILITY":
            return (
                <Box>
                    <IconButton disabled>
                        <LockOpenOutlined fontSize="large" sx={{ color: "#F74B5A" }} />
                    </IconButton>
                    <strong>Vulnerability</strong>
                </Box>
            )
    }
}

const columns = [
    {
        field: 'ruleID',
        renderHeader: () => {
            return (
                <strong>Rule ID</strong>
            )
        },
        width: 100,
    },
    {
        field: 'issueType',
        renderHeader: () => {
            return (
                <strong>Issue Type</strong>
            )
        },
        width: 245,
        headerAlign: "right",
        align: "right",
        renderCell: (cell) => issueTypeCell(cell.value)
    },
    {
        field: 'lineRange',
        renderHeader: () => {
            return (
                <strong>Line Range</strong>
            )
        },
        width: 100,
        headerAlign: "right",
        align: "right",
    },
    {
        field: 'description',
        renderHeader: () => {
            return (
                <strong>Description</strong>
            )
        },
        width: 245 + 145 * 3,
        headerAlign: "right",
        align: "right",
    }
];

function SingleFileTable({ issues }) {
    const [rows, setRows] = useState([])

    useEffect(() => {
        if (issues?.length !== 0) {
            issues?.forEach((issue, issueID) => {
                const newRow = {
                    id: issueID,
                    ruleID: issue.ruleID,
                    issueType: issue.type,
                    lineRange: `${issue.textRange.startLine} - ${issue.textRange.endLine}`,
                    description: issue.message
                }

                setRows(prevRows => [...prevRows, newRow]);
            })
        }
    }, [issues])

    return (
        <Box sx={{
            maxWidth: "fit-content",
            margin: "1rem auto",
        }}>
            <DataGrid
                sx={{
                    padding: "0 2rem",
                    borderRadius: "0.5rem",
                    border: "1px solid var(--primary-color)"
                }}
                rows={rows}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: {
                            pageSize: 5,
                        },
                    },
                }}
                pageSizeOptions={[5, 50, 100]}
                slots={{
                    toolbar: GridToolbar
                }}
                disableColumnMenu={true}
                checkboxSelection={true}
                disableRowSelectionOnClick
                getRowHeight={() => 'auto'}
            />
        </Box>
    );
}

export default SingleFileTable;