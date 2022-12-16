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

const express = require('express')
const app = express()
const logger = require('morgan')
const bodyParser = require('body-parser')
require('dotenv').config()
const PORT = process.env.PORT || 3000
const router = require('./routes')
const redis = require('redis')
const apicache = require('apicache')
const cors = require('cors')
const corsOptions = {
	origin: process.env.CLIENT_URL || 'http://localhost:3000',
	optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
	methods: 'GET',
}

app.disable('x-powered-by')
app.use(cors(corsOptions))
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

const db = require('./models')

const cache = (process.env.REDIS_USE === "true") ? apicache.options({ redisClient: redis.createClient() }).middleware : apicache.middleware

app.use(cache('1 day'))

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}.`)
	router(app)
	db.sync()
})