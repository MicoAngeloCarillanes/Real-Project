import CommonButton from '@components/buttons/CommonButton';
import ShadowCard from '@components/card/ShadowCard';
import NewGridTable from '@components/NewGridTable';
import { usePath } from '@utils/path.util';
import { ColDef, ICellRendererParams } from 'ag-grid-community';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-quartz.css';
import { useEffect, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

// Define row type
interface GradeRow {
    code?: string;
    name?: string;
    grade?: string;
    equiv?: string;
    button?: React.ReactNode;
    isTotal?: boolean;
}

export default function FacultyEvaluation() {
    // Hooks
    const navigate = useNavigate();
    const { renderOutlet, setBasePath } = usePath();
    // Row data for grid
    const [rowData] = useState<GradeRow[]>([
        {
            code: 'ITC - 105',
            name: 'Software Engineering',
            grade: '74',
            equiv: '2.25'
        },
        {
            code: 'ITC - 106',
            name: 'Operating Systems',
            grade: '88',
            equiv: '1.25'
        },
        {
            code: 'ITC - 107',
            name: 'Web Development',
            grade: '91',
            equiv: '1.00'
        },
        {
            code: 'ITC - 108',
            name: 'Mobile App Development',
            grade: '82',
            equiv: '1.75'
        },
        {
            code: 'ITC - 109',
            name: 'Cybersecurity Basics',
            grade: '77',
            equiv: '2.00'
        },
        {
            code: 'ITC - 110',
            name: 'Artificial Intelligence',
            grade: '89',
            equiv: '1.25'
        }
    ]);
    // Total row pinned at the bottom
    const totalRow: GradeRow[] = [
        {
            code: '',
            equiv: '1.50',
            grade: '85',
            isTotal: true,
            name: 'Total Grade'
        }
    ];
    // Column definitions for the grid
    const columnDefs: ColDef<GradeRow>[] = [
        {
            field: 'code',
            headerName: 'Course Code',
            width: 140,
            headerClass: 'ag-grade-header',
            cellClass: 'font-[600] text-[#080612] text-[13px]'
        },
        {
            field: 'name',
            headerName: 'Course Name',
            flex: 1,
            headerClass: 'ag-grade-header',
            cellClass: 'text-[#080612] text-[13px]'
        },
        {
            field: 'grade',
            headerName: 'Grade',
            width: 120,
            headerClass: 'ag-grade-header items-center flex justi-center',
            cellClass: 'font-[600] text-[#080612] text-[13px]'
        },
        {
            field: 'equiv',
            headerName: 'Equivalent',
            width: 120,
            headerClass: 'ag-grade-header',
            cellClass: 'text-center font-[600] text-[#080612] text-[13px]'
        },
        {
            field: 'button',
            headerName: 'Action',
            width: 140,
            sortable: false,
            headerClass: 'ag-grade-header',
            cellClass: 'flex justify-center',
            cellRenderer: (params: ICellRendererParams<GradeRow>) => {
                const courseCode = params.data?.code;

                if (!courseCode) {
                    return;
                }

                return (
                    <CommonButton
                        buttonLabel="View Grade"
                        buttonStyle="blue"
                        size="sm"
                        onButtonClick={() => handleViewGrade(courseCode)}
                    />
                );
            }
        }
    ];

    useEffect(() => {
        setBasePath('/student/profile/grade-report');
    }, []);

    function handleViewGrade(courseCode: string) {
        navigate(`${courseCode}`);
    }

    return (
        <div className="flex flex-col gap-[16px] w-full">
            <div className="flex items-baseline justify-between leading-[100%]">
                <div className="flex flex-col gap-[8px] leading-[100%]">
                    <h1 className="font-[800] text-[#0C60A1] text-[20px]">
                        Julius Robert T. Tolentino
                    </h1>
                    <h2 className="font-[500] text-[#080612] text-[14px]">Faculty Evaluation</h2>
                </div>
            </div>
            <ShadowCard white>
                <NewGridTable<GradeRow>
                    rowData={rowData}
                    columnDefs={columnDefs}
                    pinnedBottomRowData={totalRow}
                />
            </ShadowCard>
        </div>
    );
}