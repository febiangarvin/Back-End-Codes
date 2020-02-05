const { mysqldb } = require('./../connection')

module.exports = {
    registerUser: (req, res) => {
        console.log(req.body);
        var { username, password, role } = req.body
        let data = {
            username,
            password,
            role
        }
        let sql = `select username from users where username = '${username}'`
        mysqldb.query(sql, (err, results) => {
            if (err) throw err

            if (results.length > 0) {
                res.status(500).send({ message: 'User Already Exist' })
            }
            else {
                let sql2 = `insert into user set ?`
                mysqldb.query(sql, data, (err, result) => {
                    if (err) throw err
                    res.status(200).send({ message: 'Username Created' })
                })
            }
        })
    },
    loginUser: (req, res) => {
        var { username, password } = req.body

        let sql = `select * from users where username=? and password=?`

        mysqldb.query(sql, [username, password], (err, results) => {
            if (err) throw err
            if (results.length > 0) {
                return res.status(200).send({ message: 'Berhasil Login' })
            }
            res.status(500).send({ message: 'Username/Password Wrong' })
        })
    }
}