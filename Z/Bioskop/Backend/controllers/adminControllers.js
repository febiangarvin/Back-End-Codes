const { mysqldb } = require('../connection')

module.exports = {
    addMovie: (req, res) => {
        var { title,
            image,
            sinopsis,
            sutradara,
            trailer,
            produksi } = req.body

        var data = {
            title,
            image,
            sinopsis,
            sutradara,
            trailer,
            produksi
        }

        var sql = `insert into movies set ?`
        mysqldb.query(sql, data, (err, result) => {
            if (err) throw err

            res.status(200).send(result)

        })
    },
    addGenre: (req, res) => {
        // console.log(req.body[0])
        const data = req.body
        let sql = `insert into genre (movieId,namaGenre) values ?`
        // console.log(data)

        let dataarr = []
        for (const props in data) {
            // dataarr.push([data[props].movieId,data[props].namaGenre])

            console.log(props)
        }
        // console.log(dataarr, 'dataarr')



        // mysqldb.query(sql, [dataarr], (err,result)=>{
        //     if(err) throw err
        //     return res.status(200).send(result)
        // })


        // res.send('woi')
    },
    addStudio: (req, res) => {
        const data = req.body

        let sql = `insert into studio (movieId, namaStudio, jumlahKursi) values ?`

        let dataarr = []
        for (const props in data) {
            dataarr.push([data[props].movieId, data[props].namaStudio, data[props].jumlahKursi])
        }

        console.log(dataarr);

        mysqldb.query(sql, [dataarr], (err, result) => {
            if (err) throw err
            return res.status(200).send(result)
        })
    },
    addJadwal: (req, res) => {
        const data = req.body

        let sql = `insert into jadwal (movieId,jadwal) values ?`

        let dataarr = []
        for (const props in data) {
            dataarr.push([data[props].movieId, data[props].jadwal])
        }
        mysqldb.query(sql, [dataarr], (err, result) => {
            if (err) throw err
            return res.status(200).send(result)
        })
    },
    editMovie: (req, res) => {
        console.log(req.params.id);

        const { title, image, sinopsis, sutradara, trailer, produksi } = req.body

        let data = {
            title,
            image,
            sinopsis,
            sutradara,
            trailer,
            produksi
        }

        const id = req.params.id

        let sql = `update movies set ? where id = ?`

        mysqldb.query(sql, [data, id], (err, result) => {
            if (err) throw err
            return res.status(200).send(result)
        })
    },
    editGenre: (req, res) => {
        console.log(req.body);
        let sql = ""

        req.body.forEach((val, index) => {
            sql += `update genre set namagenre = '${val.namaGenre}' where id = ${val.Id};`
        })

        mysqldb.query(sql, (err, result) => {
            if (err) throw err
            return res.status(200).send(result)
        })
    }
}