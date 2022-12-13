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

const db = require('../models')
const Event = db.event
const User = db.user
const AType = db.atype
const ATable = db.atable

getAttendanceByUserID = async (req, res) => {
    const uid = req.params.id
    const attendance = await ATable.findAll({
        where: {
            user_id: uid
        },
        include: [
            {
                model: Event,
                as: 'event'
            }
        ]
    })
    if (!attendance) {
        return res.status(404).send({
            message: "Rất tiếc, hệ thống chưa ghi nhận bạn đã tham gia hoạt động nào của CLB Tin học :("
        })
    }
    return res.send(attendance)
}

module.exports = {
    getAttendanceByUserID,
}