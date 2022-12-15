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

const { Sequelize } = require('sequelize')
require('dotenv').config()
const sequelize = new Sequelize(
	process.env.DB_NAME,
	process.env.DB_USERNAME,
	process.env.DB_PASSWORD,
	{
		host: process.env.DB_HOST,
		dialect: process.env.DB_CONNECTION,
		port: process.env.DB_PORT,
		pool: {
			max: 100,
			min: 0,
			acquire: 30000,
			idle: 10000,
		},
		timezone: process.env.DB_TZ,
		logging: false,
	}
)

// export the sequelize connection
module.exports = sequelize
