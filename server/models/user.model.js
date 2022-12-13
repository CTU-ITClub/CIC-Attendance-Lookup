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

const { Sequelize, DataTypes } = require('sequelize')

module.exports = (sequelize, Sequelize) => {
	const User = sequelize.define('user', {
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		code: {
			type: DataTypes.STRING,
			allowNull: false,
			unique: true,
			validate: {
				len: [6, 8],
			},
		},
		name: {
			type: DataTypes.STRING,
		},
		email: {
			type: DataTypes.STRING,
			allowNull: false,
			unique: true,
			validate: {
				isEmail: true,
				isCTUEmail(value) {
					// check if value last string is 'ctu.edu.vn' or 'cit.ctu.edu.vn'
					if (
						!(
							value.endsWith('ctu.edu.vn') ||
							value.endsWith('cit.ctu.edu.vn')
						)
					) {
						throw new Error('Email không hợp lệ')
					}
				},
			},
		},
		achievement: {
			type: DataTypes.STRING,
		},
	}, { timestamps: false })
	return User
}
