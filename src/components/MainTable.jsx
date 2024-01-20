import {
    BugReportOutlined,
    CodeOffOutlined,
    LockOpenOutlined
} from '@mui/icons-material';
import {
    Typography,
    IconButton
} from '@mui/material';
import Box from '@mui/material/Box';
import {
    DataGrid,
    GridToolbar
} from '@mui/x-data-grid';


const columns = [
    {
        field: 'fileName',
        renderHeader: () => {
            return (
                <strong>File Name</strong>
            )
        },
        width: 245,
        renderCell: (cellText) => {
            return <Typography variant="p" sx={{
                color: "primary.main",
                fontWeight: "bold",
                cursor: "pointer"
            }}>
                {cellText.value}
            </Typography>
        },
    },
    {
        field: 'codeSmells',
        renderHeader: () => {
            return (
                <Box>
                    <IconButton disabled>
                        <CodeOffOutlined fontSize="large" sx={{ color: "#33B4AF" }} />
                    </IconButton>
                    <strong>Code Smells</strong>
                </Box>
            )
        },
        width: 245,
        headerAlign: "right",
        align: "right",
    },
    {
        field: 'bugs',
        renderHeader: () => {
            return (
                <Box>
                    <IconButton disabled>
                        <BugReportOutlined fontSize="large" sx={{ color: "#FEAC39" }} />
                    </IconButton>
                    <strong>Bugs</strong>
                </Box>
            )
        },
        type: 'number',
        width: 245,
        headerAlign: "right",
        align: "right",
    },
    {
        field: 'vulnerabilities',
        renderHeader: () => {
            return (
                <Box>
                    <IconButton disabled>
                        <LockOpenOutlined fontSize="large" sx={{ color: "#F74B5A" }} />
                    </IconButton>
                    <strong>Vulnerabilities</strong>
                </Box>
            )
        },
        width: 245,
        headerAlign: "right",
        align: "right",
    },
];

const rows = [
    { id: 1, fileName: "main.bal", codeSmells: 2, bugs: 1, vulnerabilities: 4 },
    { id: 2, fileName: "module1_file.bal", codeSmells: 3, bugs: 2, vulnerabilities: 0 },
    { id: 3, fileName: "module2_file.bal", codeSmells: 1, bugs: 5, vulnerabilities: 2 },
    { id: 4, fileName: "module3_file.bal", codeSmells: 0, bugs: 1, vulnerabilities: 3 },
    { id: 5, fileName: "module4_file.bal", codeSmells: 4, bugs: 0, vulnerabilities: 1 },
    { id: 6, fileName: "module5_file.bal", codeSmells: 2, bugs: 3, vulnerabilities: 0 },
    { id: 7, fileName: "module6_file.bal", codeSmells: 0, bugs: 2, vulnerabilities: 1 },
    { id: 8, fileName: "module7_file.bal", codeSmells: 1, bugs: 0, vulnerabilities: 4 },
    { id: 9, fileName: "module8_file.bal", codeSmells: 5, bugs: 4, vulnerabilities: 2 },
    { id: 10, fileName: "module9_file.bal", codeSmells: 3, bugs: 1, vulnerabilities: 0 },
    { id: 11, fileName: "module10_file.bal", codeSmells: 0, bugs: 3, vulnerabilities: 2 },
    { id: 12, fileName: "module11_file.bal", codeSmells: 2, bugs: 0, vulnerabilities: 5 },
    { id: 13, fileName: "module12_file.bal", codeSmells: 4, bugs: 2, vulnerabilities: 1 },
    { id: 14, fileName: "module13_file.bal", codeSmells: 1, bugs: 4, vulnerabilities: 3 },
    { id: 15, fileName: "module14_file.bal", codeSmells: 0, bugs: 0, vulnerabilities: 4 },
    { id: 16, fileName: "module15_file.bal", codeSmells: 3, bugs: 5, vulnerabilities: 0 },
    { id: 17, fileName: "module16_file.bal", codeSmells: 2, bugs: 3, vulnerabilities: 1 },
    { id: 18, fileName: "module17_file.bal", codeSmells: 4, bugs: 1, vulnerabilities: 0 },
    { id: 19, fileName: "module18_file.bal", codeSmells: 0, bugs: 4, vulnerabilities: 2 },
    { id: 20, fileName: "module19_file.bal", codeSmells: 1, bugs: 0, vulnerabilities: 3 },
    { id: 21, fileName: "module20_file.bal", codeSmells: 5, bugs: 2, vulnerabilities: 1 },
    { id: 22, fileName: "module21_file.bal", codeSmells: 2, bugs: 1, vulnerabilities: 0 },
    { id: 23, fileName: "module22_file.bal", codeSmells: 3, bugs: 0, vulnerabilities: 4 },
    { id: 24, fileName: "module23_file.bal", codeSmells: 0, bugs: 4, vulnerabilities: 3 },
    { id: 25, fileName: "module24_file.bal", codeSmells: 4, bugs: 3, vulnerabilities: 0 },
    { id: 26, fileName: "module25_file.bal", codeSmells: 1, bugs: 5, vulnerabilities: 2 },
    { id: 27, fileName: "module26_file.bal", codeSmells: 3, bugs: 2, vulnerabilities: 1 },
    { id: 28, fileName: "module27_file.bal", codeSmells: 2, bugs: 0, vulnerabilities: 4 },
    { id: 29, fileName: "module28_file.bal", codeSmells: 0, bugs: 3, vulnerabilities: 2 },
    { id: 30, fileName: "module29_file.bal", codeSmells: 5, bugs: 1, vulnerabilities: 0 },
    { id: 31, fileName: "module30_file.bal", codeSmells: 1, bugs: 4, vulnerabilities: 2 },
    { id: 32, fileName: "module31_file.bal", codeSmells: 3, bugs: 2, vulnerabilities: 0 },
    { id: 33, fileName: "module32_file.bal", codeSmells: 2, bugs: 0, vulnerabilities: 3 },
    { id: 34, fileName: "module33_file.bal", codeSmells: 4, bugs: 3, vulnerabilities: 1 },
    { id: 35, fileName: "module34_file.bal", codeSmells: 0, bugs: 5, vulnerabilities: 2 },
    { id: 36, fileName: "module35_file.bal", codeSmells: 1, bugs: 2, vulnerabilities: 4 },
    { id: 37, fileName: "module36_file.bal", codeSmells: 3, bugs: 1, vulnerabilities: 0 },
];

function MainTable({ toggleSingleFileView }) {
    function cellClicked(event) {
        if (event.field === "fileName") {
            toggleSingleFileView(true, event.value)
        }
    }

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
                autoHeight
                onCellClick={(e) => { cellClicked(e) }}
            />
        </Box>
    );
}

export default MainTable;