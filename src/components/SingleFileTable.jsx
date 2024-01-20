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


const issueTypeCell = (cellValue) => {
    console.log(cellValue)
    switch (cellValue) {
        case "code smell":
            return (
                <Box>
                    <IconButton disabled>
                        <CodeOffOutlined fontSize="large" sx={{ color: "#33B4AF" }} />
                    </IconButton>
                    <strong>Code Smell</strong>
                </Box>
            )
        case "bug":
            return (
                <Box>
                    <IconButton disabled>
                        <BugReportOutlined fontSize="large" sx={{ color: "#FEAC39" }} />
                    </IconButton>
                    <strong>Bug</strong>
                </Box>
            )
        case "vulnerability":
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

const rows = [
    { id: 1, ruleID: "S107", issueType: "code smell", lineRange: `${0} - ${12}`, description: "This function has 8 parameters,which is greater than the 7 authorized." },
    { id: 2, ruleID: "S107", issueType: "code smell", lineRange: `${0} - ${12}`, description: "This function has 8 parameters,which is greater than the 7 authorized." },
    { id: 3, ruleID: "S108", issueType: "code smell", lineRange: `${0} - ${12}`, description: "This function has 1 occurrences of checkpanic keyword. Please consider using the check keyword instead!" },
    { id: 4, ruleID: "S108", issueType: "code smell", lineRange: `${0} - ${12}`, description: "This function has 1 occurrences of checkpanic keyword. Please consider using the check keyword instead!" },
    { id: 5, ruleID: "S109", issueType: "bug", lineRange: `${0} - ${12}`, description: "Add a nested comment explaining why this function is empty or complete the implementation." },
    { id: 6, ruleID: "S109", issueType: "bug", lineRange: `${0} - ${12}`, description: "Add a nested comment explaining why this function is empty or complete the implementation." },
    { id: 7, ruleID: "S109", issueType: "bug", lineRange: `${0} - ${12}`, description: "Add a nested comment explaining why this function is empty or complete the implementation." },
    { id: 8, ruleID: "S110", issueType: "vulnerability", lineRange: `${0} - ${12}`, description: "Some rule violation message" },
    { id: 9, ruleID: "S110", issueType: "vulnerability", lineRange: `${0} - ${12}`, description: "Some rule violation message" },
    { id: 10, ruleID: "S110", issueType: "vulnerability", lineRange: `${0} - ${12}`, description: "Some rule violation message" },
    { id: 11, ruleID: "S110", issueType: "vulnerability", lineRange: `${0} - ${12}`, description: "Some rule violation message" },
    { id: 12, ruleID: "S107", issueType: "code smell", lineRange: `${0} - ${12}`, description: "This function has 8 parameters,which is greater than the 7 authorized." },
    { id: 13, ruleID: "S107", issueType: "code smell", lineRange: `${0} - ${12}`, description: "This function has 8 parameters,which is greater than the 7 authorized." },
    { id: 14, ruleID: "S108", issueType: "bug", lineRange: `${0} - ${12}`, description: "This function has 1 occurrences of checkpanic keyword. Please consider using the check keyword instead!" },
    { id: 15, ruleID: "S109", issueType: "bug", lineRange: `${0} - ${12}`, description: "Add a nested comment explaining why this function is empty or complete the implementation." },
];

function SingleFileTable() {
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