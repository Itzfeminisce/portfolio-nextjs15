"use client"
import { Document, Page } from 'react-pdf';
import { Skeleton } from "../../styles/components/ui/skeleton"


import { pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.mjs',
    import.meta.url,
).toString();


export default function PdfViewer() {
    return (
        <div className='container mx-auto w-1/2'>
            <Document loading={<SkeletonCard />} file="Oluwafemi_s_Resume.pdf">
                <Page pageNumber={1}/>
            </Document>
        </div>
    );
}

 
export function SkeletonCard() {
  return (
    <div className="flex flex-col space-y-3">
      <Skeleton className="h-[125px] w-[250px] rounded-xl" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    </div>
  )
}