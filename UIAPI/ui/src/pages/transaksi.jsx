import React, { useState, useEffect } from 'react';
import { Table, CustomInput, Button } from 'reactstrap';

const Transaksi = () => {
    const [addimagefile, setaddimagefile] = useState({
        addimagefilename: "",
        addimagefile: undefined
    });

    const onaddimagefilechange = event => {
        console.log(event.target.files[0]);
        var file = event.target.files[0]
        if (file) {
            setaddimagefile({
                ...addimagefile,
                addimagefile: file.name,
                addimagefile: event.target.files[0]
            })
        }
        else {
            setaddimagefile({
                ...addimagefile,
                addimagefile: "Pilih Foto",
                addimagefile: undefined
            })
        }
    }

    return (
        <div>
            <Table>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>User ID</th>
                        <th>Status</th>
                        <th>Tanggal</th>
                        <th>Foto</th>
                    </tr>
                </thead>
                <tbody></tbody>
                <tfoot>
                    <td>
                        <input type="number" placeholder="userid" />
                    </td>
                    <td>
                        <CustomInput type="file" label={addimagefile.setaddimagefile} onChange={onaddimagefilechange} />
                    </td>
                    <td>
                        <Button className='btn btn-primary'>Add Image</Button>
                    </td>
                    <td></td>
                    <td></td>
                </tfoot>
            </Table>
        </div>
    )
}

export default Transaksi