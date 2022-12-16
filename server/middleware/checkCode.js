// Copyright (C) 2022 Le Van Dat
// 
// This file is part of CIC-Attendance-Lookup.
// 
// CIC-Attendance-Lookup is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
// 
// CIC-Attendance-Lookup is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
// 
// You should have received a copy of the GNU General Public License
// along with CIC-Attendance-Lookup.  If not, see <http://www.gnu.org/licenses/>.

const db = require ('../models')
const User = db.user

nmlz = (code) => {
    return code.toUpperCase()
}

checkUserExist = async (req, res, next) => {
    const code = req.params.code
    const search = await User.findOne({
        where: {
            code,
        }
    })
    if (search) {
        req.uid = search.id
        next()
    } else {
        return res.status(404).send({
            message: "MSSV không hợp lệ hoặc chưa tham gia sự kiện nào!"
        })
    }
}

module.exports = {
    checkUserExist
}