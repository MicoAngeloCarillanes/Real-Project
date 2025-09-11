import { ColDef, RowStyle } from 'ag-grid-community'; // import types
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-quartz.css';
import { AgGridReact } from 'ag-grid-react';
import { useMemo, useState } from 'react';

// Define row type
interface GradeRow {
  code: string;
  name: string;
  grade: string;
  equiv: string;
  isTotal?: boolean;
}

export default function GradeReport() {
    const [rowData] = useState<GradeRow[]>([
        { code: 'ITC - 129', name: 'Computer Organization (Lecture)', grade: '1.25', equiv: 'A' },
        { code: 'ITC - 129', name: 'Computer Organization (Lab)', grade: '1.50', equiv: 'A-' },
        { code: 'ITC - 129', name: 'Computer Organization (Lecture)', grade: '1.75', equiv: 'B+' },
        { code: 'ITC - 129', name: 'Computer Organization (Lab)', grade: '2.00', equiv: 'B' },
        { code: 'ITC - 129', name: 'Computer Organization (Lecture)', grade: '1.25', equiv: 'A' },
        { code: 'ITC - 129', name: 'Computer Organization (Lab)', grade: '1.50', equiv: 'A-' },
        { code: '', name: 'Course Total', grade: '1.54', equiv: 'A-', isTotal: true }
    ]);

    const columnDefs = useMemo<ColDef<GradeRow>[]>(
        () => [
            { headerName: 'Course Code', field: 'code', width: 140, cellClass: 'font-bold text-blue-900 text-sm' },
            { headerName: 'Course Name', field: 'name', flex: 1, cellClass: 'text-gray-900' },
            { headerName: 'Grade', field: 'grade', width: 120, cellClass: 'text-center font-semibold' },
            { headerName: 'Equivalent', field: 'equiv', width: 120, cellClass: 'text-center text-gray-500' }
        ],
        []
    );

    const defaultColDef = useMemo<ColDef>(() => ({ sortable: true, resizable: true }), []);

    return (
        <div className="max-w-5xl mx-auto p-6">
            <div className="bg-white p-6 rounded-2xl shadow-md">
                {/* Header */}
                <div className="flex items-baseline justify-between mb-4">
                    <div>
                        <h1 className="font-semibold text-[#052554] text-xl">Grade Report</h1>
                        <div className="text-gray-500 text-sm">Current Semester — Student: John Doe</div>
                    </div>
                    <div className="text-gray-500 text-sm">
            Generated: <span className="font-semibold">Sep 11, 2025</span>
                    </div>
                </div>

                {/* Grid */}
                <div className="ag-theme-quartz" style={{ height: 400, width: '100%' }}>
                    <AgGridReact<GradeRow>
                        rowData={rowData}
                        columnDefs={columnDefs}
                        defaultColDef={defaultColDef}
                        getRowStyle={(params): RowStyle | undefined =>
                            params.data?.isTotal
                                ? { fontWeight: '700', borderTop: '2px solid #e6e9ef', background: '#fafafa' }
                                : undefined
                        }
                    />
                </div>
            </div>
        </div>
    );
}