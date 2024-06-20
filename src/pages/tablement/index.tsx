import { useEffect, useState } from "react"
import { Payment, columns } from "./column"
import { DataTable } from "./data-table"

async function getData(): Promise<Payment[]> {
  // Fetch data from your API here.
  return [
    { id: 'aasgg75brv', amount: 872.38, status: 'processing', email: 'fvcikrp@sample.com' },
    { id: 'nadnjxjcfm', amount: 105.52, status: 'pending', email: 'lmdoyok@sample.com' },
    { id: '17eiyylkie', amount: 905.95, status: 'pending', email: 'yebbmsb@example.com' },
    { id: 'hed3rlnz3a', amount: 261.88, status: 'processing', email: 'exlxtqu@test.com' },
    { id: '6c7wt3sahl', amount: 228.05, status: 'failed', email: 'engczcv@test.com' },
    { id: '2qy78dsnvb', amount: 553.01, status: 'failed', email: 'dfgsayq@demo.com' },
    { id: 'y1p3adu375', amount: 351.23, status: 'pending', email: 'zivpqtt@example.com' },
    { id: '5ltzcdpvkr', amount: 892.22, status: 'success', email: 'srzcbms@demo.com' },
    { id: 'rjmv2vxuzl', amount: 825.11, status: 'pending', email: 'jbpgivw@demo.com' },
    { id: 'ru7vgqodos', amount: 976.62, status: 'pending', email: 'ayapufj@example.com' },
    { id: 'j5xw1xdm8n', amount: 359.97, status: 'pending', email: 'prsxdie@sample.com' },
    { id: 'ehm14fa7mj', amount: 217.96, status: 'processing', email: 'qsxoxnm@sample.com' },
    { id: 't7tuzsb49u', amount: 990.51, status: 'success', email: 'ndsmian@sample.com' },
    { id: 'aykrwe00go', amount: 500.99, status: 'failed', email: 'mzcvypp@sample.com' },
    { id: '01z5o03rpa', amount: 21.18, status: 'pending', email: 'lrcijyr@demo.com' },
    { id: '434rs5lwko', amount: 331.46, status: 'pending', email: 'yvqucdh@example.com' },
    { id: '4rf431wjcc', amount: 616.52, status: 'success', email: 'oagzgnv@sample.com' },
    { id: 'r8yqhwgm55', amount: 434.25, status: 'processing', email: 'njegxll@demo.com' },
    { id: 'j4ffqidnv4', amount: 693.54, status: 'processing', email: 'pipkbhk@sample.com' },
    { id: '47uxbd43sc', amount: 938.52, status: 'processing', email: 'zfmfjlp@test.com' },
    { id: 'kujw098i3q', amount: 478.67, status: 'failed', email: 'hhvfpmn@sample.com' },
    { id: 'spvs3b11ci', amount: 414.93, status: 'pending', email: 'rufksjb@example.com' },
    { id: 'krbaf2mdo8', amount: 910.09, status: 'failed', email: 'fgyvgup@sample.com' },
    { id: 'sowcnodaf6', amount: 40.89, status: 'pending', email: 'lmseiak@demo.com' },
    { id: 'qc65wd6iky', amount: 192.85, status: 'failed', email: 'wjzbrlj@demo.com' },
    { id: '88g8oce6nu', amount: 641.66, status: 'success', email: 'mdkntdi@example.com' },
    { id: 'j1408s8tkw', amount: 620.59, status: 'pending', email: 'itnttno@sample.com' },
    { id: 'hcbgqwv9ej', amount: 708.00, status: 'failed', email: 'egicfyo@demo.com' },
    { id: 'g1bcfdhjif', amount: 882.78, status: 'processing', email: 'mctmeut@example.com' },
    { id: 'olvh49ew8l', amount: 132.05, status: 'failed', email: 'qwfcizz@demo.com' },
    // ...
  ]
}

export default function Tablement() {
    const [data, setData] = useState<Payment[]>([])
    const getDataa = async () => {
        
        const data = await getData()
        setData(data)
    }
    useEffect(() => {
        getDataa();
    },[]);

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  )
} 
