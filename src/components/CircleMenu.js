
import React, { useRef } from 'react';
import { SpeedDial } from 'primereact/speeddial';
import { Toast } from 'primereact/toast';
import "../styles/CircleMenu.css";

export default function QuarterCircleDemo() {
    const toast = useRef(null);
    const items = [
        {
            label: 'Add',
            icon: 'pi pi-pencil',
            command: () => {
                toast.current.show({ severity: 'info', summary: 'Add', detail: 'Data Added' });
            }
        },
        {
            label: 'Update',
            icon: 'pi pi-refresh',
            command: () => {
                toast.current.show({ severity: 'success', summary: 'Update', detail: 'Data Updated' });
            }
        },
        {
            label: 'Delete',
            icon: 'pi pi-trash',
            command: () => {
                toast.current.show({ severity: 'error', summary: 'Delete', detail: 'Data Deleted' });
            }
        },
        {
            label: 'React Website',
            icon: 'pi pi-external-link',
            command: () => {
                window.location.href = 'https://facebook.github.io/react/';
            }
        }
    ];

    return (
        <div className="menu">
                <Toast ref={toast} position="bottom-right" />
                <SpeedDial model={items} radius={120} type="quarter-circle" direction="down-left" style={{ right: 0, top: 0 }} buttonClassName="p-button-help" />
        </div>
    )
}
        