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

getAllEvent = async (req, res) => {
    try {
        const event = await Event.findAll({
            attributes: ['id', 'name'],
        })
        if (event) {
            return res.send(event)
        } else {
            return res.status(404).send({
                message: "Nothing here :(",
            })
        }
    } catch (error) {
        return res.status(500).send({
            message: "System error while get data",
            error
        })
    }
}

getEventById = async (req, res) => {
    const eid = req.params.id;
    try {
        const event = await Event.findOne({
            where: {
                id: eid,
            },
            attributes: {
                exclude: ['createdAt', 'updatedAt']
            }
        })
        if (event) {
            return res.send(event)
        } else {
            return res.status(404).send({
                message: "Not found",
            })
        }
    } catch (error) {
        return res.status(500).send({
            message: "System error while get data",
            error
        })
    }
}

module.exports = {
    getAllEvent,
    getEventById,
}