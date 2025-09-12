import { getMinWidth } from '@utils/ag-grid.util';
import { ColDef } from 'ag-grid-community';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-quartz.css';
import { AgGridReact } from 'ag-grid-react';
import { useMemo } from 'react';

interface NewGridTableProps<T> {
    columnDefs: ColDef<T>[];
    minCharWidth?: number;
    pinnedBottomRowData?: T[];
    rowData: T[];
}

export default function NewGridTable<T>({
    columnDefs,
    minCharWidth = 8,
    pinnedBottomRowData,
    rowData
}: NewGridTableProps<T>) {
    const defaultColDef = useMemo<ColDef>(() => ({
        sortable: true,
        resizable: false,
        suppressMovable: true
    }), []);
    const processedColumns = useMemo(() =>
        columnDefs.map((col) => {
            let minWidth = col.minWidth;

            if (!minWidth && col.field && rowData.length > 0) {
                minWidth = getMinWidth(rowData as Record<string, unknown>[], col.field.toString(), minCharWidth);
            }

            return {
                ...col,
                minWidth
            };
        }), [columnDefs, rowData, minCharWidth]);

    return (
        <div className="ag-theme-quartz h-full w-full">
            <AgGridReact<T>
                domLayout="autoHeight"
                rowData={rowData}
                pinnedBottomRowData={pinnedBottomRowData}
                columnDefs={processedColumns}
                defaultColDef={defaultColDef}
            />
        </div>
    );
}