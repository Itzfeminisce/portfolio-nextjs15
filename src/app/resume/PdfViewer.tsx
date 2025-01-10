"use client"
import { Button } from '@/styles/components/ui/button';
import { Viewer, Worker } from '@react-pdf-viewer/core';
import { getFilePlugin, RenderDownloadProps, } from '@react-pdf-viewer/get-file';
import { DownloadIcon } from 'lucide-react';



const PdfViewer = () => {
    const getFilePluginInstance = getFilePlugin()
    return (
        <>
            <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
            <getFilePluginInstance.Download>
                {
                    (props: RenderDownloadProps) => (
                        <div className="flex w-full justify-end items-center">
                            <Button variant="ghost" size="icon" onClick={props.onClick}>
                                <DownloadIcon /> 
                            </Button>
                        </div>
                    )
                }
            </getFilePluginInstance.Download>
                <div className='h-full rounded-md overflow-hidden'>
                    <Viewer
                        fileUrl="/Oluwafemi_s_Resume.pdf"
                        plugins={[
                            getFilePluginInstance
                        ]}
                    />
                </div>
            </Worker>
        </>

    );
}

export default PdfViewer