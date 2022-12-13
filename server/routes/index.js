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
const { getAllEvent, getEventById } = require ('../controllers/event.controller')
const { getAttendanceByUserID } = require ('../controllers/attendance.controller')

module.exports = (app) => {
    app.get('/api/events', getAllEvent)
    app.get('/api/events/by-id/:id', getEventById)
    app.get('/api/attendance/by-user/:id', getAttendanceByUserID)
    // app.get('/api/attendance/by-event/:id')
}