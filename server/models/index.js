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

require('dotenv').config()
const { Sequelize, Op } = require('sequelize')
const sequelize = require('../config/db.config')
const db = { Sequelize, sequelize }
db.user = require('./user.model')(sequelize, Sequelize)
db.event = require('./event.model')(sequelize, Sequelize)
db.atype = require('./atype')(sequelize, Sequelize)
db.atable = require('./atable')(sequelize, Sequelize)

db.atable.belongsTo(db.atype, {
    foreignKey: 'atype_id',
    as: 'atype',
})
db.atable.belongsTo(db.event, {
    foreignKey: 'event_id',
    as: 'event',
})
db.atable.belongsTo(db.user, {
    foreignKey: 'user_id',
    as: 'user',
})

db.sync = async () => {
    await sequelize.sync()
}

module.exports = db